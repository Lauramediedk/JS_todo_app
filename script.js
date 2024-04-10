// We set the variables to the ID's
// These are the variables we will be using through the js file
// To access the html ID's
const todoForm = document.getElementById('todo_form');
const todoInput = document.getElementById('todo_input');
const todoList = document.getElementById('todo_list');
// Global scope variables as they are assigned outside of functions

// Add the event listener for the form submission to handle the action
// We listen for the button click, which is set to submit
todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Prevents the default action
    // That means we can override the default action of a submit button
    // And add custom code so we can make it act in a custom way
    // It also means we avoid a refresh of the page when a submit happens

    const newTask = todoInput.value;
    //This is a local scope as it is assigned inside a function
    // We assign a new variable to the todoInput's value

    if (newTask === '') { // If there is no input
        alert('Please enter a task')
        return
    }

    // Lastly we clear the input field after adding a task
    todoInput.value = '';

    // We make a function to add tasks in form of li tags
    function addTask(task) {
        const listItem = document.createElement('li');
        const taskText = document.createElement('span');
        // We set the content of the li to the task passed to the function
        // See the task parameter
        // We create a span element to hold the task text

        // textcontent is a node property that sets or returns the textual content of a node
        taskText.textContent = task;
        // We set the content of the taskText here to be equal to the input from the parameter

        listItem.appendChild(taskText);
        // listItem, aka the li tag, will then get the content from taskText
        // the appendChild adds a new child to an element as the last child node

        const checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        // setAttribute sets or changes the specified attribute to the value that is specified
        // So it sets the type to be a checkbox
        listItem.appendChild(checkBox);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        listItem.appendChild(deleteButton);


        todoList.appendChild(listItem);
        // Then we append the new list item to the todoList variable
        // Which of course holds the ID todo_list, so we add a child to that element the ID is assigned to
        // in other words. We add new content to the container of the ID todo_list
        // By saying todoList.appendChild, because todoList is the variable that refers to the todo_list ID

        // "this" is a keyword in JS that refers to the objects that the method is attached to
        // Meaning it will use the checkBox, as it is attached to that
        // Change is an event that it will listen for and then handle the code inside the function
        // taskText is the variable that holds the span text from earlier and we change that stylewise
        checkBox.addEventListener('change', function() {
            if (this.checked) {
                taskText.style.textDecoration = 'line-through';
            } else {
                taskText.style.textDecoration = 'none';
            }
        });

        deleteButton.addEventListener('click', function() {
            todoList.removeChild(listItem);
            // We remove the task from the list by using the listItem
            // Which is the variable that creates new list items with the li element
            // See earlier code
        });
    }

    addTask(newTask);

});