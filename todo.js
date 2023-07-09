function fetchTodos() {
    return fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json());
  }
  
  function createCheckbox(todo, index) {
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
  
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "todo-" + todo.id;
    checkbox.checked = todo.completed; 
  
    const label = document.createElement("label");
    label.setAttribute("for", "todo-" + todo.id);
    label.textContent = `${index + 1}. ${todo.title}`;
  
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
  
    document.getElementById("todoList").appendChild(listItem);
  
    checkbox.addEventListener("change", function() {
      if (checkbox.checked && !checkbox.classList.contains("completed")) {
        completedTasks++;
        checkbox.classList.add("completed");
        if (completedTasks === 5) {
          alert(`Congrats. 5 Tasks have been Successfully Completed`);
        }
      } else if (!checkbox.checked && checkbox.classList.contains("completed")) {
        completedTasks--;
        checkbox.classList.remove("completed");
      }
    });
  }
  
  let completedTasks = 0; 
  
  fetchTodos()
    .then(todos => {
      todos.forEach((todo, index) => createCheckbox(todo, index));
    });
  