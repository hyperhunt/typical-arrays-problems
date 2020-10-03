exports.min = function min(array) {
    return !Array.isArray(array) || !array.length
        ? 0
        : Math.min.apply(this, array);
};

exports.max = function max(array) {
    return !Array.isArray(array) || !array.length
        ? 0
        : array.reduce((acc, cur) => {
              return acc > cur ? acc : cur;
          });
};

exports.avg = function avg(array) {
    // return !array ? 0 : array.reduce((a, b) => a + b) / array.length;
    // return !array ? 0 : eval(array.join('+')) / array.length; // eval is evil
    return !Array.isArray(array) || !array.length
        ? 0
        : (function () {
              let res = 0;
              for (const i in array) {
                  res += array[i];
              }
              return res;
          })(array) / array.length;
};
