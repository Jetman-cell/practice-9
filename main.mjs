import data from './tasks.json' with { type: "json" };

console.log("Список задач на день:");
data.tasks.forEach(({ point, task, position }) => {
    console.log(`'${point}': '${task}': '${position ? "Выполнено" : "Не выполнено"}'`);
});

function addTask(point, task, position = false) {
    data.tasks.push({ point, task, position });
    console.log(`Задача '${task}' добавлена!`);
}

function deleteTask(point) {
    const initialLength = data.tasks.length;
    data.tasks = data.tasks.filter(task => task.point !== point);
    if (data.tasks.length < initialLength) {
        console.log(`Задача с номером ${point} удалена!`);
    } else {
        console.log(`Задача с номером ${point} не найдена!`);
    }
}

function checkTask(point) {
    const task = data.tasks.find(task => task.point === point);
    if (task) {
        console.log(`Задача '${task.task}' имеет статус: '${task.position ? "Выполнено" : "Не выполнено"}'`);
    } else {
        console.log(`Задача с номером ${point} не найдена!`);
    }
}

addTask(6, 'Выучить 10 английских слов', false);
deleteTask(2);
checkTask(4);
