const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
    it("returns 5 for [1, 2, 3, 5, 6, 7, 8]", () => {
      assert.deepStrictEqual(middle([1, 2, 3, 5, 6, 7, 8]), [5]);
    });
});

//middle([1, 2, 3, 5, 6, 7, 8]);