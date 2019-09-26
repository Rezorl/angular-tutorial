import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appChecked]'
})
export class CheckedDirective implements OnInit{

  // zeby mogla oddzialowywac na elementy listy potrzebujemy 2 klas
  constructor(private el: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit(): void {
    //otrzymamy element li
    let li = this.el.nativeElement;
    this.renderer.setStyle(li,'list-style-image','url(/assets/checked.png)');
  }

}
