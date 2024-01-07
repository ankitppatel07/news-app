import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // console.log(args[0]);
    if (typeof args[0] === 'undefined') return value

    return value.filter((user) => {
      return user.name.toUpperCase().indexOf(args[0].toUpperCase()) > -1
    });
  }

}
