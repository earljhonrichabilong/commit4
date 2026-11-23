function getSnellenAcuity(testDistanceFt, lineOptotypeFt) {
    const ratioDenominator = Math.round((lineOptotypeFt / testDistanceFt) * 20);
    return `20/${ratioDenominator}`;
}