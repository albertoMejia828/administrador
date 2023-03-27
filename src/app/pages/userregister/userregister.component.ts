import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent {

  public formSubmitted=false;


  public registerForm = this.fb.group({
    name: ['', Validators.required ],
    surname: ['' ],
    email: ['', [ Validators.required, Validators.email ] ],
    phone: ['', Validators.required ],
    rol: ['', Validators.required ],
  });

constructor(private fb: FormBuilder,
            private userService: UserService  ){
}


createUser(){
  this.formSubmitted=true;
  console.log(this.registerForm.invalid)
  if(this.registerForm.invalid){
    return;
  }

  this.userService.createUser( this.registerForm.value );




  console.log(this.registerForm.value)
}
campoNoValido(campo:string): boolean{

  if(this.registerForm.get(campo)?.invalid && this.formSubmitted){
    return true;
  }
  else{
    return false;
  }

}

}
