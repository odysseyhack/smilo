import "jasmine";
import { BaseUrlProvider } from "./url-provider";

describe("StorageProvider", () => {
    let baseUrlProvider: BaseUrlProvider;

    beforeEach(() => {
        baseUrlProvider = new BaseUrlProvider();

    });

    it("should have the right node1 url", () => {

        expect(baseUrlProvider.getBaseUrlNode1()).toBe("http://node0.klm.smilo.network:3000");

    }); 

    it("should have the right node2 url", () => {

        expect(baseUrlProvider.getBaseUrlNode2()).toBe("http://node1.klm.smilo.network:3000");

    }); 

    it("should have the right node3 url", () => {

        expect(baseUrlProvider.getBaseUrlNode3()).toBe("http://node2.klm.smilo.network:3000");

    }); 

    it("should have the right node4 url", () => {

        expect(baseUrlProvider.getBaseUrlNode4()).toBe("http://node3.klm.smilo.network:3000");

    }); 

    it("should have the right node5 url", () => {

        expect(baseUrlProvider.getBaseUrlNode5()).toBe("http://node4.klm.smilo.network:3000");

    }); 

    it("should not equal any other node than 1", () => {

        expect(baseUrlProvider.getBaseUrlNode1()).toBe("http://node0.klm.smilo.network:3000");

        expect(baseUrlProvider.getBaseUrlNode2()).not.toBe("http://node0.klm.smilo.network:3000");

        expect(baseUrlProvider.getBaseUrlNode3()).not.toBe("http://node0.klm.smilo.network:3000");

        expect(baseUrlProvider.getBaseUrlNode4()).not.toBe("http://node0.klm.smilo.network:3000");

        expect(baseUrlProvider.getBaseUrlNode5()).not.toBe("http://node0.klm.smilo.network:3000");

    });

    it("should not equal any other node than 2", () => {

        expect(baseUrlProvider.getBaseUrlNode2()).toBe("http://node1.klm.smilo.network:3000");

        expect(baseUrlProvider.getBaseUrlNode1()).not.toBe("http://node1.klm.smilo.network:3000");

        expect(baseUrlProvider.getBaseUrlNode3()).not.toBe("http://node1.klm.smilo.network:3000");

        expect(baseUrlProvider.getBaseUrlNode4()).not.toBe("http://node1.klm.smilo.network:3000");

        expect(baseUrlProvider.getBaseUrlNode5()).not.toBe("http://node1.klm.smilo.network:3000");

    });

    it("should not equal any other node than 3", () => {

        expect(baseUrlProvider.getBaseUrlNode3()).toBe("http://node2.klm.smilo.network:3000");

        expect(baseUrlProvider.getBaseUrlNode2()).not.toBe("http://node2.klm.smilo.network:3000");

        expect(baseUrlProvider.getBaseUrlNode1()).not.toBe("http://node2.klm.smilo.network:3000");

        expect(baseUrlProvider.getBaseUrlNode4()).not.toBe("http://node2.klm.smilo.network:3000");

        expect(baseUrlProvider.getBaseUrlNode5()).not.toBe("http://node2.klm.smilo.network:3000");

    });

    it("should not equal any other node than 4", () => {

        expect(baseUrlProvider.getBaseUrlNode4()).toBe("http://node3.klm.smilo.network:3000");

        expect(baseUrlProvider.getBaseUrlNode2()).not.toBe("http://node3.klm.smilo.network:3000");

        expect(baseUrlProvider.getBaseUrlNode1()).not.toBe("http://node3.klm.smilo.network:3000");

        expect(baseUrlProvider.getBaseUrlNode3()).not.toBe("http://node3.klm.smilo.network:3000");

        expect(baseUrlProvider.getBaseUrlNode5()).not.toBe("http://node3.klm.smilo.network:3000");

    });

});