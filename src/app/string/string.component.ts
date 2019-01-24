import { Component, OnInit, Input } from '@angular/core';

import { LockService } from '../lock.service';
import { ParamsService } from '../params.service';
import { TemplateService } from '../template.service';

@Component({
  selector: 'string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.css']
})
export class StringComponent implements OnInit {
  
  @Input() name;
  @Input() value;
  @Input() bounds;
  @Input() template;
    position
    
  constructor(public lock:LockService, public params:ParamsService) { }

  ngOnInit(){
      //If we don't do size and bind directly [position] to template.position, the first drag goes well and the second goes wild
      this.position = this.template.position
  }

  _getPosition(event){
      let pos = event.style.transform.toString().match( /[-+]?\d+/g )
      return {"x":parseInt(pos[0]),"y":parseInt(pos[1])}
  }
  onResizeStop(event) {
    this.template.size = event.size
  }
    
  onStop(event) {
      this.template.position = this._getPosition(event)
      console.log(this._getPosition(event))
  }
}
