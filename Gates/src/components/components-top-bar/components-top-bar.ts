import { Component, Input } from '@angular/core';
import { TitleProvider } from '../../providers/title-provider';

@Component({
    selector: 'components-top-bar',
    templateUrl: 'components-top-bar.html'
})
export class ComponentsTopBar {
    @Input() publicKey: string;

    constructor(private titleProvider: TitleProvider) {
        
    }

}
