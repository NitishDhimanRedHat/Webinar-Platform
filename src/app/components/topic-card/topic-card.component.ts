// app/components/topic-card/topic-card.component.ts
import { Component, Input } from '@angular/core';
import { Topic } from '../../models/webinar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topic-card',
   imports: [CommonModule],
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.scss']
})
export class TopicCardComponent {
  @Input() topic!: Topic;
}