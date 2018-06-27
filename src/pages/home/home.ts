import { Component } from '@angular/core';
import { NavController, ModalController, MenuController } from 'ionic-angular';
import { ModalPage } from "../modal/modal";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private modalCtrl: ModalController, private menuCtrl: MenuController) {

  }

  mostrarModal(){
  	let modal = this.modalCtrl.create( ModalPage, {nombre:"Fernando", edad: 30 } );
  	modal.present();

  	modal.onDidDismiss( params => {
  		if(params){
	  		console.log('data del modal:');
	  		console.log(params);
  		}else{
  			console.log('se cerró sin parametros.');
  		}
  	})
  }

  mostrarMenu(){
    this.menuCtrl.toggle();
  }
}
