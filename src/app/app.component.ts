import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IRegistrationSchema } from './registration-schema';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration';
  registrationForm!:FormGroup;
  registrationFormData:IRegistrationSchema[] = [];
  idx!:number;
  edit:Boolean = false;

  constructor(
    private fb:FormBuilder
  ){}

  ngOnInit(): void{
    this.registrationForm = this.fb.group({
      "name":['', Validators.required],
      "contactNo":['',Validators.required],
      "email":['',Validators.required]
    });
  }

  get formControls() {
    return this.registrationForm.controls;
  }

  submitForm(): void{
    this.registrationFormData.push(this.registrationForm.value);
    this.registrationForm.reset();
  }

  setEditData(idx:any): void{
    this.idx = idx;
    this.edit = true;
    
    this.registrationForm.setValue({
      "name":this.registrationFormData[idx].name,
      "contactNo":this.registrationFormData[idx].contactNo,
      "email": this.registrationFormData[idx].email
    });
  }

  updateForm(): void{
    this.registrationFormData[this.idx] = this.registrationForm.value;
    this.registrationForm.reset();
    this.edit = false;
  }
}
