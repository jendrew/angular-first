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
    constructor(private authService: AuthService, private router:Router){

    }

    login(formValues) {
        console.log(formValues)
        this.authService.loginUser(formValues.userName, formValues.password)
        this.router.navigate(['events'])
    }

    cancel() {
        this.router.navigate(['events'])
    }

}