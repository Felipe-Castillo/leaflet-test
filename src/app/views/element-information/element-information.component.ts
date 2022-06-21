import { Component, OnInit } from '@angular/core';
import { ElementInfo } from '../../models/ElementInfo';
import { ElementService } from '../../services/element.service';
import { NgForm, FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { ElementForm as FormModel } from '../../form-models/element-form';

@Component({
  selector: 'app-element-information',
  templateUrl: './element-information.component.html',
  styleUrls: ['./element-information.component.css']
})
export class ElementInformationComponent implements OnInit {

  public element_info: ElementInfo;
  public form_model: any;
  public model_form_control: any;




  constructor(
    private _element_service: ElementService,
    private fb: FormBuilder,

  ) {
    this._element_service.get_element_info().subscribe(
      (element_info: ElementInfo) => {
        this.element_info = element_info

        if (element_info) {
          this.form_model = new FormModel(this.fb, element_info);
          this.model_form_control = this.form_model.model_form_control;
        }

      }
    );
  }

  ngOnInit(): void {
  }

}
