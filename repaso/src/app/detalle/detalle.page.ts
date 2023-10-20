import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
public pelicula: any;
  constructor(private router: Router) { }

  ngOnInit() {
    
    const peliculas = localStorage.getItem('Films');
    if (peliculas == null){

    } 
    else{
      this.pelicula = JSON.parse(peliculas);

    }

  }
  volver(){
    this.router.navigate(['/home'])
  }

}
