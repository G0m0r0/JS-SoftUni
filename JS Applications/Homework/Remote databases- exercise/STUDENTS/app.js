import {apiKey,getAllStudents} from "./firebase-fetch.js";

function addTable(tbody,id,firstName,lastName,facultyNum,grade){
    tbody.id.value=id;
    tbody.firstName.value=firstName;
    tbody.lastName.value=lastName;
    tbody.facultyNum.value=facultyNum;
    tbody.grade.value=grade;
}

(async function solve(){
    let tbody={
        id: document.getElementById('id'),
        firstName: document.getElementById('firstName'),
        lastName: document.getElementById('lastName'),
        facultyNumber: document.getElementById('facultyNumber'),
        grade: document.getElementById('grade'),
        submit: document.getElementById('submit'),
    }

    getAllStudents().then(x=>{
        console.log(x);

        Object.entries(x).map(([id,firstName,lastName,facultyNum,grade])=>{
            addTable(tbody,id,firstName,lastName,facultyNum,grade);
        })
    });

    
})()