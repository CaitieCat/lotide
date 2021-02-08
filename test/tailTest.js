const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
    it("returns [4, 5, 6] for [3, 4, 5, 6]", () => {
      assert.deepStrictEqual(tail([3, 4, 5, 6]), [4, 5, 6]);
    });
});


