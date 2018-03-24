import { Component } from '@angular/core';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onConfirm(agreed: boolean): void {
    if (agreed) {
      console.log("confirmed from parent");
    }
  }
}
