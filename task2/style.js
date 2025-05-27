function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }
  // Constructiing a list 
  const li = document.createElement("li");
  li.textContent = taskText;

  // Adding delter butoon 
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = function () {
    li.remove();
  };

  //  adding a check button 
 const cmp = document.createElement("button");
  cmp.textContent = "✔";
  cmp.className = "cmp";  
  cmp.style.marginLeft="10px";
  cmp.onclick = function () {
    li.style.backgroundColor="green";
    li.style.textDecoration="Line-through";
    cmp.remove();  
  };


  // appending the buttons into list 

  li.appendChild(cmp)
  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);
 
  taskInput.value = "";
}
