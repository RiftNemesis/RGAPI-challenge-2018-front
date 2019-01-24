import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParamsService {
    gridValue;
  constructor() { 
      this.gridValue = 5
  }
}
