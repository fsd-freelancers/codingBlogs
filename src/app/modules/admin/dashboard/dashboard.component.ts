import { Component, ElementRef, ViewChild } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public isLoading: boolean = false;
  @ViewChild('chartdiv') chartDiv: ElementRef<HTMLDivElement>;
  private chart: am4charts.PieChart | undefined;

  constructor(private _adminService: AdminService) { }

  ngOnInit(): void {
    this.getDashboardInfo();
    // Apply chart themes
    am4core.useTheme(am4themes_animated);
  }

  private getDashboardInfo() {
    this.isLoading = true;
    this._adminService.getDashboardInfo().subscribe(res => {
      this.isLoading = false;
      this.createChart(res);
    }, (err) => {
      this.isLoading = false;
    })
  }

  createChart(dashboardInfo): void {
    if (this.chartDiv && this.chartDiv.nativeElement) {
      // Create chart instance
      this.chart = am4core.create(this.chartDiv.nativeElement, am4charts.PieChart);
      this.chart.logo.dispose();

      // Add data
      this.chart.data = dashboardInfo;

      // Add and configure Series
      let pieSeries = this.chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = 'count';
      pieSeries.dataFields.category = 'type';

      if (window.innerWidth <= 768) {
        this.chart.fontSize = "12px";
      }

    } else {
      console.error('Chart div element is not available.');
    }
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.dispose();
      this.chart = undefined;
    }
  }

}
