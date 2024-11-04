var task = []

var taskStatus = {
    active : 'active',
    completed : 'completed'
};

function Task (id, name, status){
    this.id = id;
    this.name = name;
    this.status = status;
}

function addTaskElement (task){

    var listEl = document.getElementById('active-list');
    var taskEl = document.createElement('li');
    var textEl = document.createTextNode(task.name);

    taskEl.setAttribute('id', task.id);

    // adds text to "task" element
    taskEl.appendChild(textEl);

    listEl.appendChild(taskEl);
}

//click handler

function addTask(event){
    var inputEl = document.getElementById('input-task');
    if (inputEl.value != ''){
        var id = 'item-' + task.length
    }

    // new tasks
    var task = new Task(id, inputEl.value, taskStatus.active);
    task.push(task);
    // adds to DOM
    addTaskElement(task);
    //reset
    inputEl.value = ''
}

function completTask(event){
    var taskEl = event.target;
    var id = taskEl.id;

    for (var e = 0; e < task.length; e++){
        if (task[e].id === id){
            task[e].status = taskStatus.completed;
            break;
        }
    }
    
    taskEl.remove();
    document.getElementById('completed-list').appendChild(taskEl);

    function init (){
        document.getElementById('add-task').onclick = addTask;

        document.getElementById('active-list').onclick = completTask;

        document.getElementById('input-task').onkeypress = clickButton;
    }
    init();
}