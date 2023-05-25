import { Component } from '@angular/core';
import { Streaming } from './models/streaming.model';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Streaming';
  URL = " https://my-json-server.typicode.com/paolocarugati/sputifai/db";
  
  data: Streaming;
  oStreaming: Observable<Streaming>;

  constructor(public http: HttpClient) {
  }

  ngOnInit(): void {
    this.oStreaming = this.http.get<Streaming>(this.URL);
    this.oStreaming.subscribe( d => { 
        this.data = d;
        //alert(this.data.brano.length)
    });    
  }

}
