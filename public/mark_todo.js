function markTodosOnCalendar() {
    const dateToCount = new Map();
    for (const todo of todos) {
        dateToCount.set(todo.date, (dateToCount.get(todo.date)|| 0) + 1);
    }
    console.log(dateToCount);
}
