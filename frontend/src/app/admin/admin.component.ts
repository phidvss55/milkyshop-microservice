import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // let data = "{{ $dataMoney }}";
  //   dataChart = JSON.parse(data.replace(/&quot;/g,'"'));
  //   console.log(dataChart);
    
  //   Highcharts.chart('container', {
  //       chart: {
  //           type: 'column'
  //       },
  //       title: {
  //           text: 'Biểu đồ doanh thu ngày và tháng. '
  //       },
  //       xAxis: {
  //           type: 'category'
  //       },
  //       yAxis: {
  //           title: {
  //               text: ' Mức độ '
  //           }

  //       },
  //       legend: {
  //           enabled: false
  //       },
  //       plotOptions: {
  //           series: {
  //               borderWidth: 0,
  //               dataLabels: {
  //                   enabled: true,
  //                   format: '{point.y:.1f} VNĐ'
  //               }
  //           }
  //       },

  //       tooltip: {
  //           headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
  //           pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
  //       },

  //       series: [
  //           {
  //               name: "Browsers",
  //               colorByPoint: true,
  //               data: dataChart,
  //           }
  //       ]
  //   });

}
