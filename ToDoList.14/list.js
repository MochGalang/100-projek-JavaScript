function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Isi dulu tugasnya ya!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", function () {
    li.classList.toggle("done");
  });

  li.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    li.remove();
  });

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
