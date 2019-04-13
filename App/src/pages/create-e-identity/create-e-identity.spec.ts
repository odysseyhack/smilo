import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule, NavParams, NavController } from "ionic-angular/index";
import { CreateEIdentityPage } from "./create-e-identity";
import { MockNavController } from "../../../test-config/mocks/MockNavController"
import { MockAccountProvider } from "../../../test-config/mocks/MockAccountProvider";
import { MockBookedFlightsProvider } from "../../../test-config/mocks/MockBookedFlightsProvider";
import { ComponentsModule } from "../../components/components-menu-bar/components.module";
import { AccountProvider } from "../../providers/account-provider/account.provider";
import { BookedFlightsProvider } from "../../providers/booked-flights-provider/booked-flights-provider";

describe("CreateEIdentityPage", () => {
    let comp: CreateEIdentityPage;
    let fixture: ComponentFixture<CreateEIdentityPage>;
    let navController: MockNavController;
    let accountProvider: MockAccountProvider;
    let bookedFlightsProvider: MockBookedFlightsProvider;

    beforeEach(async(() => {
        navController = new MockNavController();

        TestBed.configureTestingModule({
            declarations: [CreateEIdentityPage],
            imports: [
                IonicModule.forRoot(CreateEIdentityPage),
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
        fixture = TestBed.createComponent(CreateEIdentityPage);
        comp = fixture.componentInstance;
    });

    it("should create component", () => expect(comp).toBeDefined());

    it("should have fullName to be null", () => {

        expect(comp.fullName).toBeNull();

        expect(comp.fullName).not.toBeDefined();

    });

    it("should have dateOfBirth to be null", () => {

        expect(comp.dateOfBirth).toBeNull();

        expect(comp.dateOfBirth).not.toBeDefined();

    });

    it("should have nationality to be null", () => {
        
        expect(comp.nationality).toBeNull();

        expect(comp.nationality).not.toBeDefined();

    });
});