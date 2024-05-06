import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { IRegistrationSchema } from '../../registration-schema';

@Component({
  selector: 'app-registration-data',
  templateUrl: './registration-data.component.html',
  styleUrls: ['./registration-data.component.css']
})
export class RegistrationDataComponent implements OnInit {
  @Input() registrationData:IRegistrationSchema[] = [];
  @Output() editData:EventEmitter<IRegistrationSchema[]> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {}

  onEdit(idx:any){
    this.editData.emit(idx);
  }
}
