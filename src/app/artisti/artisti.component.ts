import { Component } from '@angular/core';
import { Artista } from '../models/streaming.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artisti',
  templateUrl: './artisti.component.html',
  styleUrls: ['./artisti.component.css']
})
export class ArtistiComponent {
  artisti: Artista[];
  constructor(private router:Router) {
    this.artisti = this.router.getCurrentNavigation().extras.state as Artista[];
  }
}
