import { Component } from '@angular/core';
import { WebinarPlatformComponent } from './pages/webinar-platform/webinar-platform.component';

@Component({
  selector: 'app-root',
  imports: [WebinarPlatformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'webinar-platform';
}
