import { Component } from '@angular/core';
import { addMedicine } from 'src/app/models/addMedicine';

@Component({
  selector: 'app-create-medicine',
  templateUrl: './create-medicine.component.html',
  styleUrls: ['./create-medicine.component.css']
})
export class CreateMedicineComponent {
  
  createMedicine:addMedicine = new addMedicine('','',0,'','','');

}
