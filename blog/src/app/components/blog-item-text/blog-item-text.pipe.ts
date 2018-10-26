import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'blogItemText'
})
export class BlogItemTextPipe implements PipeTransform {

  transform(value: string, limit: any): any {
    if(!value){
      return null;
    }
    return value.substr(0, limit)+'...';
  }

}
