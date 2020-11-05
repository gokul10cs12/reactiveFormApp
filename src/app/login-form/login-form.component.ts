import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms'
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

config = [
  {
    type: 'input',
    label: 'Full name',
    name: 'name',
    placeholder: 'enter your name',
  },
  {
    type: 'textarea',
    label: 'permanent address',
    name: 'address',
    value: '',
    placeholder: 'enter address',
  }
];



  name = new FormControl('');
  constructor(private fb: FormBuilder) { }
  profileForm = this.fb.group({
    name: ['', Validators.required],
    Address: ['']
  });


  ngOnInit(): void {

  }
  onSubmit(){
    console.log(this.profileForm.value);
    console.log(this.profileForm.status);
  }

  updateValues(){
    this.profileForm.patchValue({
      name : 'batman'
    })
  }
  

}
