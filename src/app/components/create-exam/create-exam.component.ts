import { Component } from '@angular/core';
import { addExam } from 'src/app/models/addExam';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.css']
})
export class CreateExamComponent {
  createExam:addExam = new addExam('','',0,'','','');
}
