import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ElementInfo } from '../models/ElementInfo';

@Injectable({
  providedIn: 'root'
})
export class ElementService {

  private element_info$: BehaviorSubject<any>;

  constructor(
  ) {
    this.element_info$ = new BehaviorSubject<any>(null);

  }

  public update_element_info(element_info: ElementInfo | any): void {
    this.element_info$.next(element_info);
  }

  public get_element_info(): Observable<ElementInfo> {
    return this.element_info$.asObservable();
  }

  public update_element_info_data(data: any): void {

    this.remove_element_info();
    const element_info = ElementInfo.createInstance(data);
    this.update_element_info(element_info);
  }

  public remove_element_info(): void {
    this.element_info$.next(new Object());
  }

}
