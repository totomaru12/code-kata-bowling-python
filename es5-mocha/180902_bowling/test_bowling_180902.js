var expect = require("chai").expect;
var Bowling = require("./bowling_180902");

describe("Bowling 18/09/02", function() {
    var b = null;

    beforeEach(function() {
        b = new Bowling();
    })

    it("all strikes", function() {
        for (var i = 0; i < b.NORMAL_FRAME_MAX(); i++) {
            b.roll(b.SCORE_MAX_IN_FRAME());
        }
        b.roll(b.SCORE_MAX_IN_FRAME());
        b.roll(b.SCORE_MAX_IN_FRAME());
        expect(b.score()).to.be.equal(300);
    })

})