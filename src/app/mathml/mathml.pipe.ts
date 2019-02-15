import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as DomPurify from 'dompurify';

@Pipe({
  name: 'mathml'
})
export class MathmlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    const sanitizedString: string = DomPurify.sanitize(value,  {USE_PROFILES: {mathMl: true}, ADD_ATTR: ['my-select-attr']});
    console.log(sanitizedString);
    return this.sanitizer.bypassSecurityTrustHtml(sanitizedString);
  }
}