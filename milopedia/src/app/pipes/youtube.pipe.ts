import { Pipe, PipeTransform, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: 'youtube'
})
export class YoutubePipe implements PipeTransform {

  constructor(private sanitizer : DomSanitizer){} // DomSanitizer == Injectable 

  transform(value: any, args?: any): any {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      let match = value.match(regExp); 
      if (match && match[2].length == 11) {
          let sepratedID = match[2];
          let embedUrl = '//www.youtube.com/embed/' + sepratedID; //zet youtube link om naar embedded youtube link
          return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl); 
          // voeg youtube link toe aan veilige links, zal enkel werken bij youtube URLs, dus XSS is niet mogelijk
      }

  }

}
