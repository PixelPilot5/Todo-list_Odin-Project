import "./styles.css";
// import "./template.html";

const header = document.createElement("h1");
header.textContent = "Todo List";
document.body.appendChild(header);

function todo(title, description, duedate, priority) {
    return { title, description, duedate, priority};
}


class Project{
    constructor(title){
        this.title=title;
        this.todos=[];
    }

    addtodo(todoInstance){
        this.todos.push(todoInstance);
    }
}

const projects=["Inbox","Today","Upcoming"];
const inbox=new Project("Inbox");
const today=new Project("Today");
const upcoming=new Project("Upcoming");

const gettodo=()=>{
    const projname="Inbox";
    const todo1={
        title:"Todo 1",
        description:"description 1",
        duedate:"duedate 1",
        priority:"priority 1"
    }
}
const addTodo=(todo1)=>{
    showtodo();
}

const showtodo=()=>{
    todos.forEach(todo => {
        const todolist=document.querySelector(".todo-list");
        const div=`<div>
            <h1>${todo.title}</h1>
            <p>${todo.description}</p>
            <p>${todo.duedate}</p>
            <p>${todo.priority}</p>
            </div>`;
        todolist.innerHTML+=div;
    });
}

addTodo("todo1","description1","duedate1","priority1");
addTodo("todo2","description2","duedate2","priority2");
addTodo("todo3","description3","duedate3","priority3");

// document.getElementById("addtodo").addEventListener("click",addTodo);