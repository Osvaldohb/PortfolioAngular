import { Component } from '@angular/core';
import {MatDialog,MatDialogRef} from '@angular/material/dialog'

@Component({
  selector: 'app-success-modal',
  standalone: true,
  imports: [],
  templateUrl: './success-modal.component.html',
  styleUrl: './success-modal.component.css'
})
export class SuccessModalComponent {
  constructor(public dialogRef: MatDialogRef<SuccessModalComponent>) {

  }

  close(){
    this.dialogRef.close()
  }
}
