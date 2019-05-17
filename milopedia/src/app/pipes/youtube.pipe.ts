import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: 'youtube'
})
export class YoutubePipe implements PipeTransform {

  constructor(private sanitizer : DomSanitizer){}

  transform(value: any, args?: any): any {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      let match = value.match(regExp); 
      if (match && match[2].length == 11) {
          let separatedID = match[2];
          // haalt id uit derde element van regexp match array
          let embedUrl = '//www.youtube.com/embed/' + separatedID; //zet youtube link om naar embedded youtube link
          return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl); 
          // voeg youtube link toe aan veilige links, zal enkel werken bij youtube URLs, dus XSS is niet mogelijk
      } else {
        return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/L1tx-wAI6Nw");
      }
  }

}