'use strict';

const functions = require('./todos.js');

test('testing 3 + 5 = 8', () => {
    expect(functions.sum(3, 5)).toBe(12);
});