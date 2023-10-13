/* Interface pour définir la structure d'un logement */
export interface Logement {
    id: number;  // Identifiant du logement
    image: string;  // URL de l'image du logement
    city_zipCode: number;  // Code postal de la ville
    city_name: string;  // Nom de la ville
    price: number;  // Prix du logement
    rating: number;  // Évaluation du logement (par exemple, sur 5 étoiles)
    favourite: boolean;  // Indique si le logement est en favori
  }
  