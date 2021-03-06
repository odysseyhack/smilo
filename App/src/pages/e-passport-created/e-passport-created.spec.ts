import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule, NavParams, NavController } from "ionic-angular/index";
import { EPassportCreatedPage } from "./e-passport-created";
import { MockNavController } from "../../../test-config/mocks/MockNavController"
import { MockAccountProvider } from "../../../test-config/mocks/MockAccountProvider";
import { MockBookedFlightsProvider } from "../../../test-config/mocks/MockBookedFlightsProvider";
import { ComponentsModule } from "../../components/components-menu-bar/components.module";
import { AccountProvider } from "../../providers/account-provider/account.provider";
import { BookedFlightsProvider } from "../../providers/booked-flights-provider/booked-flights-provider";

describe("EPassportCreatedPage", () => {
    let comp: EPassportCreatedPage;
    let fixture: ComponentFixture<EPassportCreatedPage>;
    let navController: MockNavController;
    let accountProvider: MockAccountProvider;
    let bookedFlightsProvider: MockBookedFlightsProvider;

    beforeEach(async(() => {
        navController = new MockNavController();

        TestBed.configureTestingModule({
            declarations: [EPassportCreatedPage],
            imports: [
                IonicModule.forRoot(EPassportCreatedPage),
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
        fixture = TestBed.createComponent(EPassportCreatedPage);
        comp = fixture.componentInstance;
    });

    it("should create component", () => expect(comp).toBeDefined());

});