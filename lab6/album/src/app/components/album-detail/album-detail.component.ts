import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  imports: [CommonModule, FormsModule],
})
export class AlbumDetailComponent implements OnInit {
  album: any = {};
  updatedTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbum(id).subscribe((data) => {
      this.album = data;
      this.updatedTitle = this.album.title;
    });
  }

  saveChanges(): void {
    this.album.title = this.updatedTitle;
    this.albumsService.updateAlbum(this.album.id, this.album).subscribe({
      next: (updatedAlbum) => {
        console.log('Album updated successfully:', updatedAlbum);
        alert('Album title updated successfully!');
  
        
        this.router.navigate(['/albums']).then(() => {

        });
      },
      error: (err) => {
        console.error('Error updating album:', err);
        alert('Failed to update album.');
      }
    });
  }
  
  

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
