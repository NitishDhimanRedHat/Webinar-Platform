// app/components/speaker-card/speaker-card.component.ts
import { Component, Input } from '@angular/core';
import { Speaker } from '../../models/webinar';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-speaker-card',
   imports: [CommonModule],
  templateUrl: './speaker-card.component.html',
  styleUrls: ['./speaker-card.component.scss']
})
export class SpeakerCardComponent {
  @Input() speaker!: Speaker;
}