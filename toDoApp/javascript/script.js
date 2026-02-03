// Local Storage'tan verileri çekiyoruz
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// HTML elemanlarını alıyoruz
const list = document.getElementById("list");
const taskInput = document.getElementById("task");

// Toast elemanlarını alıyoruz
const successToast = document.querySelector(".toast.success");
const errorToast = document.querySelector(".toast.error");

// Toast'u gösteren fonksiyon
function showToast(type) {
    if (type === "success") {
        $(successToast).toast("show");
    } else if (type === "error") {
        $(errorToast).toast("show");
    }
}

// Listeyi render ediyoruz
function renderList() {
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        if (task.completed) {
            li.classList.add("checked");
        }

        li.textContent = task.text;

        li.addEventListener("click", () => toggleCompleted(index));

        const span = document.createElement("span");
        span.textContent = "×";
        span.className = "close";

        span.addEventListener("click", (event) => {
            event.stopPropagation(); 
            deleteElement(index);
        });

        li.appendChild(span);
        list.appendChild(li);
    });
}

// Element eklemek için
function newElement() {
    const text = taskInput.value.trim();

    if (text === "") {
        showToast("error");
        return;
    }

    const newTask = {
        text: text,
        completed: false
    };

    tasks.push(newTask);
    saveTasks();

    taskInput.value = "";
    renderList();
    showToast("success");
}

// Element silmek için
function deleteElement(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderList();
}

// Yapılan task'ı işaretlemek için
function toggleCompleted(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderList();
}

// Local storage'a kaydediyoruz
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Sayfa yüklendiğinde sayfayı gösteriyoruz
renderList();
