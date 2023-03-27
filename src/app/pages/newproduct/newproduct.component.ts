
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent {
  constructor(private fb: FormBuilder,
    private userService: UserService  ){
}

  public registerForm = this.fb.group({
    name: ['', Validators.required ],
    surname: ['' ],
    email: ['', [ Validators.required, Validators.email ] ],
    phone: ['', Validators.required ],
    rol: ['', Validators.required ],
  });

  createUser(){

  }

  campoNoValido(campo:string): boolean{

    return true;
  
  }
}
