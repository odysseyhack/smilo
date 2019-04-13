import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule, NavParams, NavController } from "ionic-angular/index";
import { BookFlightPage } from "./book-flight";
import { MockNavController } from "../../../test-config/mocks/MockNavController"
import { MockAccountProvider } from "../../../test-config/mocks/MockAccountProvider";
import { MockBookedFlightsProvider } from "../../../test-config/mocks/MockBookedFlightsProvider";
import { ComponentsModule } from "../../components/components-menu-bar/components.module";
import { AccountProvider } from "../../providers/account-provider/account.provider";
import { BookedFlightsProvider } from "../../providers/booked-flights-provider/booked-flights-provider";

describe("BookFlight", () => {
    let comp: BookFlightPage;
    let fixture: ComponentFixture<BookFlightPage>;
    let navController: MockNavController;
    let accountProvider: MockAccountProvider;
    let bookedFlightsProvider: MockBookedFlightsProvider;

    beforeEach(async(() => {
        navController = new MockNavController();

        TestBed.configureTestingModule({
            declarations: [BookFlightPage],
            imports: [
                IonicModule.forRoot(BookFlightPage),
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
        fixture = TestBed.createComponent(BookFlightPage);
        comp = fixture.componentInstance;
    });

    it("should create component", () => expect(comp).toBeDefined());


    it("should have from to be null", () => {

        expect(comp.from).toBeUndefined();

        expect(comp.from).not.toBeDefined();

    });

    it("should have to to be null", () => {

        expect(comp.to).toBeUndefined();

        expect(comp.to).not.toBeDefined();

    });

    it("should have date to be null", () => {

        expect(comp.date).toBeUndefined();

        expect(comp.date).not.toBeDefined();

    });

    it("should have travellers to be undefined", () => {
        
        expect(comp.travellers).toBeUndefined();

        expect(comp.travellers).not.toBeDefined();

    });

    it("should have city Amsterdam", () => {
        expect(comp.cities.indexOf("Amsterdam")).toBeGreaterThan(1);
    });

    it("should have city Barcelona", () => {
        expect(comp.cities.indexOf("Barcelona")).toBeGreaterThan(1);
    });

    it("should have city Manila", () => {
        expect(comp.cities.indexOf("Manila")).toBeGreaterThan(1);
    });

    it("should have city Moscow", () => {
        expect(comp.cities.indexOf("Moscow")).toBeGreaterThan(1);
    });

    it("should have city Tokyo", () => {
        expect(comp.cities.indexOf("Tokyo")).toBeGreaterThan(1);
    });

    it("should have city Dhaka", () => {
        expect(comp.cities.indexOf("Dhaka")).toBeGreaterThan(1);
    });

    it("should have city Istanbul", () => {
        expect(comp.cities.indexOf("Istanbul")).toBeGreaterThan(1);
    });

    it("should have city Karachi", () => {
        expect(comp.cities.indexOf("Karachi")).toBeGreaterThan(1);
    });

    it("should have city Beijing", () => {
        expect(comp.cities.indexOf("Beijing")).toBeGreaterThan(1);
    });

    it("should have city Shanghai", () => {
        expect(comp.cities.indexOf("Shanghai")).toBeGreaterThan(1);
    });

    it("should have city Mumbai", () => {
        expect(comp.cities.indexOf("Mumbai")).toBeGreaterThan(1);
    });

    it("should have city Tianjin", () => {
        expect(comp.cities.indexOf("Tianjin")).toBeGreaterThan(1);
    });

    it("should have city Paris", () => {
        expect(comp.cities.indexOf("Paris")).toBeGreaterThan(1);
    });

    it("should have city Berlin", () => {
        expect(comp.cities.indexOf("Berlin")).toBeGreaterThan(1);
    });
});