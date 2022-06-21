import { Component, OnInit, Input, ViewChild, SimpleChanges } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { routeTransitionAnimations } from '../route-transition-animations';
import { ElementInfo } from '../models/ElementInfo';
import { ElementInformationComponent } from '../views/element-information/element-information.component';


@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css'],
  animations: [routeTransitionAnimations]

})
export class ToolBarComponent implements OnInit {

  @ViewChild(ElementInformationComponent)
  public ElementInformationComponent: ElementInformationComponent;

  @Input() element_info: ElementInfo;

  constructor() { }



  ngOnInit(): void {
  }


  prepareRoute(outlet: RouterOutlet) {


    return outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animationState'];
  }
}
