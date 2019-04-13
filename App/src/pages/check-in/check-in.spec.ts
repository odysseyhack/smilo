import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule, NavParams, NavController } from "ionic-angular/index";
import { CheckInPage } from "./check-in";
import { MockNavController } from "../../../test-config/mocks/MockNavController"
import { MockAccountProvider } from "../../../test-config/mocks/MockAccountProvider";
import { MockBookedFlightsProvider } from "../../../test-config/mocks/MockBookedFlightsProvider";
import { ComponentsModule } from "../../components/components-menu-bar/components.module";
import { AccountProvider } from "../../providers/account-provider/account.provider";
import { BookedFlightsProvider } from "../../providers/booked-flights-provider/booked-flights-provider";

describe("CheckInPage", () => {
    let comp: CheckInPage;
    let fixture: ComponentFixture<CheckInPage>;
    let navController: MockNavController;
    let accountProvider: MockAccountProvider;
    let bookedFlightsProvider: MockBookedFlightsProvider;

    beforeEach(async(() => {
        navController = new MockNavController();

        TestBed.configureTestingModule({
            declarations: [CheckInPage],
            imports: [
                IonicModule.forRoot(CheckInPage),
                ComponentsModule
            ],
            providers: [
                { provide: NavController, useValue: navController },
                { provide: AccountProvider, useValue: accountProvider },
                { provide: BookedFlightsProvider, useValue: bookedFlightsProvider }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CheckInPage);
        comp = fixture.componentInstance;
    });

    it("should create component", () => expect(comp).toBeDefined());

    it("should have videoPlayer to be null", () => {

        expect(comp.videoPlayer).toBeNull();

        expect(comp.videoPlayer).not.toBeDefined();

    });

    it("should have faceScan to be null", () => {

        expect(comp.faceScan).toBeNull();

        expect(comp.faceScan).not.toBeDefined();

    });

    it("should have booking to be null", () => {

        expect(comp.booking).toBeNull();

        expect(comp.booking).not.toBeDefined();

    });
});