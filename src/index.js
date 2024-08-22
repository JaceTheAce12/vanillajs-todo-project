import "./styles.css";

const addBtn = document.querySelector("#addBtn");
const userInput = document.querySelector("#userInput");
const todoList = document.querySelector(".todoList");
const listItems = document.querySelector("li");
const clearBtn = document.querySelector(".footer button");

// initial todos
// DO NOT EDIT THIS ARRAY
// You may add props to objects if needed.
let todos = [
  {
    todoID: 0,
    todoText: "Finish Homework",
    todoComplete: false,
  },
  {
    todoID: 1,
    todoText: "Walk the dog",
    todoComplete: true,
  },
  {
    todoID: 2,
    todoText: "Clean my room",
    todoComplete: false,
  },
];

const renderTodos = () => {
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const newTodoItem = document.createElement("li");
    newTodoItem.textContent = todo.todoText;

    if (todo.todoComplete) {
      newTodoItem.classList.add("done");
    }

    newTodoItem.addEventListener("click", () => completedTodo(todo.todoID));

    const deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
    deleteBtn.addEventListener("click", () => {
      newTodoItem.remove();
      taskCounter();
    });

    newTodoItem.appendChild(deleteBtn);

    todoList.appendChild(newTodoItem);
  });

  taskCounter();
};

const addNewTodo = () => {
  const todoText = userInput.value.trim();

  if (todoText) {
    const newTodo = {
      todoId: todos.length,
      todoText: todoText,
      todoComplete: false,
    };

    todos.push(newTodo);
    console.log(todos);

    const newTodoItem = document.createElement("li");
    newTodoItem.textContent = todoText;

    const deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
    deleteBtn.addEventListener("click", () => {
      newTodoItem.remove();
      taskCounter();
    });

    newTodoItem.appendChild(deleteBtn);
    todoList.appendChild(newTodoItem);

    userInput.value = "";
    taskCounter();
  }
};

const taskCounter = () => {
  const tasks = todos.filter((todo) => !todo.todoComplete).length;
  const text = document.querySelector(".footer span");
  text.textContent = `You have ${tasks} pending ${
    tasks === 1 ? "task" : "tasks"
  }.`;
};

const completedTodo = (id) => {};

const clearDone = () => {
  todos.filter((todo) => !todo.todoComplete);
  renderTodos();
};

addBtn.addEventListener("click", addNewTodo);
listItems.addEventListener("click", completedTodo);
clearBtn?.addEventListener("click", clearDone);

renderTodos();
