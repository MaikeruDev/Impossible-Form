import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public modalController: ModalController, public authService: AuthServiceService) { }

  email_input: string;
  username_input: string;
  password_input: string;

  ngOnInit(): void {
    
  }

  closeModal(){
    this.modalController.dismiss()
  }

  createAccount(){
    var email = this.email_input
    var username = this.username_input
    var pwd = this.password_input
    if (email !== "" && username !== "" && pwd !== "" && email !== undefined && username !== undefined && pwd !== undefined){
       this.authService.createUserWithEmailAndPassword(email, pwd, username)
    }
  }

}
