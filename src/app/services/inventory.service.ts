// src/app/services/inventory.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private apiUrl = 'http://localhost/inventoryApp/backend/api.php';

  constructor(private http: HttpClient) { }

  getItems(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  addItem(item: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, item);
  }

  updateItem(item: any): Observable<any> {
    // Menyertakan ID item dalam URL
    return this.http.put(`${this.apiUrl}?id=${item.id}`, item);
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}?id=${id}`);
  }
}
