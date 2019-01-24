import { Component, Input } from '@angular/core';
import { AngularDraggableModule } from 'angular2-draggable';
import { DataService } from './data.service';
import { LockService } from './lock.service';
import { TemplateService } from './template.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    @Input() bounds;
  title = 'rgapi-front';
  constructor(private dataService: DataService, public lock:LockService, public template:TemplateService ) {
  }
    
    showDataService(){
      console.log(this.dataService)
    }
    
    
}
