import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDescription'
})
export class ShortDescriptionPipe implements PipeTransform {

  transform(long: string, args?: any): string {
    return long.split(/\s+/).slice(0,20).join(" ") + "...";
    
  }

}
