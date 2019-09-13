import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../albums.service'

@Component({
  selector: 'app-albums-page',
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.css']
})
export class AlbumsPageComponent implements OnInit {

  albums: any = [];
  users: any = []; 

  constructor(public albumsService: AlbumsService) {}

  ngOnInit() {
    this.getAllAlbums();
    this.getAllUsers();
  }

  getAllAlbums() {
    this.albums = [];
    this.albumsService.getAlbums().subscribe((data: {}) => {
      console.log(data);
      this.albums = data;
    });
  }

  getAllUsers() {
    this.users = [];
    this.albumsService.getUsers().subscribe((data: {}) => {
      console.log(data);
      this.users = data;
    });
  }
}
