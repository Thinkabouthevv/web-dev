import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/albums';
  private photosUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getAlbum(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  updateAlbum(id: number, album: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, album);
  }

  deleteAlbum(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getPhotos(albumId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.photosUrl}?albumId=${albumId}`);
  }
}
