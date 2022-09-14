import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { RegisterPage } from '../register/register.page';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async navToRegister(){
    const modal = await this.modalController.create({
      component: RegisterPage,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
  }

  async navToLogin(){
    const modal = await this.modalController.create({
      component: LoginPage,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
  }

}
