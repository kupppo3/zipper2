import { Component } from '@angular/core';

import { todos } from './shared/data';
import { Todo } from './shared/todo';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    title: string = 'Список Пашиндлера';

}