import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = 'José';

  userData = {
    age: 25,
    email: 'Jose@gmail.com',
    charge: 'Desenvolvedor'
  }

  title = 'curso-angular';
}
