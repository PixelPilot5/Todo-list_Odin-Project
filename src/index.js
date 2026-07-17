import "./styles.css";
// import "./template.html";

const header = document.createElement("h1");
header.textContent = "Todo List";
document.body.appendChild(header);

function todo(title, description, duedate, priority, checklist) {
    return { title, description, duedate, priority, checklist };
}