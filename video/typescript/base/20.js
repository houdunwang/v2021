function sum(a, b, ratio) {
    if (ratio === void 0) { ratio = 0.6; }
    return (a + b) * ratio;
}
console.log(sum(2, 3, 4));
