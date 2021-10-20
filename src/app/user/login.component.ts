import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent{
    userName
    password
    mouseoverLogin
    loginInvalid = false;
    constructor(private authService: AuthService, private router:Router){

    }

    login(formValues) {
        console.log(formValues)
        this.authService.loginUser(formValues.userName, formValues.password).subscribe(res => {
            if (!res) {
                this.loginInvalid = true
            } else {
                this.router.navigate(['events'])
            }
        })
    }

    cancel() {
        this.router.navigate(['events'])
    }

}