import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  }

  fakeData = [
    {
      titulo: 'Mario Odissey',
      company: 'Nintendo',
      imagen: 'loading'
    },
    {
      titulo: 'Animal Crossing',
      company: 'Nintendo',
      imagen: 'loading'
    },
    {
      titulo: 'Mario Party',
      company: 'Nintendo',
      imagen: 'loading'
    }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onGoToEdit(item: any): void{
    this.navigationExtras.state.value = item;
    this.router.navigate(['edit'], this.navigationExtras); 
  }
  onGoToSee(item: any): void{
    this.navigationExtras.state.value = item;
    this.router.navigate(['details'], this.navigationExtras);
  }
  onGoToDelete(item: any): void{
    alert('Eliminado');
  }

}
