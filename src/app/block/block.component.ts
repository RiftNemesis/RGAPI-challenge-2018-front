import { Component, OnInit, Input } from '@angular/core';

import { LockService } from '../lock.service';
import { ParamsService } from '../params.service';
import { TemplateService } from '../template.service';

@Component({
  selector: 'block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  @Input() name;
  @Input() data;
  @Input() bounds;
  @Input() template;
    position
    
  constructor(public lock:LockService, public params:ParamsService) { 
  }

  ngOnInit(){
      //If we don't do size and bind directly [position] to template.position, the first drag goes well and the second goes wild
      this.position = this.template.position
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
