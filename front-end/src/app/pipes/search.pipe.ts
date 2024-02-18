import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // console.log(args[0]);
    if (typeof args[0] === 'undefined') return value

    return value.filter((article) => {
      return article.title.toUpperCase().indexOf(args[0].toUpperCase()) > -1
    });
  }

}
