/* Importation du module Component depuis Angular */
import { Component } from '@angular/core';

/* Définition du composant Angular */
@Component({
  selector: 'app-header',  // Sélecteur du composant
  templateUrl: './header.component.html',  // Template HTML du composant
  styleUrls: ['./header.component.scss']  // Fichiers de style associés au composant
})
export class HeaderComponent {

  /* Constructeur du composant */
  constructor() { }

  /* Méthode appelée lorsqu'on clique sur "Se connecter" */
  onLogin(): void {
    console.log('Se connecter');  // Affiche un message dans la console
  }

  /* Méthode appelée lorsqu'on clique sur "S'inscrire" */
  onSignUp(): void {
    console.log("S'inscrire");  // Affiche un message dans la console
  }
  
  /* Méthode pour ouvrir la fenêtre de recherche */
  public ouvrirFenetreRecherche(): void {
    console.log('Fenêtre de recherche ouverte !');  // Affiche un message dans la console
  }
}
