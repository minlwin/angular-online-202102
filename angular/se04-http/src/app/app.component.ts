import { Component } from '@angular/core';
import { CourseService } from './services/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  list: any

  constructor(service: CourseService) {
    this.list = service.getAll()
  }

}
