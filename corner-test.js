import { getMonth } from "function.js";
describe('getMonth function', () => {
	it('should return error message for invalid input', () => {
    expect(getMonth(0)).toBe('Неверный номер месяца');
    expect(getMonth(13)).toBe('Неверный номер месяца');
});