import { Day } from './Day';
import { Component, OnInit, ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent implements OnInit {
  calendarTime = [
    new Day("Mon", 7, 21),
    new Day("Tue", 7, 21),
    new Day("Wes", 7, 21),
    new Day("Thu", 7, 21),
    new Day("Fri", 7, 21),
    new Day("Sat", 8, 20),
    new Day("Sun"),
  ]

  expectDay: any = "Sun";
  day: any;
  hour: any;
  index: any;
  // message: any;
  openNow: string = "<span class='open'>Xin chào, hôm nay chúng tôi mở cửa từ timeStart AM tới timeEnd PM.</span>";
  closeNow: string = "<span class='closed'>Xin Lỗi, Chúng tôi đang đóng cửa. Hôm nay mở cửa từ timeStart AM tới timeEnd PM.</span>";
  closeAllDay: string = "<span class='closed'>Xin lỗi, Chúng tôi đóng cửa cả ngày vào day</span>";
  returnMessage: any = '';

  constructor() { }

  ngOnInit(): void {
    var now = new Date();
    this.day = now.getDay();
    this.hour = now.getHours();
    this.compare();
    // console.log(this.returnMessage);
    
  }

  compare() {
    for(let i = 0; i < this.calendarTime.length; i++) {
      if(this.expectDay === this.calendarTime[i].day) {
        this.index = i + 1;
      }
    }
    if(this.day != this.index) {
      if(this.hour < this.calendarTime[this.day].timeStart || this.hour > this.calendarTime[this.day].timeEnd ) {
        this.returnMessage = this.closeNow.replace("timeStart", this.calendarTime[this.day].timeStart.toString());
        this.returnMessage = this.returnMessage.replace("timeEnd", this.calendarTime[this.day].timeEnd.toString());
        return this.returnMessage;
      } else if(this.hour > this.calendarTime[this.day].timeStart || this.hour < this.calendarTime[this.day].timeEnd ) {
        this.returnMessage = this.openNow.replace("timeStart", this.calendarTime[this.day].timeStart.toString());
        this.returnMessage = this.returnMessage.replace("timeEnd", this.calendarTime[this.day].timeEnd.toString());
        return this.returnMessage;
      }
    } else {
      this.returnMessage = this.closeAllDay.replace("day", this.calendarTime[this.day].day.toString());
      return this.returnMessage;
    }
  }


}
