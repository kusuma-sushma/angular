import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService :AuthService) { }

  ngOnInit() {
  }
  registerUser() {
    this.authService.register(form.value).subscribe(response => {
      console.log(response);
      if (response.error) {
        this.message=response.message;
        setTimeout(() => {
          this.error=null;
        },)
      } else {
        this.message='User registered successfully. Please Login';
      }
      form.reset();
    });
  }
}
