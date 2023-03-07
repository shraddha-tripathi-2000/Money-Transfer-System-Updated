import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user: User = {
    fname: '',
    lname: '',
    email: '',
    contact:'',
    password:''
  };
  submitted = false;

  constructor(private service: RegisterService) { }

  registerUser(): void {
    const data = {
      fname: this.user.fname,
      lname: this.user.lname,
      email:this.user.email,
      contact:this.user.contact,
      password:this.user.password
    };

    this.service.register(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newUser(): void {
    this.submitted = false;
    this.user = {
      fname: '',
      lname: '',
      email: '',
      contact:'',
      password:''
    };
  }

}
