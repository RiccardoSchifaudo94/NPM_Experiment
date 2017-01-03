import { Component } from '@angular/core';
import { Articolo } from './articolo/articolo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  myArticolo;

  constructor(){
  	this.myArticolo = {
  		titolo:"Creare miei componenti Angular 2",
  		autore:"Riccardo Schifaudo",
  		testo:"Creare rickyAngularComponents con Angular2 è davvero molto semplice.",
  		numApprezzamenti:0
  	};  
  }//chiudi costruttore 

  mostraMessaggioRigraziamento(event){
    alert("Grazie per averci lasciato un like a questo articolo ;-) \n  il numero di apprezzamenti è di ${event.numApprezzamenti} like!");
  }
}
