import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'querySearch'
})
export class QuerySearchPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // console.log(args[0]);
    if (typeof args[0] === 'undefined') return value

    return value.filter((queryObj) => {
      return queryObj.query.toUpperCase().indexOf(args[0].toUpperCase()) > -1
    });
  }

}
