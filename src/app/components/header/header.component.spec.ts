import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingState } from '../../shared/services/routes-history.service';
import { DetailHeaderComponent } from './header.component';

describe('DetailHeaderComponent', () => {
    let comp: DetailHeaderComponent;
    let fixture: ComponentFixture<DetailHeaderComponent>;

    beforeEach(() => {
        const routerStub = {};
        const routingStateStub = {
            getPreviousUrl: () => ({})
        };
        TestBed.configureTestingModule({
            declarations: [ DetailHeaderComponent ],
            schemas: [ NO_ERRORS_SCHEMA ],
            providers: [
                { provide: Router, useValue: routerStub },
                { provide: RoutingState, useValue: routingStateStub }
            ]
        });
        fixture = TestBed.createComponent(DetailHeaderComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

    describe('ngOnInit', () => {
        it('makes expected calls', () => {
            const routingStateStub: RoutingState = fixture.debugElement.injector.get(RoutingState);
            spyOn(routingStateStub, 'getPreviousUrl');
            comp.ngOnInit();
            expect(routingStateStub.getPreviousUrl).toHaveBeenCalled();
        });
    });

});
