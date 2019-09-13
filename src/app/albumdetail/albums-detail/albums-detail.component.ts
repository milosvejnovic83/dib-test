import { Component, OnInit } from '@angular/core';
import { AlbumsService } from 'src/app/albums.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-albums-detail',
  templateUrl: './albums-detail.component.html',
  styleUrls: ['./albums-detail.component.css']
})
export class AlbumsDetailComponent implements OnInit {

  photos: any = [];
  searchTitle: string;

  constructor(
    public albumsService: AlbumsService,
    private route: ActivatedRoute,
    private _location: Location
    ) { }

  ngOnInit() {
    this.getAllPhotos();
  }

  getAllPhotos(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.albumsService.getAlbum(id)
      .subscribe((data: {}) => {
        console.log(data);
        this.photos = data;
      });
  }

  removeImage(index) {
    document.getElementById(index).style.border = "2px dashed red";
  }

  goBack() {
    this._location.back();
  }
}
