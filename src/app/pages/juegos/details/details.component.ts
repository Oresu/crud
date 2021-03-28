import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  }

  juego: any = null;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.juego = navigation?.extras?.state;
  }

  ngOnInit(): void {
  }

  onGoToEdit(): void{
    this.navigationExtras.state.value = this.juego;
    this.router.navigate(['edit'], this.navigationExtras); 
  }

  onDelete(): void {
    alert('Eliminado');
  }

  onGoBackToList(): void {
    this.router.navigate(['listado']);
  }

}