let dateToCount = new Map();

function formatDate(d) {
  const todoDate = new Date(d);
  const year = todoDate.getFullYear();
  const month = todoDate.getMonth();
  const date = todoDate.getDate();
  return `day-${year}-${month + 1}-${date}`;
}

function updateTodosCount() {
  dateToCount.clear();
  for (const todo of todos) {
    const date = formatDate(todo.date);
    dateToCount.set(date, (dateToCount.get(date) || 0) + 1);
  }
  //console.log(dateToCount);
}

function getTodoCount(day) {
  return dateToCount.get(day) || "";
}
