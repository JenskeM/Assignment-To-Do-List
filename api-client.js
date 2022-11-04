let data = { "description": "input", "done": false };
const baseUrl = "http://localhost:3000/";

const postTask = function (input) {
    try {
        data.description = input;
        fetch(baseUrl, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.log("foutmelding: ", error);
    }
}

const getAllTasks = async function () {
    try {
        let res = await fetch(`http://localhost:3000/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        let getOutput = await res.json();
        return getOutput
    } catch (error) {
        console.log("foutmelding: ", error);
    }
}

const getSpecificTask = async function (item) {
    try {
        let res = await fetch(`http://localhost:3000/${item}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        let getOutput = await res.json();
        return getOutput
    } catch (error) {
        console.log("foutmelding: ", error);
    }
}

const deleteTask = async function (item) {
    try {
        res = await fetch(`http://localhost:3000/${item}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.log("foutmelding: ", error);
    }
}

const checkTask = async function (item, check) {
    if (check === 'true') {
        data.done = true
    }
    try {
        res = await fetch(`http://localhost:3000/${item}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.log("foutmelding: ", error);
    }
}

const changeTask = async function (item, newDescription) {
    data.description = newDescription;
    try {
        res = await fetch(`http://localhost:3000/${item}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.log("foutmelding: ", error);
    }
}



