import { Component, OnInit, Input } from '@angular/core';
import { TemplateService } from '../template.service';

@Component({
  selector: 'template-component',
  templateUrl: './template-component.component.html',
  styleUrls: ['./template-component.component.css']
})
export class TemplateComponentComponent implements OnInit {
  
  @Input() template
  @Input() level
  open = false
  constructor(public templateService:TemplateService) { }

  ngOnInit() {
  }

}
