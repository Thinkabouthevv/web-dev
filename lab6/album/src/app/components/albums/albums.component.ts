import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-albums',
  standalone: true,
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  imports: [CommonModule, RouterModule],
})
export class AlbumsComponent implements OnInit {
  albums: any[] = [];

  constructor(private albumsService: AlbumsService) {}

  ngOnInit(): void {
    this.fetchAlbums();
  }

  fetchAlbums(): void {
    this.albumsService.getAlbums().subscribe((data: any[]) => {
      this.albums = data;
    });
  }
}
