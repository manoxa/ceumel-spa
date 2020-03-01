import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import Services from './services/services';
import Components from './components/components';
import Directives from './directives/directives';
import Pipes from './pipes/pipes';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
/* PRIME NG */
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {PanelMenuModule} from 'primeng/panelmenu';
import {TabViewModule} from 'primeng/tabview';

@NgModule({
    declarations: [
        Directives.declarations,
        Components.declarations,
        Pipes.declarations
    ],
    imports: [
        FormsModule,
        BrowserModule,
        ReactiveFormsModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
        Services.providers
    ],
    exports: [
        Components.exports,
        Pipes.exports,
        Directives.exports,
        ProgressSpinnerModule,
        BrowserAnimationsModule,
        ConfirmDialogModule,
        TabViewModule,
        PanelMenuModule
    ]
})

export class SharedModule {
    public static forRoot() {
        return {
            ngModule: SharedModule,
            providers: Services.providers
        };
    }
}
