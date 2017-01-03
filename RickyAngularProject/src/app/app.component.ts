import { Component } from '@angular/core';
import { Articolo } from './articolo/articolo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  articolo;

  constructor(){
  	this.articolo = {
  		titolo:"Creare miei componenti Angular 2",
  		autore:"Riccardo Schifaudo",
  		testo:"Creare rickyAngularComponents con Angular2 è davvero molto semplice.",
  		numApprezzamenti:0
  	};  
  }//chiudi costruttore 

  mostraMessaggioRingraziamento(event) { 
      alert("Grazie per aver espresso il tuo apprezzamento per l'articolo! \n Il numero di apprezzamenti raggiunti è ${event.numApprezzamenti}"); 
  }
}
