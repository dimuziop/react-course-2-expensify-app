import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if not expenses sent', () => {
    const total = selectExpensesTotal([]);
    expect(total).toBe(0);
});

test('should return expense value if one expenses sent', () => {
    const total = selectExpensesTotal([expenses[1]]);
    expect(total).toBe(expenses[1].amount);
});

test('should return 8145 value if al fixture expenses sent', () => {
    const total = selectExpensesTotal(expenses);
    expect(total).toBe(8145);
});
