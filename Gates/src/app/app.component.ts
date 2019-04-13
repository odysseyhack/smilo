import { Component } from '@angular/core';
import { GateCheckInPage } from '../pages/gate-check-in/gate-check-in';
import { TitleProvider } from '../providers/title-provider';
import { GateControlPage } from '../pages/gate-control/gate-control';

declare var process: { env: { [key: string]: string | undefined; } };

@Component({
  	templateUrl: 'app.html'
})
export class MyApp {
	rootPage:any = GateControlPage;

	constructor(private titleProvider: TitleProvider) {
		let gate = process.env.GATE_TYPE;
		if (!gate)
			throw new Error("No GATE_TYPE defined as startup parameter.");

		this.titleProvider.setTitle(gate);
	}
}

