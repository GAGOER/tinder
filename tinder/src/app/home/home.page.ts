import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //C'est pour que l on sache a quelle carte on est acuellement et que 
  //l on veut swiper
  currentIndex: number;

  //ça fait que chaque fois que je vais swipper un nouvelle element ça 
  //va afficher le resultat sur un tableau
  results = [];

  //Ici on a cree un tableau avec les infos de tout nos personnalité
  /* Le champ visible va nous permettre de cacher nos artes au fure et 
  a messure nottament une fois que l on a swiper ou cliquer sur un bouton
   la carte on va la faire disparraitre */
  avatars = [
    {
      name: 'Donald Trump',
      age: 73,
      image: '../../assets/trump.jpg',
      visible: true
    },

    {
      name: 'Barack Obama',
      age: 58,
      image: '../../assets/obama.jpg',
      visible: true
    },

    {
      name: 'Elon Musk',
      age: 48,
      image: '../../assets/musk.jpg',
      visible: true
    },

    {
      name: 'Jeff Bezos',
      age: 56,
      image: '../../assets/bezos.jpg',
      visible: true
    },

    {
      name: 'Beyonce',
      age: 38,
      image: '../../assets/beyonce.jpg',
      visible: true
    },

    {
      name: 'Eminem',
      age: 47,
      image: '../../assets/eminem.png',
      visible: true
    },
  ];

  //globallement c est our savoir sur quelle carte on est
  constructor() {
    this.currentIndex = this.avatars.length -1;
    console.log(this.currentIndex);
  }

  //Ici on declare la fonction pour le swipe 
  swiped(event: any, index: number){
    //On va afficher dans la console le resultat, pour ça on va recuperer notre
    //tableau avatars pour qu'il m'affiche le noms de la personne que je viens 
    //de swiper on lui met aussi le text "swiped" mais aussi recuperer le resultat 
    //qui est stocker dans la variable "event"
    console.log(this.avatars[index].name + 'swiped' + event);
    //On va fair en sort qu une fois que je swipe un truc il faut qu on change la 
    //valeur du champ visible et le passe a false
    this.avatars[index].visible = false;
    //Ainsi dans le cas ou l on swap a gauch ou a droite on va venir ajouter dans 
    //mon tableau une nouvelle information
    this.results.push(this.avatars[index].name + 'swiped' + event);
    //Pour enlever moins 1 a notre bouttons
    this.currentIndex--;
  }

  //C'est pour swiper avec les bouttons, ils sont declarer dans l html
  swipeleft(){
    this.avatars[this.currentIndex].visible = false;
    //Dans le cas ou on a swiper a gauche on va mettre vrai
    this.results.push(this.avatars[this.currentIndex].name + 'swiped false');
    //Pour enlever moins 1 a notre bouttons
    this.currentIndex--;
  }

  swiperight(){
    this.avatars[this.currentIndex].visible = false;
    //Dans le cas ou on a swiper a gauche on va mettre faux
    this.results.push(this.avatars[this.currentIndex].name + 'swiped true');
    //Pour enlever moins 1 a notre bouttons
    this.currentIndex--;
  }

}
