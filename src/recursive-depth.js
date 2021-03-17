module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let arrLevel = 1;
    for (let i = 0; i < arr.length; i++) {
      let nextArrLevel = 1;
      if (Array.isArray(arr[i])) {
        nextArrLevel += this.calculateDepth(arr[i]);
        if (nextArrLevel > arrLevel) {
          arrLevel = nextArrLevel;
        }
      }
    }
    return arrLevel;
  }
};


//let depthCalc = new DepthCalculator();
// depthCalc.calculateDepth([1, 2, 3, 4, 5]);// => `1`
// depthCalc.calculateDepth([1, 2, 3, [4, 5]]);// => `2`
// depthCalc.calculateDepth([[[]]]);// => `3`

// depthCalc.calculateDepth([1, 2, 3, 4, 5, [1]]);//, 2);
// depthCalc.calculateDepth([1, 2, 3, [1], 4, 5, [1]]);//, 2);
// depthCalc.calculateDepth([1, 2, 3, [8, [2]], 4, 5, []]);//, 3);
// depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []]);//, 4);
// depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575',['adas', ['dfg', [0]]]]]);//, 5);
// depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], 4, 5, ['6575',['adas', ['dfg', [0]]]]]);//, 15);
// depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575',['adas', ['dfg', [0]]]]]);//, 25);
// depthCalc.calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575',['adas', ['dfg', [0]]]]]);//, 31);

