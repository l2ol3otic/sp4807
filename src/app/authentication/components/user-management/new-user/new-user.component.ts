import { Component, OnInit } from '@angular/core';
import { InewUserComponent } from './new-user.interface';
import { FormGroup, FormBuilder } from '@angular/forms';
import { newUserService } from '../../../../shareds/services/account.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements InewUserComponent {
  constructor(
    private builder:FormBuilder,
    private newUser:newUserService
  ) { 
   this.initialCreateFormdata();
  }

  form: FormGroup
  Url: any;
  onSubmit() {
    this.newUser.onRegister(this.form.value)
    .then(res=>console.log(res))
    .catch(err=>alert(err.Message))
  }
  private initialCreateFormdata(){
    this.form = this.builder.group({
      username:[],
      password:[],
      fullname:[],
      gender:[],
      condition:[]
    });
  }
}
