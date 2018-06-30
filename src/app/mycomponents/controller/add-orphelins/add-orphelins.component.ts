import { Component, OnInit } from '@angular/core';
import { OrphelinsComponent } from '../../models/orphelins/orphelins.component';

@Component({
  selector: 'app-add-orphelins',
  templateUrl: './add-orphelins.component.html',
  styleUrls: ['./add-orphelins.component.css']
})
export class AddOrphelinsComponent implements OnInit {


  Nom:string;
  DeuxNom:string;
  Prenom:string;
  DateNais;
  region:string;
  sexeRadios;
  Adresse:string;
  Deces;
  DateDecesPere;
  CauseDecesPere:string;
  NomMere:string;
  PMere:string;
  DateDecesMere;
  NbrFreres;
  NbrSoeurs;
  rangeOrphelin;
  NbrFamille;
  NomTuteur:string;
  CinTuteur:string;
  PTuteur:string;
  RTuteur:string;
  CycleClasse:string;
  NiveauScolaire:string;
  AnneeScolaire;
  Notes:string;
  NomEcole:string;
  TypeMaladie:string;
  NiveauMaladie:string;
  Traitement:string;
  CauseMalade:string;
  ChargesTraitement:string;
  ProprieteFoyer:string;
  NatureFoyer:string;
  EtatFoyer:string;

  constructor() {
    

   }
 
  ngOnInit() {
  }

 

}
