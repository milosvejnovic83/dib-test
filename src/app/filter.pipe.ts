import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], searchTitle: string): any[] {
    if(!value || !searchTitle) {
      return value;
    } 
    return value.filter(photos=> photos.title.toLowerCase().indexOf(searchTitle.toLowerCase()) != -1);
  }

}
