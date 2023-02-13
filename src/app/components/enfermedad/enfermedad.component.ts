import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enfermedad',
  templateUrl: './enfermedad.component.html',
  styleUrls: ['./enfermedad.component.css']
})
export class EnfermedadComponent {
  tittle:String = ''; 

  constructor(
    private activatedRoute: ActivatedRoute,
  ){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.tittle = params['id'];
    })
    
  }

}
