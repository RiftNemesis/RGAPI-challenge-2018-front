import { Component, OnInit, Input } from '@angular/core';

import { LockService } from '../lock.service';
import { ParamsService } from '../params.service';
import { TemplateService } from '../template.service';

@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

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
      return {"x":pos[0],"y":pos[1]}
  }
  onResizeStop(event) {
    this.template.size = event.size
  }
    click(event){
        console.log(event)
    }
    
  onStop(event) {
      console.log(event)
      this.template.position = this._getPosition(event)
  }
}
