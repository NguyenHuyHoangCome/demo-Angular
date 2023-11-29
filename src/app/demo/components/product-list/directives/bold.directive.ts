import {
    Directive,
    Input,
    ElementRef,
    Renderer2,
    OnInit,
    HostListener,
} from '@angular/core';

@Directive({
    selector: '[appBold]',
    standalone: true,
})
export class BoldDirective implements OnInit {
    @Input() color: string;

    constructor(private hostElement: ElementRef<HTMLElement>) {}

    @HostListener('mouseenter')
    onMouseEnder() {
        // console.log('hi');
        // console.log(this.hostElement.nativeElement.style);
        this.hostElement.nativeElement.style.color = 'red';
    }
    @HostListener('mouseleave')
    onMouseLeave() {
        this.hostElement.nativeElement.style.color = 'black';
    }

    ngOnInit() {
        this.hostElement.nativeElement.style.color = this.color;
    }
}
