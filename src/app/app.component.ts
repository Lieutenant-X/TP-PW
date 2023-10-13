/* Importation des modules nécessaires depuis Angular et d'autres fichiers */
import { Component, OnInit } from '@angular/core';
import { ApiService } from './API';
import { Observable } from 'rxjs';
import { Logement } from './models/Logement';

/* Définition du composant Angular */
@Component({
  selector: 'app-root',  // Sélecteur du composant
  templateUrl: './app.component.html',  // Template HTML du composant
  styleUrls: ['./app.component.scss']  // Fichiers de style associés au composant
})
export class AppComponent implements OnInit {
  title = 'TP-AIRBNB';  // Titre du composant

  // Observable contenant un tableau de logements
  accommodations: Observable<Array<Logement>>;

  // Variable pour stocker une chaîne représentant une image
  stringimage: string;

  // Constructeur du composant, injection de ApiService
  constructor(private apiService: ApiService) {}

  // Méthode appelée lors de l'initialisation du composant
  ngOnInit() {
    // Appel à la méthode du service pour récupérer les logements
    this.accommodations = this.apiService.getAccommodations();
  }
}
