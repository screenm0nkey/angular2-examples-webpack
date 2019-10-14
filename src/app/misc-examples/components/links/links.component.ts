import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'links-component',
  template: `
    <section class="main">
        <external-links></external-links>  
    </section>`
})
export class LinksComponent implements OnInit {

  ngOnInit(): void {
  }
}
