let newTask = document.getElementById("addTask");
let taskNo = 1;

//* Validating characters to alphabets, numericals and space
newTask.addEventListener("keydown", function (e){
  if(e.key.match(/[a-zA-Z0-9 ]/g) == null){
    e.preventDefault();
  }
});

//* functionality to add a new task

newTask.addEventListener("keydown", function (e) {
  if(e.key == "Enter" && newTask.value != 0){
    // console.log("Enter key is presed");
    // console.log(newTask.value);
    addNewTask(newTask.value);
    newTask.value = "";
  }
});

function addNewTask(t) {
  let li = document.createElement("li");
  let input = document.createElement("input");
  input.type = "checkbox";
  let label = document.createElement("label");
  label.innerText = t;
  
  // set attributes
  input.classList.add("task");
  ++taskNo;
  input.setAttribute("id", `task${taskNo}`);
  label.setAttribute("for", `task${taskNo}`);


  //add elements
  li.appendChild(input);
  li.appendChild(label);

  let taskBox = document.getElementById("taskList");
  taskBox.prepend(li);
}


//* Delete task functionality

let checkboxes = document.getElementsByClassName("task");
let del = document.querySelector(".del");

del.addEventListener("click", function () {
  for(let box of checkboxes){
    if(box.checked == true){
      let list = box.parentElement; // li's to be deleted
      
      setTimeout( () => {
        list.remove();
      }, 250);
    }
  }
});



