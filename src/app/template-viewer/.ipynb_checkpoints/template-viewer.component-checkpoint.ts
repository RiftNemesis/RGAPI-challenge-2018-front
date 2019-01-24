import { Component, OnInit } from '@angular/core';
import { LockService } from '../lock.service';
import { TemplateService } from '../template.service';
import { DataService } from '../data.service';

@Component({
  selector: 'template-viewer',
  templateUrl: './template-viewer.component.html',
  styleUrls: ['./template-viewer.component.css']
})
export class TemplateViewerComponent implements OnInit {
    left;
    creatingBlock;
  constructor(public lock:LockService, public template:TemplateService , public data:DataService ) { 
      this.left = false;
      this.creatingBlock = false;
  }

  ngOnInit() {
  }

}
