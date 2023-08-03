const { hashPassword, comparePasswords } = require("../../utils/helpers");
const config = require('config');
const bcrypt = require('bcrypt');

test('when hashing a value it should return a different value from what was passed', () => { 
    const inputValue = 'password123';
    const hashResult = hashPassword(inputValue);
    expect(hashResult.hashedPassword).not.toMatch(inputValue);
});

test('when comparing a value to a hashed string, should return true if the value equals the previouly hashed string', () => { 
    const inputValue = 'password123';
    const hashResult = hashPassword(inputValue);
    const isEqual = comparePasswords(hashResult.hashedPassword, inputValue, hashResult.salt);
    expect(isEqual).toBe(true);
});

test('when comparing a value to a hashed string, should return false if the value differs from the previouly hashed string', () => { 
    const inputValue = 'password123';
    const fakeSalt = bcrypt.genSaltSync(config.get("database.encryption_rounds"));
    const hashResult = hashPassword(inputValue);
    const isEqual = comparePasswords(hashResult.hashedPassword, inputValue, fakeSalt);
    expect(isEqual).toBe(false);
});