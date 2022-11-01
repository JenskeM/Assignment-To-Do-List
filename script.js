const getBtt = document.querySelector('button');
const getInput = document.querySelector('input');
const getList = document.querySelector('.taskList');


const collectTasks = async function () {
    const output = await getTask();
    console.log(output[output.length - 1].description);
    return output;
    // for (i = 0; i < output.length; i++) {
    //     console.log(i)
    //     deleteTask(output[i]._id)
    // }
};



getBtt.addEventListener('click', () => {
    postTask(getInput.value);
    getInput.value = '';
    let newTaskContainer = document.createElement('div');
    let newTask = document.createElement('p');
    let newDelete = document.createElement('img');
    let newCheck = document.createElement(`input`);
    newCheck.type = 'checkbox';
    getList.appendChild(newTaskContainer);
    newTaskContainer.appendChild(newCheck);
    newTaskContainer.appendChild(newTask);
    newTaskContainer.appendChild(newDelete);
    newTask.innerHTML = collectTasks();
    newDelete.src = './Delete-icon.png';
})


// getBtt.addEventListener('click', collectTasks)
