import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { MoveDirection, OutMode ,Container,Engine} from "@tsparticles/engine";
import { loadSlim } from '@tsparticles/slim';
import { NgParticlesService } from "@tsparticles/angular";
import { NgxParticlesModule } from "@tsparticles/angular";
import { SlidesComponent } from './components/slides/slides.component';
import { FooterComponent } from './components/footer/footer.component';
import AOS from "aos";
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { NgForm,FormsModule } from '@angular/forms';
import { SuccessModalComponent } from './components/modals/success-modal/success-modal.component';
import { ErrorModalComponent } from './components/modals/error-modal/error-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent,NgxParticlesModule,SlidesComponent,FooterComponent,FormsModule,SuccessModalComponent,ErrorModalComponent],
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
          enable: true,
        },
        move: {
            direction: MoveDirection.none,
            enable: true,
            outModes: {
                default:OutMode.out,
            },
            random: true,
            speed: 1,
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



  constructor(private ngParticlesService: NgParticlesService,private matDialog:MatDialog) {

  }


  ngOnInit(): void {


      AOS.init();

      this.ngParticlesService.init(async(engine:Engine)=>{
        await loadSlim(engine)
      })
  }

  particlesLoaded(container: Container): void {

}

    sendEmailJs(contactForm:NgForm,e:Event){
        emailjs.sendForm('service_dpp6k8q', 'template_anuninu', e.target as HTMLFormElement,{
            publicKey:'0zhJ5vUlkIoh_dvLD',
        })
        .then((result: EmailJSResponseStatus) => {
          this.openDialogForSuccess();

          const form = e.target as HTMLFormElement;
          (form.querySelector('#name') as HTMLInputElement).value = '';
          (form.querySelector('#email') as HTMLInputElement).value = '';
          (form.querySelector('#message') as HTMLTextAreaElement).value = '';
        }, (error) => {
            this.openDialogForError()
        });
    }

    openDialogForSuccess(): void {
        const dialogRef = this.matDialog.open(SuccessModalComponent, {
          maxHeight:'82vh',
        });

      }

      openDialogForError(): void {
        const dialogRef = this.matDialog.open(ErrorModalComponent, {
          maxHeight:'82vh',
        });

      }

}
