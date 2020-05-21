'use strict';

function factorsOf(n) {
    const factors = [];
    for (let i=1 , max = Math.sqrt(n); i <= max ; i++) {
        if (n%i === 0){
            factors.push(i,n/i);
        }
    }
    return factors.sort((a,b) => a - b);
}
    
    

test('factors of 12', () => {
    expect(factorsOf(12)).toEqual([1,2,3,4,6,12]);
});