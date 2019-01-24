import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LockService {
  locked
  constructor() {
      this.locked = false;
  }
    
    toggleLock(){
        this.locked = !this.locked
    }
    
  
}
