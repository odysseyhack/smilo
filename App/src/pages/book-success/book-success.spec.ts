import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule, NavParams, NavController } from "ionic-angular/index";
import { BookSuccessPage } from "./book-success";
import { MockNavController } from "../../../test-config/mocks/MockNavController"
import { MockAccountProvider } from "../../../test-config/mocks/MockAccountProvider";
import { MockBookedFlightsProvider } from "../../../test-config/mocks/MockBookedFlightsProvider";
import { ComponentsModule } from "../../components/components-menu-bar/components.module";
import { AccountProvider } from "../../providers/account-provider/account.provider";
import { BookedFlightsProvider } from "../../providers/booked-flights-provider/booked-flights-provider";

describe("BookSuccess", () => {
    let comp: BookSuccessPage;
    let fixture: ComponentFixture<BookSuccessPage>;
    let navController: MockNavController;
    let accountProvider: MockAccountProvider;
    let bookedFlightsProvider: MockBookedFlightsProvider;

    beforeEach(async(() => {
        navController = new MockNavController();

        TestBed.configureTestingModule({
            declarations: [BookSuccessPage],
            imports: [
                IonicModule.forRoot(BookSuccessPage),
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
        fixture = TestBed.createComponent(BookSuccessPage);
        comp = fixture.componentInstance;
    });

    it("should create component", () => expect(comp).toBeDefined());

    it("should have bookedFlight to be null", () => {

        expect(comp.bookedFlight).toBeNull();

        expect(comp.bookedFlight).not.toBeDefined();

    });
});