import { Component } from '@angular/core';
import { Login } from '../../models/Login.model';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: Login;
  showerrormessage:string='';
  constructor(private router: Router, private authService: AuthService) {
    this.loginObj = new Login();
    console.log(this.loginObj);
  }
  onLogin() {
    this.authService.login(this.loginObj)?.subscribe({
      next: (res) => {
        console.log(res);
        if (res.token) {
          localStorage.setItem('token', res.token);
          this.authService.updateTokenState()
          console.log(localStorage.getItem('token'));
          alert('Login Success');
          this.router.navigateByUrl('/home')
        } else {
          alert(res.message);
        }
      },
      error:(error)=>{
        this.showerrormessage=error.error.message;
      }
    })
  }
}
