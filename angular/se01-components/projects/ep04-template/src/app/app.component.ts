import { Component, OnInit } from '@angular/core';
import { StudentModel } from './simple/student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'ep04-template';

  constructor(private model: StudentModel) { }

  ngOnInit(): void {
    this.model.reload()
  }

}
