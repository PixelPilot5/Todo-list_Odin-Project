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

// const inbox=new Project("Inbox");
// const today=new Project("Today");
// const upcoming=new Project("Upcoming");
const renderSingleProject = (proj) => {
    const projname = proj.title;
    const projdiv = `<div class="projname">${projname}</div>`;
    document.querySelector(".projects").insertAdjacentHTML("beforeend", projdiv);
};

const createproject=(proj)=>{
    projects.push(proj);
        renderSingleProject(proj);
}


createproject(new Project("inbox"));
createproject(new Project("today"));
createproject(new Project("upcoming"));

// inbox.addTodo(todo1);
// inbox.addTodo(todo2);
// inbox.addTodo(todo3);

// today.addTodo(todo4);
// today.addTodo(todo5);
// today.addTodo(todo6);


const showtodos=(projname)=>{
    const todos=projname.todos;
    const todolist=document.querySelector(".todo-list");
    todos.forEach(todo => {    
        const div=`<div>
            <h1>${todo.title}</h1>
            <p>${todo.description}</p>
            <p>${todo.duedate}</p>
            <p>${todo.priority}</p>
            </div>`;
        todolist.insertAdjacentHTML("beforeend",div);
    });
}




// showtodos(today);
// document.getElementById("addtodo").addEventListener("click",addTodo);