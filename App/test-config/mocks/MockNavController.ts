import { NavController, ViewController } from "ionic-angular";
import { Page, NavOptions, TransitionDoneFn } from "ionic-angular/navigation/nav-util";

export class MockNavController extends NavController {
    push(page: string | Page, params?: any, opts?: NavOptions, done?: TransitionDoneFn): Promise<any> {
        return Promise.resolve();
    }
    insert(insertIndex: number, page: string | Page, params?: any, opts?: NavOptions, done?: TransitionDoneFn): Promise<any> {
        throw new Error("Method not implemented.");
    }
    insertPages(insertIndex: number, insertPages: { page: string | Page; params?: any; }[], opts?: NavOptions, done?: TransitionDoneFn): Promise<any> {
        throw new Error("Method not implemented.");
    }
    pop(opts?: NavOptions, done?: TransitionDoneFn): Promise<any> {
        throw new Error("Method not implemented.");
    }
    popToRoot(opts?: NavOptions, done?: TransitionDoneFn): Promise<any> {
        throw new Error("Method not implemented.");
    }
    popTo(page: string | Page | ViewController, opts?: NavOptions, done?: TransitionDoneFn): Promise<any> {
        throw new Error("Method not implemented.");
    }
    popAll(): Promise<any[]> {
        throw new Error("Method not implemented.");
    }
    remove(startIndex: number, removeCount?: number, opts?: NavOptions, done?: TransitionDoneFn): Promise<any> {
        throw new Error("Method not implemented.");
    }
    removeView(viewController: ViewController, opts?: NavOptions, done?: TransitionDoneFn): Promise<any> {
        throw new Error("Method not implemented.");
    }
    setRoot(pageOrViewCtrl: string | Page | ViewController, params?: any, opts?: NavOptions, done?: TransitionDoneFn): Promise<any> {
        return Promise.resolve();
        //throw new Error("Method not implemented.");
    }
    goToRoot(options: NavOptions): Promise<any> {
        throw new Error("Method not implemented.");
    }
    setPages(pages: (ViewController | { page: string | Page; params?: any; })[], opts?: NavOptions, done?: TransitionDoneFn): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getByIndex(index: number): ViewController {
        throw new Error("Method not implemented.");
    }
    getActive(includeEntering?: boolean): ViewController {
        throw new Error("Method not implemented.");
    }
    isActive(view: ViewController): boolean {
        throw new Error("Method not implemented.");
    }
    getPrevious(view?: ViewController): ViewController {
        throw new Error("Method not implemented.");
    }
    first(): ViewController {
        throw new Error("Method not implemented.");
    }
    last(): ViewController {
        throw new Error("Method not implemented.");
    }
    indexOf(view: ViewController): number {
        throw new Error("Method not implemented.");
    }
    length(): number {
        throw new Error("Method not implemented.");
    }
    getViews(): ViewController[] {
        throw new Error("Method not implemented.");
    }
    getActiveChildNavs(): any[] {
        throw new Error("Method not implemented.");
    }
    getActiveChildNav() {
        throw new Error("Method not implemented.");
    }
    getAllChildNavs(): any[] {
        throw new Error("Method not implemented.");
    }
    isTransitioning(includeAncestors?: boolean): boolean {
        throw new Error("Method not implemented.");
    }
    canSwipeBack(): boolean {
        throw new Error("Method not implemented.");
    }
    canGoBack(): boolean {
        throw new Error("Method not implemented.");
    }
    registerChildNav(nav: any): void {
        throw new Error("Method not implemented.");
    }
    resize(): void {
        throw new Error("Method not implemented.");
    }
    getType(): string {
        throw new Error("Method not implemented.");
    }
    getSecondaryIdentifier(): string {
        throw new Error("Method not implemented.");
    }
}