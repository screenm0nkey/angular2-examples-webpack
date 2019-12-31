import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'links-component',
  template: `
    <section style="background-color: #dedede;padding: 10px;">
        <external-links></external-links>  
    </section>`
})
export class LinksComponent implements OnInit {

  ngOnInit(): void {
  }
}
