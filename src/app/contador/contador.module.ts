import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from './contador/contador.componet';

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [],
})
export class ContadorModule {

}