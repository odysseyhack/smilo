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

    it("should not equal any other node than 5", () => {
        expect(baseUrlProvider.getBaseUrlNode4()).toBe("http://node5.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode2()).not.toBe("http://node5.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode1()).not.toBe("http://node5.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode3()).not.toBe("http://node5.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode5()).not.toBe("http://node5.klm.smilo.network:3000");
    });

    it("should not equal any other node than 6", () => {
        expect(baseUrlProvider.getBaseUrlNode4()).toBe("http://node6.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode2()).not.toBe("http://node6.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode1()).not.toBe("http://node6.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode3()).not.toBe("http://node6.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode5()).not.toBe("http://node6.klm.smilo.network:3000");
    });

    it("should not equal any other node than 7", () => {
        expect(baseUrlProvider.getBaseUrlNode4()).toBe("http://node7.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode2()).not.toBe("http://node7.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode1()).not.toBe("http://node7.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode3()).not.toBe("http://node7.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode5()).not.toBe("http://node7.klm.smilo.network:3000");
    });

    it("should not equal any other node than 8", () => {
        expect(baseUrlProvider.getBaseUrlNode4()).toBe("http://node8.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode2()).not.toBe("http://node8.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode1()).not.toBe("http://node8.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode3()).not.toBe("http://node8.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode5()).not.toBe("http://node8.klm.smilo.network:3000");
    });

    it("should not equal any other node than 9", () => {
        expect(baseUrlProvider.getBaseUrlNode4()).toBe("http://node9.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode2()).not.toBe("http://node9.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode1()).not.toBe("http://node9.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode3()).not.toBe("http://node9.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode5()).not.toBe("http://node9.klm.smilo.network:3000");
    });

    it("should not equal any other node than 10", () => {
        expect(baseUrlProvider.getBaseUrlNode4()).toBe("http://node10.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode2()).not.toBe("http://node10.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode1()).not.toBe("http://node10.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode3()).not.toBe("http://node10.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode5()).not.toBe("http://node10.klm.smilo.network:3000");
    });

    it("should not equal any other node than 11", () => {
        expect(baseUrlProvider.getBaseUrlNode4()).toBe("http://node11.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode2()).not.toBe("http://node11.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode1()).not.toBe("http://node11.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode3()).not.toBe("http://node11.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode5()).not.toBe("http://node11.klm.smilo.network:3000");
    });

    it("should not equal any other node than 12", () => {
        expect(baseUrlProvider.getBaseUrlNode4()).toBe("http://node12.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode2()).not.toBe("http://node12.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode1()).not.toBe("http://node12.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode3()).not.toBe("http://node12.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode5()).not.toBe("http://node12.klm.smilo.network:3000");
    });

    it("should not equal any other node than 13", () => {
        expect(baseUrlProvider.getBaseUrlNode4()).toBe("http://node13.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode2()).not.toBe("http://node13.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode1()).not.toBe("http://node13.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode3()).not.toBe("http://node13.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode5()).not.toBe("http://node13.klm.smilo.network:3000");
    });

    it("should not equal any other node than 14", () => {
        expect(baseUrlProvider.getBaseUrlNode4()).toBe("http://node14.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode2()).not.toBe("http://node14.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode1()).not.toBe("http://node14.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode3()).not.toBe("http://node14.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode5()).not.toBe("http://node14.klm.smilo.network:3000");
    });

    it("should not equal any other node than 15", () => {
        expect(baseUrlProvider.getBaseUrlNode4()).toBe("http://node15.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode2()).not.toBe("http://node15.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode1()).not.toBe("http://node15.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode3()).not.toBe("http://node15.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode5()).not.toBe("http://node15.klm.smilo.network:3000");
    });

    it("should not equal any other node than 16", () => {
        expect(baseUrlProvider.getBaseUrlNode4()).toBe("http://node16.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode2()).not.toBe("http://node16.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode1()).not.toBe("http://node16.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode3()).not.toBe("http://node16.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode5()).not.toBe("http://node16.klm.smilo.network:3000");
    });

    it("should not equal any other node than 17", () => {
        expect(baseUrlProvider.getBaseUrlNode4()).toBe("http://node17.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode2()).not.toBe("http://node17.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode1()).not.toBe("http://node17.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode3()).not.toBe("http://node17.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode5()).not.toBe("http://node17.klm.smilo.network:3000");
    });

    it("should not equal any other node than 18", () => {
        expect(baseUrlProvider.getBaseUrlNode4()).toBe("http://node18.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode2()).not.toBe("http://node18.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode1()).not.toBe("http://node18.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode3()).not.toBe("http://node18.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode5()).not.toBe("http://node18.klm.smilo.network:3000");
    });

    it("should not equal any other node than 19", () => {
        expect(baseUrlProvider.getBaseUrlNode4()).toBe("http://node19.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode2()).not.toBe("http://node19.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode1()).not.toBe("http://node19.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode3()).not.toBe("http://node19.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode5()).not.toBe("http://node19.klm.smilo.network:3000");
    });

    it("should not equal any other node than 20", () => {
        expect(baseUrlProvider.getBaseUrlNode4()).toBe("http://node20.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode2()).not.toBe("http://node20.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode1()).not.toBe("http://node20.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode3()).not.toBe("http://node20.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode5()).not.toBe("http://node20.klm.smilo.network:3000");
    });

    it("should not equal any other node than 21", () => {
        expect(baseUrlProvider.getBaseUrlNode4()).toBe("http://node21.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode2()).not.toBe("http://node21.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode1()).not.toBe("http://node21.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode3()).not.toBe("http://node21.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode5()).not.toBe("http://node21.klm.smilo.network:3000");
    });

    it("should not equal any other node than 22", () => {
        expect(baseUrlProvider.getBaseUrlNode4()).toBe("http://node22.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode2()).not.toBe("http://node22.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode1()).not.toBe("http://node22.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode3()).not.toBe("http://node22.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode5()).not.toBe("http://node22.klm.smilo.network:3000");
    });

    it("should not equal any other node than 23", () => {
        expect(baseUrlProvider.getBaseUrlNode4()).toBe("http://node23.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode2()).not.toBe("http://node23.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode1()).not.toBe("http://node23.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode3()).not.toBe("http://node23.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode5()).not.toBe("http://node23.klm.smilo.network:3000");
    });

    it("should not equal any other node than 24", () => {
        expect(baseUrlProvider.getBaseUrlNode4()).toBe("http://node24.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode2()).not.toBe("http://node24.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode1()).not.toBe("http://node24.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode3()).not.toBe("http://node24.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode5()).not.toBe("http://node24.klm.smilo.network:3000");
    });

    it("should not equal any other node than 25", () => {
        expect(baseUrlProvider.getBaseUrlNode4()).toBe("http://node25.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode2()).not.toBe("http://node25.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode1()).not.toBe("http://node25.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode3()).not.toBe("http://node25.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode5()).not.toBe("http://node25.klm.smilo.network:3000");
    });

    it("should not equal any other node than 26", () => {
        expect(baseUrlProvider.getBaseUrlNode4()).toBe("http://node26.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode2()).not.toBe("http://node26.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode1()).not.toBe("http://node26.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode3()).not.toBe("http://node26.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode5()).not.toBe("http://node26.klm.smilo.network:3000");
    });

    it("should not equal any other node than 27", () => {
        expect(baseUrlProvider.getBaseUrlNode4()).toBe("http://node27.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode2()).not.toBe("http://node27.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode1()).not.toBe("http://node27.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode3()).not.toBe("http://node27.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode5()).not.toBe("http://node27.klm.smilo.network:3000");
    });

    it("should not equal any other node than 28", () => {
        expect(baseUrlProvider.getBaseUrlNode4()).toBe("http://node28.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode2()).not.toBe("http://node28.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode1()).not.toBe("http://node28.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode3()).not.toBe("http://node28.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode5()).not.toBe("http://node28.klm.smilo.network:3000");
    });

    it("should not equal any other node than 29", () => {
        expect(baseUrlProvider.getBaseUrlNode4()).toBe("http://node29.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode2()).not.toBe("http://node29.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode1()).not.toBe("http://node29.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode3()).not.toBe("http://node29.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode5()).not.toBe("http://node29.klm.smilo.network:3000");
    });

    it("should not equal any other node than 30", () => {
        expect(baseUrlProvider.getBaseUrlNode4()).toBe("http://node30.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode2()).not.toBe("http://node30.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode1()).not.toBe("http://node30.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode3()).not.toBe("http://node30.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode5()).not.toBe("http://node30.klm.smilo.network:3000");
    });

    it("should not equal any other node than 31", () => {
        expect(baseUrlProvider.getBaseUrlNode4()).toBe("http://node31.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode2()).not.toBe("http://node31.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode1()).not.toBe("http://node31.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode3()).not.toBe("http://node31.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode5()).not.toBe("http://node31.klm.smilo.network:3000");
    });

    it("should not equal any other node than 32", () => {
        expect(baseUrlProvider.getBaseUrlNode4()).toBe("http://node32.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode2()).not.toBe("http://node32.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode1()).not.toBe("http://node32.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode3()).not.toBe("http://node32.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode5()).not.toBe("http://node32.klm.smilo.network:3000");
    });

    it("should not equal any other node than 33", () => {
        expect(baseUrlProvider.getBaseUrlNode4()).toBe("http://node33.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode2()).not.toBe("http://node33.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode1()).not.toBe("http://node33.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode3()).not.toBe("http://node33.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode5()).not.toBe("http://node33.klm.smilo.network:3000");
    });

    it("should not equal any other node than 34", () => {
        expect(baseUrlProvider.getBaseUrlNode4()).toBe("http://node34.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode2()).not.toBe("http://node34.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode1()).not.toBe("http://node34.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode3()).not.toBe("http://node34.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode5()).not.toBe("http://node34.klm.smilo.network:3000");
    });

    it("should not equal any other node than 35", () => {
        expect(baseUrlProvider.getBaseUrlNode4()).toBe("http://node35.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode2()).not.toBe("http://node35.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode1()).not.toBe("http://node35.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode3()).not.toBe("http://node35.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode5()).not.toBe("http://node35.klm.smilo.network:3000");
    });

    it("should not equal any other node than 36", () => {
        expect(baseUrlProvider.getBaseUrlNode4()).toBe("http://node36.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode2()).not.toBe("http://node36.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode1()).not.toBe("http://node36.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode3()).not.toBe("http://node36.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode5()).not.toBe("http://node36.klm.smilo.network:3000");
    });

    it("should not equal any other node than 37", () => {
        expect(baseUrlProvider.getBaseUrlNode4()).toBe("http://node37.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode2()).not.toBe("http://node37.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode1()).not.toBe("http://node37.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode3()).not.toBe("http://node37.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode5()).not.toBe("http://node37.klm.smilo.network:3000");
    });

    it("should not equal any other node than 38", () => {
        expect(baseUrlProvider.getBaseUrlNode4()).toBe("http://node38.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode2()).not.toBe("http://node38.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode1()).not.toBe("http://node38.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode3()).not.toBe("http://node38.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode5()).not.toBe("http://node38.klm.smilo.network:3000");
    });

    it("should not equal any other node than 39", () => {
        expect(baseUrlProvider.getBaseUrlNode4()).toBe("http://node39.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode2()).not.toBe("http://node39.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode1()).not.toBe("http://node39.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode3()).not.toBe("http://node39.klm.smilo.network:3000");
        expect(baseUrlProvider.getBaseUrlNode5()).not.toBe("http://node39.klm.smilo.network:3000");
    });

});