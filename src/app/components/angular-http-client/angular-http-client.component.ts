import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularHttpClientService } from 'src/app/angular-http-client.service';
import {Post} from 'src/app/models/types'

@Component({
  selector: 'app-angular-http-client',
  templateUrl: './angular-http-client.component.html',
  styleUrls: ['./angular-http-client.component.scss']
})
export class AngularHttpClientComponent implements OnInit {
  posts:Post[] = []
  constructor(private httpService : AngularHttpClientService) { 
    httpService.getPosts().subscribe((data)=>{this.posts=data})
  }
  
  ngOnInit(): void {}

  createPost(post:Post){
   this.httpService.createPost(post).subscribe((data)=>{
     console.warn(data.id);
   });
    
  }
  
  
 
}
