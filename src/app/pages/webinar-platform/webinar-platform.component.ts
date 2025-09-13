import { Component, OnDestroy, OnInit } from '@angular/core';
import { Webinar, Speaker, Topic } from '../../models/webinar';
import { WebinarService } from '../../services/webinar.service';
import { TabService } from '../../services/tab.service';
import { FooterNavComponent } from '../../components/footer-nav/footer-nav.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { TabsNavigationComponent } from '../../components/tabs-navigation/tabs-navigation.component';
import { TopicCardComponent } from '../../components/topic-card/topic-card.component';
import { WebinarCardComponent } from '../../components/webinar-card/webinar-card.component';
import { SpeakerCardComponent } from '../../components/speaker-card/speaker-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-webinar-platform',
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    SectionHeaderComponent,
    TabsNavigationComponent,
    TopicCardComponent,
    WebinarCardComponent,
    SpeakerCardComponent,
  ],
  templateUrl: './webinar-platform.component.html',
  styleUrls: ['./webinar-platform.component.scss'],
})
export class WebinarPlatformComponent implements OnInit, OnDestroy {
  liveWebinars: Webinar[] = [];
  upcomingWebinars: Webinar[] = [];
  continueWatchingWebinars: Webinar[] = [];
  cardiologyWebinars: Webinar[] = [];
  speakers: Speaker[] = [];
  topics: Topic[] = [];
  browseTopics: Topic[] = [];
  specialties: string[] = [];
  pharmaAssociations: string[] = ['Roche', 'Pfizer', 'Bayer', 'GSK'];
  activeTab: string = 'for-you';

  filterOpen = {
    specialty: true,
    topics: true,
    speakers: true,
    pharma: true,
  };

  filterSearch = {
    specialty: '',
  };

  selectedFilters = {
    specialty: new Set<string>(),
    topics: new Set<string>(),
    speakers: new Set<string>(),
    pharma: new Set<string>(),
  };

  filteredWebinars: Webinar[] = [];

  private tabSubscription: Subscription | undefined;

  // Add a helper method to ensure showSocialStats is always boolean
  isShowButtons(webinar: Webinar): boolean {
    return webinar.showSocialStats === true;
  }

  constructor(private webinarService: WebinarService, private tabService: TabService) {}

  ngOnInit() {
    this.liveWebinars = this.webinarService.getLiveWebinars();
    this.upcomingWebinars = this.webinarService.getUpcomingWebinars();
    this.continueWatchingWebinars = this.webinarService.getContinueWatchingWebinars();
    this.cardiologyWebinars = this.webinarService.getCardiologyWebinars();
    this.speakers = this.webinarService.getSpeakers();
    this.topics = this.webinarService.getTopics();
    this.browseTopics = this.webinarService.getBrowseTopics();
    this.specialties = this.webinarService.getSpecialties();

    // Initialize filteredWebinars with all webinars combined, allowing duplicates on first load
    this.filteredWebinars = this.webinarService.getAllWebinars();

    // Add notify button visibility flag for upcoming webinars
    this.upcomingWebinars = this.upcomingWebinars.map(webinar => ({
      ...webinar,
      showNotifyButton: true
    }));

    // Subscribe to activeTab changes from TabService
    this.tabSubscription = this.tabService.activeTab$.subscribe(tab => {
      this.activeTab = tab;
    });
  }

  setActiveTab(tab: string) {
    this.tabService.setActiveTab(tab);
  }

  toggleFilter(filterName: keyof typeof this.filterOpen) {
    this.filterOpen[filterName] = !this.filterOpen[filterName];
  }

  onFilterChange(filterName: keyof typeof this.selectedFilters, value: string, checked: boolean) {
    if (checked) {
      this.selectedFilters[filterName].add(value);
    } else {
      this.selectedFilters[filterName].delete(value);
    }
    this.applyFilters();
  }

  resetFilters() {
    // Reset filteredWebinars to all webinars combined, allowing duplicates
    this.filteredWebinars = this.webinarService.getAllWebinars();
    this.selectedFilters = {
      specialty: new Set<string>(),
      topics: new Set<string>(),
      speakers: new Set<string>(),
      pharma: new Set<string>(),
    };
  }

  applyFilters() {
    const filterFunction = (webinar: Webinar) => {
      const specialtyMatch =
        this.selectedFilters.specialty.size === 0 ||
        this.selectedFilters.specialty.has(webinar.specialty || '');
      const topicMatch =
        this.selectedFilters.topics.size === 0 ||
        (webinar.keyHighlights && [...this.selectedFilters.topics].some(topic => webinar.keyHighlights.includes(topic)));
      const speakerMatch =
        this.selectedFilters.speakers.size === 0 ||
        this.selectedFilters.speakers.has(webinar.presenter);
      const pharmaMatch =
        this.selectedFilters.pharma.size === 0 ||
        (webinar.sponsor && this.selectedFilters.pharma.has(webinar.sponsor));
      const statusMatch =
        webinar.status === 'live' || webinar.status === 'upcoming' || webinar.status === 'recorded';

      return specialtyMatch && topicMatch && speakerMatch && pharmaMatch && statusMatch;
    };

    // Filter only filteredWebinars from all webinars combined excluding those in other sections
    const allWebinars = this.webinarService.getAllWebinars();
    const excludedIds = new Set([
      ...this.liveWebinars.map(w => w.id),
      ...this.upcomingWebinars.map(w => w.id),
      ...this.cardiologyWebinars.map(w => w.id)
    ]);
    this.filteredWebinars = allWebinars.filter(w => !excludedIds.has(w.id) && filterFunction(w));
  }

  getFilteredSpecialties() {
    if (!this.filterSearch.specialty) {
      return this.specialties;
    }
    return this.specialties.filter(s => s.toLowerCase().includes(this.filterSearch.specialty.toLowerCase()));
  }

  trackByWebinarId(index: number, webinar: Webinar): number {
    return webinar.id;
  }

  trackById(index: number, item: any): number {
    return item.id;
  }

  ngOnDestroy() {
    if (this.tabSubscription) {
      this.tabSubscription.unsubscribe();
    }
  }
}
