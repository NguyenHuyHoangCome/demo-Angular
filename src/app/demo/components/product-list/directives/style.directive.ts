import {
    Directive,
    Input,
    ElementRef,
    Renderer2,
    OnInit,
    HostListener,
} from '@angular/core';

import { BoldDirective } from './bold.directive';
@Directive({
    selector: '[appStyle]',
    standalone: true,
    hostDirectives: [{ directive: BoldDirective, inputs: ['color'] }],
})
export class StyleDirective implements OnInit {
    constructor(private hostElement: ElementRef<HTMLElement>) {}

    @HostListener('mouseenter')
    onMouseEnder() {
        this.hostElement.nativeElement.style.background = 'red';
    }

    ngOnInit() {}
}
