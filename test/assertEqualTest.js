const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
    it("returns false for Lighthouse Labs and Lighthouse Labs ", () => {
      assert.notDeepEqual(assertEqual('Lighthouse Labs', 'Lighthouse Labs '), true);
    });
    it("returns false for 1 and 1.1 ", () => {
        assert.notDeepEqual(assertEqual(1 , 1.1), true);
      });
    it("returns true for 1 and 1 ", () => {
        assert.notDeepEqual(assertEqual(1 , 1), false);
    });

});