import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthService } from "./auth.service";
import { LoginComponent } from "./login.component";
import { ProfileComponent } from "./profile.component";
import { userRoutes } from "./user.routes";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(userRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        ProfileComponent,
        LoginComponent
    ],
    providers: [

    ]
})

export class UserModule {}