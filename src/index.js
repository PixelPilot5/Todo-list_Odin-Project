import "./styles.css";
// import "./template.html";
const projects=[];
function todo(title, description, duedate, priority) {
    return { title, description, duedate, priority};
}

const todo1=todo("Priyanshu","description1","duedate1","priority1");
const todo2=todo("Ayush","description2","duedate2","priority2");
const todo3=todo("Daksh","description3","duedate3","priority3");

const todo4=todo("Dhruv","description4","duedate4","priority4");
const todo5=todo("Harsh","description5","duedate5","priority5");
const todo6=todo("Rahul","description6","duedate6","priority6");

class Project{
    constructor(title){
        this.title=title;
        this.todos=[];
    }

    addTodo(todoInstance) {
        this.todos.push(todoInstance);
    }


}

const inbox=new Project("Inbox");
const today=new Project("Today");
const upcoming=new Project("Upcoming");
const renderSingleProject = (proj) => {
    const projname = proj.title;
    const projdiv = `<li class="project-name" data-id="${projects.indexOf(proj)}">${projname}</li>`;
    document.querySelector(".project-list").insertAdjacentHTML("beforeend", projdiv);
    document.querySelector(".project-list").lastChild.addEventListener("click",()=>{
        showtodos(proj);
    });
};

const createproject=(proj)=>{
    projects.push(proj);
        renderSingleProject(proj);

}


createproject(inbox);
createproject(today);
createproject(upcoming);

inbox.addTodo(todo1);
inbox.addTodo(todo2);
inbox.addTodo(todo3);

today.addTodo(todo4);
today.addTodo(todo5);
today.addTodo(todo6);


const showtodos=(projname)=>{
    document.querySelector(".todo-list").innerHTML="";
    const todos=projname.todos;
    const todolist=document.querySelector(".todo-list");
    todos.forEach(todo => {    
        const div=`<div>
        <div class="left"><input type=checkbox><p>${todo.title}</p></div>
        <div class="right"><button>edit</button><button>delete</button></div>
            </div>`;
        todolist.insertAdjacentHTML("beforeend",div);
    });
}

function openForm() {
  document.querySelector(".form-popup").style.display = "block";
  const overlay = document.querySelector(".form-overlay");
    if (overlay) {
        overlay.classList.add("show");
    }
}

function closeForm() {
  document.querySelector(".form-popup").style.display = "none";
  const overlay = document.querySelector(".form-overlay");
    if (overlay) {
        overlay.classList.remove("show");
    }
}

const add = document.querySelector(".add");
add.addEventListener("click",openForm);

document.querySelector(".close-btn").addEventListener("click",closeForm)

showtodos(inbox);
// document.getElementById("addtodo").addEventListener("click",addTodo);

const todoformcontent=`      <form class="popup-form">
        <div class="form-group inline-group">
          <label for="todo-title">Title:</label>
          <input type="text" id="todo-title" placeholder="Pay bills" required>
        </div>

        <div class="form-group inline-group">
          <label for="todo-details">Details:</label>
          <input type="text" id="todo-details" placeholder="e.g internet, phone, rent.">
        </div>

        <!-- Sticky Bottom Section for Controls -->
        <div class="form-controls">
          <div class="control-row">
            <label for="due-date">Due Date:</label>
            <input type="date" id="due-date" placeholder="DD-MM-YYYY">
          </div>

          <div class="control-row">
            <span class="label-mock">Priority:</span>
            <div class="priority-group">
              <button type="button" class="priority-btn low">LOW</button>
              <button type="button" class="priority-btn medium">MEDIUM</button>
              <button type="button" class="priority-btn high">HIGH</button>
            </div>
          </div>

          <button type="submit" class="submit-btn">ADD TO DO</button>
        </div>
      </form>`;


const projecttformcontent=`        <form class="popup-form">
        <div class="form-group inline-group">
          <label for="todo-title">Title:</label>
            <input type="text" id="todo-title" placeholder="House Renovation" required>
        </div>


        <!-- Sticky Bottom Section for Controls -->

          <button type="submit" class="submit-proj">CREATE PROJECT</button>
      </form>`;

document.getElementById("todo-form").addEventListener("click",()=>{

    document.querySelector(".popup-right").innerHTML=``;
    document.querySelector(".popup-right").insertAdjacentHTML("beforeend",todoformcontent);
});
document.getElementById("project-form").addEventListener("click",()=>{
    document.querySelector(".popup-right").innerHTML=``;
    document.querySelector(".popup-right").insertAdjacentHTML("beforeend",projecttformcontent);
});