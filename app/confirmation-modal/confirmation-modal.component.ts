import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
    selector: 'confirmation-modal',
    templateUrl: './confirmation-modal.component.html',
    styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent {
    @ViewChild('confirmationModal') public confirmationModal: ModalDirective;
    @Input() status?: string;
    @Input() message?: string;
    @Output() onConfirm = new EventEmitter<boolean>();
    constructor() { }

    show(): void {
        this.confirmationModal.show();
    }

    confirm(agreed: boolean): void {
        console.log("confirmed from child (call parent's confirmation method)");
        this.onConfirm.emit(agreed);
        this.confirmationModal.hide();
    }

    decline(): void {
        console.log("declined from child");
        this.confirmationModal.hide();
    }
}