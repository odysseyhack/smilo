import { Component } from '@angular/core';
import { GateCheckInPage } from '../pages/gate-check-in/gate-check-in';
import { TitleProvider } from '../providers/title-provider';
import { GateControlPage } from '../pages/gate-control/gate-control';
import { AuthProvider } from '../providers/auth/auth.provider';

declare var process: { env: { [key: string]: string | undefined; } };

@Component({
  	templateUrl: 'app.html'
})
export class MyApp {
	rootPage:any = GateControlPage;

	constructor(
		private titleProvider: TitleProvider,
		private authProvider: AuthProvider
	) {
		let gate = process.env.GATE_TYPE;
		if (!gate)
			throw new Error("No GATE_TYPE defined as startup parameter.");
		let nodeEndpoint = process.env.NODE_ENDPOINT;
		if(!nodeEndpoint)
			throw new Error("No NODE_ENDPOINT defined as startup parameter.");
		let distanceTreshold = Number(process.env.DISTANCE_TRESHOLD);

		this.titleProvider.setTitle(gate);
		this.authProvider.setEndPoint(nodeEndpoint);
		if(!isNaN(distanceTreshold))
			this.authProvider.setDistanceTreshold(distanceTreshold);

	}
}

