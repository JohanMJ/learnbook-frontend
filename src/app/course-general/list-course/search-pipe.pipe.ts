import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {
    public transform(value, args?): any[] {
      const searchText = new RegExp(args, 'ig');
      if (value) {
          return value.filter((item) => {
              const values = (item.sNamCou + ' ' + item.fPriCou + '' + item.fHorCou);
              return values.search(searchText) !== -1;
          });
      }
  }

}


