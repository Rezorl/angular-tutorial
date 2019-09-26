import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  template: `<p>
  test2 works inline!
  </p>
  `,
  styles: [`p{color:red}`]
})
export class Test2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
