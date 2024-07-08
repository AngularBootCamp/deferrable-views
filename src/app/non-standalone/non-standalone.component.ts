import { Component } from '@angular/core';

@Component({
  selector: 'app-non-standalone',
  template: `
    <p>
      Because I'm not standalone, I was loaded immediately, even
      though my display was deferred.
    </p>
  `,
  styles: `
    p {
      border: 1px solid #b6b6b6;
    }
  `
})
export class NonStandaloneComponent {}
