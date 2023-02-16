import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enfermedad',
  templateUrl: './enfermedad.component.html',
  styleUrls: ['./enfermedad.component.css']
})
export class EnfermedadComponent {
  tittle:String = ''; 
  type:String = '';

  constructor(
    private activatedRoute: ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.type = params['id'];
    })

    if(this.type=='db'){
      this.tittle='Diabetes';
      // llamar a servicio y cargar info
      console.log('db')
    }
    
    if(this.type=='ht'){
      this.tittle='Hipertensión';
      // llamar a servicio y cargar info
      console.log('db')
    }
    
    if(this.type=='as'){
      this.tittle='Asma';
      // llamar a servicio y cargar info
      console.log('db')
    }
    
  }

}
