import { Component, OnInit, Input } from '@angular/core';

import { LockService } from '../lock.service';
import { ParamsService } from '../params.service';
import { TemplateService } from '../template.service';

@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  @Input() name;
  @Input() value;
  @Input() bounds;
  @Input() template;
    position
    
  constructor(public lock:LockService, public params:ParamsService) { }

  ngOnInit(){
      //If we don't do size and bind directly [position] to template.position, the first drag goes well and the second goes wild
      this.position = this.template.position
      this.value = parseInt(this.value)
  }

  _getPosition(event){
      let pos = event.style.transform.toString().match( /[-+]?\d+/g )
      return {"x":pos[0],"y":pos[1]}
  }
  onResizeStop(event) {
    this.template.size = event.size
  }
    
  onStop(event) {
      this.template.position = this._getPosition(event)
  }
}
