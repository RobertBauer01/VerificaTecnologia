import { Component, OnInit } from '@angular/core';
import { Brano } from '../models/streaming.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brani',
  templateUrl: './brani.component.html',
  styleUrls: ['./brani.component.css']
})
export class BraniComponent {
  brani: Brano[];
  constructor(private router:Router) {
    this.brani = this.router.getCurrentNavigation().extras.state as Brano[];
  }
}
