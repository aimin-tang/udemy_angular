import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  featureA = 'recipes';

  onNavigateA(feature: string) {
    this.featureA = feature;
  }
}
