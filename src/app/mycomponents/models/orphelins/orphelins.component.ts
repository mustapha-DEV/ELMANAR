import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orphelins',
  templateUrl: './orphelins.component.html',
  styleUrls: ['./orphelins.component.css']
})
export class OrphelinsComponent implements OnInit {

  Nom:string;
  DeuxNom:string;
  Prenom:string;
  DateNais;
  region:string;
  sexeRadios:string;
  Adresse:string;
  Deces:string;
  DateDecesPere;
  CauseDecesPere:string;
  NomMere:string;
  PMere:string;
  DateDecesMere;
  NbrFreres:number;
  NbrSoeurs:number;
  rangeOrphelin:number;
  NbrFamille:number;
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

  constructor() { }
  ngOnInit() {
  }

}
