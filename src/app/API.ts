/* Importation des modules nécessaires depuis Angular */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/* Service injectable dans toute l'application */
@Injectable({
  providedIn: 'root'  // Service injectable au niveau racine de l'application
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api/accomodations';  // URL de l'API (à remplacer par l'URL correcte)

  /* Constructeur du service, injection de HttpClient */
  constructor(private http: HttpClient) { }

  /* Méthode pour récupérer les logements depuis l'API */
  getAccommodations(): Observable<any[]> {
    const endpoint = `${this.apiUrl}`;  // Endpoint de l'API
    return this.http.get<any[]>(endpoint);  // Requête HTTP GET pour récupérer les données
  }
}
