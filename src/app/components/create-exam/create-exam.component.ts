import { Component } from '@angular/core';
import { addExam } from 'src/app/models/addExam';
import { TipoFrecuencia } from 'src/app/models/tipoFrecuencia';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.css']
})
export class CreateExamComponent {
  createExam:addExam = new addExam('','',0,0,'','','');

  tipoFrecuencias:TipoFrecuencia[]=[{"id": 1,"nombre":'Horas',"multiplicador":1},
                                    {"id": 2,"nombre":'Dias',"multiplicador":24},
                                    {"id": 3,"nombre":'Semanas',"multiplicador":168},
                                    {"id": 4,"nombre":'Meses',"multiplicador":730},
                                  ];

}
