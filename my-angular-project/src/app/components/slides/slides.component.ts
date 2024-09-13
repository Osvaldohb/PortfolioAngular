import { Component,CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  standalone: true,
  imports: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './slides.component.html',
  styleUrl: './slides.component.css'
})
export class SlidesComponent implements OnInit{

    ngOnInit(): void {

    }

}
