// app/components/tabs-navigation/tabs-navigation.component.ts
import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabs-navigation',
   imports: [CommonModule],
  templateUrl: './tabs-navigation.component.html',
  styleUrls: ['./tabs-navigation.component.scss']
})
export class TabsNavigationComponent {
  @Output() tabChanged = new EventEmitter<string>();
  
  tabs = [
    { id: 'for-you', label: 'For you' },
    { id: 'live', label: 'Live' },
    { id: 'upcoming', label: 'Upcoming' }
  ];
  
  activeTab: string = 'for-you';

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
    this.tabChanged.emit(tabId);
  }
}