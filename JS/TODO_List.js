// "Tasks" LocalStorage
let tasks = JSON.parse(localStorage.getItem("Tasks"));
let arrTasks = [];
arrTasks.push(tasks);
let newArray = arrTasks.flat(Infinity);

// "BooleanValue" LocalStorage
let boolValue = JSON.parse(localStorage.getItem("BooleanValue"));
let checkboxValue = [];
checkboxValue.push(boolValue);
let newCheckboxValue = checkboxValue.flat(Infinity);

function retainTask(id) {
  let li = document.querySelectorAll("li")[id].innerText;
  document.querySelectorAll("li")[id].innerHTML =
    li +
    "<input type='checkbox' style='margin-left:10px;" +
    "height:18px; width:18px' onclick='cancelTask(" +
    id +
    ")'>" +
    "<button type='button' class='btn2' onclick='updateTask(" +
    id +
    ")'>Update Task</button>" +
    "<button type='button' class='btn1' onclick='removeTask(" +
    id +
    ")'>Delete Task</button>";
  document.querySelectorAll("li")[id].style.opacity = "1";
  newCheckboxValue[id] = false;
  localStorage.setItem("BooleanValue", JSON.stringify(newCheckboxValue));
}

function cancelTask(id) {
  let li =
    document.querySelectorAll("#demo")[0].children[id].firstChild.textContent;
  document.querySelectorAll("li")[id].innerHTML =
    "<s>" +
    li +
    "<input type='checkbox' style='margin-left:10px; height:18px; width:18px' id='clickButton' onclick='retainTask(" +
    id +
    ")' checked></s>";
  document.querySelectorAll("li")[id].style.opacity = "0.3";
  newCheckboxValue[id] = true;
  localStorage.setItem("BooleanValue", JSON.stringify(newCheckboxValue));
}

function updateTask(id) {
  let newContent = prompt("Update Task : ", newArray[id]);
  if (newContent) {
    newArray[id] = newContent;
    localStorage.setItem("Tasks", JSON.stringify(newArray));
    document.querySelectorAll("#demo")[0].children[id].firstChild.textContent =
      newContent;
  }
}

// ********* Create tasks into the todo list *********
let createTask = () => {
  let task = prompt("Enter Task");
  if (task) {
    newArray.push(task);
    localStorage.setItem("Tasks", JSON.stringify(newArray));
    let tasks = JSON.parse(localStorage.getItem("Tasks"));
    if (tasks[tasks.length - 1] != undefined) {
      let li = document.createElement("li");
      let text = document.createTextNode(tasks[tasks.length - 1]);
      let input = document.createElement("input");
      input.type = "checkbox";
      input.style = "margin-left:10px; height:18px; width:18px";
      input.onclick = () => {
        cancelTask(tasks.length - 1);
      };
      let btn = document.createElement("button");
      btn.type = "button";
      btn.className = "btn2";
      btn.onclick = () => {
        updateTask(tasks.length - 1);
      };
      let btnText = document.createTextNode("Update Task");
      btn.appendChild(btnText);

      let btn1 = document.createElement("button");
      btn1.type = "button";
      btn1.className = "btn1";
      btn1.onclick = () => {
        removeTask(tasks.length - 1);
      };
      let btnText1 = document.createTextNode("Delete Task");
      btn1.appendChild(btnText1);

      li.appendChild(text);
      li.appendChild(input);
      li.appendChild(btn);
      li.appendChild(btn1);
      li.style = "margin:15px 15px 15px 0px; font-size:20px";
      document.getElementById("demo").append(li);

      // ------ Boolean Value Array ------
      newCheckboxValue.push(false);
      localStorage.setItem("BooleanValue", JSON.stringify(newCheckboxValue));
    }
  }
};

// ********* Displays the tasks of todo list from the localStorage *********
for (let i = 0; i < tasks.length; i++) {
  let li = document.createElement("li");
  if (boolValue[i]) {
    let s = document.createElement("s");
    let text = document.createTextNode(tasks[i]);
    let input = document.createElement("input");
    input.type = "checkbox";
    input.style = "margin-left:10px; height:18px; width:18px";
    input.checked = boolValue[i];
    input.onclick = () => retainTask(i);
    s.appendChild(text);
    s.appendChild(input);
    li.appendChild(s);
    li.style = "margin:15px 15px 15px 0px; font-size:20px;opacity:0.3";
    document.getElementById("demo").append(li);
  } else {
    let text = document.createTextNode(tasks[i]);
    let input = document.createElement("input");
    input.type = "checkbox";
    input.style = "margin-left:10px; height:18px; width:18px";

    input.onclick = () => cancelTask(i);
    let btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn2";
    btn.onclick = () => {
      updateTask(i);
    };
    let btnText = document.createTextNode("Update Task");
    btn.appendChild(btnText);

    let btn1 = document.createElement("button");
    btn1.type = "button";
    btn1.className = "btn1";
    btn1.onclick = () => {
      removeTask(i);
    };
    let btnText1 = document.createTextNode("Delete Task");
    btn1.appendChild(btnText1);

    li.appendChild(text);
    li.appendChild(input);
    li.appendChild(btn);
    li.appendChild(btn1);
    li.style = "margin:15px 15px 15px 0px; font-size:20px";
    document.getElementById("demo").append(li);
  }
}

// ********* Remove tasks from the todo list *********
function removeTask(id) {
  newArray.splice(id, 1);
  newCheckboxValue.splice(id, 1);
  localStorage.setItem("Tasks", JSON.stringify(newArray));
  localStorage.setItem("BooleanValue", JSON.stringify(newCheckboxValue));
  document.getElementById("demo").children[id].remove();
}
