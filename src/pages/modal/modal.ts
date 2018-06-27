import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  nombre:string = "";
  edad:number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  	this.nombre = this.navParams.get('nombre');
  	this.edad = this.navParams.get('edad');

  	console.log(this.nombre);
  	console.log(this.edad);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  cerrarConParametros(){
  	let data = {
  		nombre: "JD",
  		edad: 30,
  		cords: {
  			lat: 10,
  			long: -10
  		}
  	};
  	this.viewCtrl.dismiss(data);
  }

  cerrarSinParametros(){
  	this.viewCtrl.dismiss();
  }

}
