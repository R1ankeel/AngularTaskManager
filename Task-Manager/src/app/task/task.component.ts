import {Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';
import {Task} from "../app.component";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: Task
  @ContentChild('info', {static: true}) infoRef: ElementRef

  ngOnInit(): void {
  }

}
