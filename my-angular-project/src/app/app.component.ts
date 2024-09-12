import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { MoveDirection, OutMode ,Container,Engine} from "@tsparticles/engine";
import { loadSlim } from '@tsparticles/slim';
import { NgParticlesService } from "@tsparticles/angular";
import { NgxParticlesModule } from "@tsparticles/angular";
import AOS from "aos";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent,NgxParticlesModule],

templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  id="tsparticles"

  options = {
    background: {
        color: {
            value: "transparent",
        },
    },
    fpsLimit: 120,
    interactivity: {
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
          enable: false,
        },
        move: {
            direction: MoveDirection.none,
            enable: true,
            outModes: {
                default:OutMode.out,
            },
            random: true,
            speed: 0.5,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 500,
            },
            value: 30,
        },
        opacity: {
            value: 0.2,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 3 },
        },
    },
    detectRetina: true,
};



  constructor(private ngParticlesService: NgParticlesService) {

  }


  ngOnInit(): void {

      AOS.init();

      this.ngParticlesService.init(async(engine:Engine)=>{
        await loadSlim(engine)
      })
  }

  particlesLoaded(container: Container): void {
    console.log(container);
}

}
