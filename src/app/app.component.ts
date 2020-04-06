import { Component, EventEmitter } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, FormsModule, NgControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
    form: FormGroup;
    isValidPhone: boolean = false;
   constructor(fb:FormBuilder) {
    this.form=fb.group({
      phone:['']
    })
  }

  focusOutFunction(){
    const phone = this.form.value['phone'];
    const validateRuKz = !!phone.match(/^\+(7)\((\d{0,3})\)\s(\d{0,3})\-(\d{0,2})\-(\d{0,2})/);
    const validateBy = !!phone.match(/^\+(375)\((\d{0,2})\)\s(\d{0,3})\-(\d{0,2})\-(\d{0,2})/);
    if(validateBy || validateRuKz){
      this.isValidPhone = true;
      return;
    }
    
    this.isValidPhone = false;
  }
}