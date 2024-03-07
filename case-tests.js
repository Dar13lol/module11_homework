import { getMonth } from "function.js";
describe('getMonth function', () => {
it('should return correct month name for valid input', () => {
// верное выполнение 
expect(getMonth(1)).toBe('январь');
expect(getMonth(2)).toBe('февраль');
expect(getMonth(3)).toBe('март');
});
// не верное выполнение
it('should return error message for invalid input', () => {
expect(getMonth(-1)).toBe('Неверный номер месяца');
});