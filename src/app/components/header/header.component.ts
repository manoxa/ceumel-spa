
import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';
import { RoutingState } from '../../shared/services/routes-history.service';

@Component({
    selector: 'detail-header',
    templateUrl: 'header.component.html',
    styleUrls: []
})
export class DetailHeaderComponent implements OnInit {

    @Input() title: string;
    @Input() mt: string;
    
    public previousURL: string;
    

    constructor(
        private router: Router,
        private routingState: RoutingState) {
    }

    ngOnInit() {
       this.previousURL = this.routingState.getPreviousUrl();
    }
}