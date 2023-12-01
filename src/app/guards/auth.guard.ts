// src/app/guards/auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Implementasi logika autentikasi sesuai kebutuhan
    // Contoh: Cek apakah pengguna sudah login
    const isLoggedIn = true; // Ganti dengan logika sesuai kebutuhan
    
    if (isLoggedIn) {
      return true;
    } else {
      // Redirect ke halaman login jika pengguna belum login
      this.router.navigate(['/login']);
      return false;
    }
  }
}
