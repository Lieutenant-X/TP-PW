/* Importation des modules nécessaires depuis Angular */
import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/API';
import { Logement } from 'src/app/models/Logement';

/* Définition du composant Angular */
@Component({
  selector: 'app-card',  // Sélecteur du composant
  templateUrl: './card.component.html',  // Template HTML du composant
  styleUrls: ['./card.component.scss']  // Fichiers de style associés au composant
})
export class CardComponent {
  @Input() cardData: Logement;  // Entrée du composant, données du logement

  imageString: string;  // Chaîne représentant l'image
  
  /* Constructeur du composant, injection du service d'hébergement */
  constructor(private accommodationService: ApiService) {}

  /* Méthode appelée lors de l'initialisation du composant */
  ngOnInit() {
    // Concaténer le préfixe "data:image/jpeg;base64," avec le string d'encodage de l'image
    this.imageString = "data:image/jpeg;base64," + this.cardData.image;
  }
}
