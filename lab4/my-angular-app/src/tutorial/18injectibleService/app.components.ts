import {Component, inject} from '@angular/core';
import {CarService} from './car.service';

@Component({
  selector: 'app-root',
  template: '<p> {{ carService.getCars() }} </p>',
})
export class AppComponent {
  carService = inject(CarService);
}

// export class AppComponent {
//     display = '';
//     carService = inject(CarService);
  
//     constructor() {
//       this.display = this.carService.getCars().join(' ⭐️ ');
//     }
//   }   Inject-based dependency injection
  


// export class AppComponent {
//     display = '';
  
//     constructor(private carService: CarService) {
//       this.display = this.carService.getCars().join(' ⭐️ ');
//     }
//   }   Constructor-based dependency injection