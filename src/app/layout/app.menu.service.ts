import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MenuService {
    private resetSource = new Subject();

    resetSource$ = this.resetSource.asObservable();

    reset() {
        this.resetSource.next(true);
    }
}
