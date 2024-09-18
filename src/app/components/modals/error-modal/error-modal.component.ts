import { Component } from '@angular/core';
import {MatDialog,MatDialogRef} from '@angular/material/dialog'


@Component({
  selector: 'app-error-modal',
  standalone: true,
  imports: [],
  templateUrl: './error-modal.component.html',
  styleUrl: './error-modal.component.css'
})
export class ErrorModalComponent {

  constructor(public dialogRef: MatDialogRef<ErrorModalComponent>) {

  }

  close(){
    this.dialogRef.close()
  }

}
