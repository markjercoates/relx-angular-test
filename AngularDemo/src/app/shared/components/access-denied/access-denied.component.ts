// Angular
import { Component, Input } from '@angular/core';

// External
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-access-denied',
  standalone: true,
  template: `
    <div class="modal-header">
      <h5 class="modal-title">Access Denied</h5>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss()"></button>
    </div>
    <div class="modal-body">
      <h2>{{message}}</h2>
    </div>
  `
})
export class AccessDeniedModalComponent {
    @Input() message!: string;

    constructor(public activeModal: NgbActiveModal) { }
}
