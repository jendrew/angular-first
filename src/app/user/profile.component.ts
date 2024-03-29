import { Component, Inject, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { TOASTR_TOKEN, Toastr } from '../common'
import { AuthService } from './auth.service'

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em {float:right; color: #e05c65; padding-left: 10px;}
    .error input {background-color: #e3c3c5;/}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class ProfileComponent implements OnInit {     
  profileForm: FormGroup

  private firstName 
  private lastName 

  constructor(public auth: AuthService, 
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) {
  }

  ngOnInit() {
    this.firstName = new FormControl(this.auth.currentUser.firstName, 
      [Validators.required, Validators.pattern('[A-Za-z]*')])
    this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required)
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  cancel() {
    this.router.navigate(['events'])
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.auth.updateCurrentUser(formValues.firstName, formValues.lastName)
      this.toastr.success('Profile saved')
    }
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched
  }
  validateLastName() {
    return this.lastName.valid || this.lastName.untouched
  }
}