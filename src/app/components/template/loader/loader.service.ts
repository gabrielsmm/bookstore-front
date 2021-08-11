import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public isLoading: boolean = false;

  constructor() { }

  show(){
    this.isLoading = true;
  }

  hide(){
    this.isLoading = false;
  }
}
