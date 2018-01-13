export const GetExpensesTotal = (expenses) => {
    let total = 0;

    if (expenses.length !== 0) {
        expenses.map((expense) => {
            total = total + parseFloat(expense.amount);
        });
    }
    return total;
};