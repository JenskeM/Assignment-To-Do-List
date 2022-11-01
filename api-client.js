const data = { "description": "input", "done": false };
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

const getTask = async function () {
    try {
        let res = await fetch("http://localhost:3000/", {
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
        let res = await fetch(`http://localhost:3000/${item}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.log("foutmelding: ", error);
    }
}



