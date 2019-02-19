const fizzBuzz = require('./fizzBuzz');

test('input 1 --> 1', () => {
    expect(fizzBuzz(1)).toBe(1);
})

test('input 2 --> 2', () => {
    expect(fizzBuzz(2)).toBe(2);
})

test('input 3 --> Fizz', () => {
    expect(fizzBuzz(3)).toBe("Fizz");
})

test('input num % 5 == 0 --> Buzz', () => {
    expect(fizzBuzz(5)).toBe("Buzz");
})

test('input num % 30 == 0 --> FizzBuzz', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
})

test('input num % 95 == 0 --> Buzz', () => {
    expect(fizzBuzz(95)).toBe("Buzz");
})

test('input num % 9 == 0 --> Fizz', () => {
    expect(fizzBuzz(9)).toBe("Fizz");
})

test('input num % 75 == 0 --> FizzBuzz', () => {
    expect(fizzBuzz(75)).toBe("FizzBuzz");
})






