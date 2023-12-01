// src/app/pages/inventory/inventory.page.ts
import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
})
export class InventoryPage implements OnInit {
  items: any[] = [];

  constructor(
    private inventoryService: InventoryService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.inventoryService.getItems().subscribe(
      (data) => {
        this.items = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  addItem() {
    this.navCtrl.navigateForward('/add-inventory');
  }

  editItem(item: any) {
    // Implementasi edit item
  }

  deleteItem(id: number) {
    // Implementasi hapus item
  }
}
