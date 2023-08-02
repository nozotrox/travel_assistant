const { hashPassword, comparePasswords } = require("../../utils/helpers");

test('when hashing a value it should return a different value from what was passed', () => { 
    const inputValue = 'input';
    const hashedValue = hashPassword(inputValue);
    expect(hashedValue).not.toMatch(inputValue);
});

test('when comparing a value to a hashed string, should return true if the value equals the previouly hashed string', () => { 
    const inputValue = 'input';
    const firstHash = hashPassword(inputValue);
    const isEqual = comparePasswords(inputValue, firstHash);
    expect(isEqual).toBe(true);
});

test('when comparing a value to a hashed string, should return false if the value differs from the previouly hashed string', () => { 
    const inputValue = 'input';
    const firstHash = hashPassword(inputValue);
    const isEqual = comparePasswords('Input', firstHash);
    expect(isEqual).toBe(false);
});