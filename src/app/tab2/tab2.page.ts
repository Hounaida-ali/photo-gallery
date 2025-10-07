import { Component } from '@angular/core';
import { photoService } from '../services/photo-service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  
constructor(public photoService: photoService) { }

addPhotoToGallery() {
  this.photoService.addNewToGallery();
}
async ngOnInit() {
  await this.photoService.loadSaved();
}
}
