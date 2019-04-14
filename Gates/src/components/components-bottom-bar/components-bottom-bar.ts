import { Component, Input, OnInit } from '@angular/core';
import { TitleProvider } from '../../providers/title-provider';
import { AuthProvider } from '../../providers/auth/auth.provider';

@Component({
    selector: 'components-bottom-bar',
    templateUrl: 'components-bottom-bar.html'
})
export class ComponentsBottomBar implements OnInit {
    identityCount = 0;

    constructor(private authProvider: AuthProvider) {
        
    }

    ngOnInit() {
        setInterval(async () => {
            this.identityCount = await this.authProvider.getIdentityCount();
        }, 5000);
    }

}
