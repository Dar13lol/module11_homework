import { getMonth } from "function.js";
describe('getMonth function', () => {
it('Should return "декабрь" when input is 12', () => {
expect(getMonth(12)).toBe('декабрь');
});

it('Should return "июнь" when input is 6', () => {
expect(getMonth(6)).toBe('июнь');
});

it('Should return "Неверный номер месяца" when input is not in the range 1-12', () => {
expect(getMonth(13)).toBe('Неверный номер месяца');
});
});