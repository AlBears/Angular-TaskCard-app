import { Component } from '@angular/core';

import { Task } from './model/task';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`,
})
export class AppComponent  {
  private tasks = [
    new Task(
      "Do something",
      false
    ),
    new Task(
      "Clean the room",
      false
    )

  ]
  
 }
