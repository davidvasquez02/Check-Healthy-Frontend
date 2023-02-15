import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
  
  public menu: Menu[] = [
    { icono: 'perm_identity', nombre: 'perfil' },
    { icono: 'home', nombre: 'inicio' },
    { icono: 'home', nombre: 'foro' },
    { icono: 'poll', nombre: 'estadisticas' },
    { icono: 'settings', nombre: 'configuracion' },
  ];
}
