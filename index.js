let users = [];

const submit = document.getElementById("addUser");


submit.addEventListener('click', () => {

    const userName = document.getElementById("name").value;
    const userProfession = document.getElementById("prof").value;
    const userAge = document.getElementById("age").value;


    //update users array
    let user = {};
    user["Name"] = userName;
    user["Profession"] = userProfession;
    user["Age"] = userAge;
    users.push(user);
})

let btnClear = document.querySelector('#clear-btn');
let inputs = document.querySelectorAll('#name, #profession, #age');

btnClear.addEventListener('click', ()=>{
    inputs = forEach(input => input.value = '');
})