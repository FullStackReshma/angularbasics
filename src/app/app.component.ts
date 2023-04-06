import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as ApexCharts from 'apexcharts';
import { ApexNonAxisChartSeries } from 'ng-apexcharts';
import { ChartType } from 'chart.js';
import { AuthService } from './services/guards/auth.service';

interface Poke {
  id: number,
  name: string,
  type: string,
  isCool: boolean,
  isStylish: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 
export class AppComponent {
  constructor(private authService: AuthService ) {}
  onLoginClick() {
    this.authService.login()

  }
  onLogoutClick() {
    this.authService.logout()
  }
}
