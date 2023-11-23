let todoList = [];

displayitems();

function addTodo(){
    let inputElement = document.querySelector('.todo-input');
    let dateElement = document.querySelector('.todo-date');

    let inputData = inputElement.value;
    let inputDate = dateElement.value;

    todoList.push({inputData , inputDate});

    inputElement.value = '';
    dateElement.value = '';

    displayitems();
}

function displayitems(){
    let displayElement = document.querySelector('.container');

    let newHtml = '';
    
    for (let i=0 ; i < todoList.length ; i++){
        let input=todoList[i].inputData;
        let date=todoList[i].inputDate;
        // let {input , date} = todoList[i]        // This is called object distructuring
        newHtml += `
        <span class="input">${input }</span>
        <span class="input">${date}</span>
        <button class="btn-delete" onclick="todoList.splice(${i} , 1);
        displayitems();">Delete</button>
        `
    }

    displayElement.innerHTML = newHtml;

}