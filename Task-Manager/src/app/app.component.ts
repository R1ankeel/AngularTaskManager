import {Component, OnInit} from '@angular/core';

export interface Task {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  tasks: Task[] = [
    {title: 'Выпить пива', text: 'Но сначала его купить', id: 1},
    {title: 'Бросить пить', text: 'Но сначала допить пиво', id: 2}
    ]

  ngOnInit(): void {

  }
}
