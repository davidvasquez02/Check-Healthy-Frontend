import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { DosisMediService } from 'src/app/services/dosisMedi.service';
import { TomaExaService } from 'src/app/services/tomaExamen.service';
import { AnyObject } from 'chart.js/dist/types/basic';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
})
export class DashComponent {
  /** Based on the screen size, switch from standard to one column per row */

  constructor(
    private dosisMedService: DosisMediService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.dosisMedService.getEstadisticas(parseInt(
      sessionStorage.getItem('idUsuario')!)).subscribe((response: any) => {
      console.log(response);
    });
  }

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Dosis Medicamentos', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Dosis Medicamentos', cols: 1, rows: 1 }
      ];
    })
  );
}
