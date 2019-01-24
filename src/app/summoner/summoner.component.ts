import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { DataService } from '../data.service';
import { LockService } from '../lock.service';
import { TemplateService } from '../template.service';
@Component({
  selector: 'app-summoner',
  templateUrl: './summoner.component.html',
  styleUrls: ['./summoner.component.css']
})
export class SummonerComponent implements OnInit {

  constructor(private dataService: DataService, public lock:LockService, public template:TemplateService, route: ActivatedRoute) {
      console.log(route)
      dataService.loadData(route.snapshot.params["region"], route.snapshot.params["summoner"])
      if( route.snapshot.params["template"] == "default")
          template.useDefaultTemplate()
  }

  ngOnInit() {
  }

}
