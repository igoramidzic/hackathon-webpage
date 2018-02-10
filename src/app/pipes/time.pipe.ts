import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {
  times = {
    hour: 3600,
    minute: 60,
    second: 1
  }

  transform(seconds){
    let time_string: string = '';
    if (seconds < 1 ) {
      time_string += '0:00';
    } else if (seconds < 10) {
      time_string += '0:0';
    } else if (seconds < 60) {
      time_string += '0:'
    }
    for(var key in this.times){
      if(Math.floor(seconds / this.times[key]) > 0){



        if (key.toString() === 'second') {
          time_string += Math.floor(seconds / this.times[key]).toString();
        } else {
          time_string += Math.floor(seconds / this.times[key]).toString() + ':';
        }
        seconds = seconds - this.times[key] * Math.floor(seconds / this.times[key]);

      }
    }
    return time_string;
  }

}
