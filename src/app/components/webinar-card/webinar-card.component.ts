import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Webinar } from '../../models/webinar';

@Component({
  selector: 'app-webinar-card',
  imports: [CommonModule],
  templateUrl: './webinar-card.component.html',
  styleUrls: ['./webinar-card.component.scss']
})
export class WebinarCardComponent {
  @Input() webinar!: Webinar;
  @Input() cardType: 'live' | 'upcoming' | 'continue-watching' | 'cardiology' | 'filtered' = 'live';

  // New inputs for extended card details
  @Input() sponsorLogo?: string;
  @Input() sponsor?: string;
  @Input() speakers?: { name: string; photoUrl: string; title: string }[];
  @Input() credits?: string;
  @Input() creditsExpiry?: string;
  @Input() likes?: number;
  @Input() comments?: number;
  @Input() reposts?: number;
  @Input() followers?: number;
  @Input() timeAgo?: string;
  @Input() showButtons: boolean = false;
  @Input() showSocialInteractions: boolean = false;
}
