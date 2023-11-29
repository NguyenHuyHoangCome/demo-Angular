import {
    Component,
    Input,
    OnInit,
    OnChanges,
    SimpleChanges,
    Output,
    EventEmitter,
} from '@angular/core';

@Component({
    selector: 'progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit, OnChanges {
    @Input() progressBarColor: string = 'rgb(0, 255, 76)';
    @Input() set valueProgressBar(val: number) {
        // validation for val
        this._valueProgressBar = val;
    }

    dateToday: string;
    name: string;

    private _valueProgressBar = 20;
    get valueProgressBar() {
        return this._valueProgressBar;
    }

    @Output() onClearFromChill: EventEmitter<any> = new EventEmitter<any>();

    clickClearValue() {
        this.onClearFromChill.emit('clear');
    }

    // constructor chạy trước ngOnChanges
    constructor() {
        console.log(this.valueProgressBar, 'constructor');
    }

    ngOnInit() {
        console.log(this.valueProgressBar, 'innit');
        this.dateToday = new Date().toDateString();
        this.name = "nguyễn huy hoàng"
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(this.valueProgressBar, 'onchage');
    }
}
