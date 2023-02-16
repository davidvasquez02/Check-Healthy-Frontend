import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Menu } from 'src/app/models/menu';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

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

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  public menu: Menu[] = [
    { icono: 'perm_identity', nombre: 'perfil' },
    { icono: 'home', nombre: 'inicio' },
    { icono: 'sms', nombre: 'foro' },
    { icono: 'poll', nombre: 'estadisticas' },
    { icono: 'notifications_active', nombre: 'notificaciones' },
  ];

  public signOut() {
    sessionStorage.clear();
    Swal.fire('Sesion cerrada', '', 'success');
    setTimeout(() => {
      this.router.navigate(['login']);
    }, 1000);
  }
}
