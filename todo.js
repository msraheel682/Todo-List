let inputs = document.getElementById("todo");
let tasks = document.querySelector("#task");
// let Add;

function Add(){
    if(inputs.value.trim() == ''){
        alert("Please First Enter Task");
    }else{
        let newEle = document.createElement("ul");
        newEle.innerHTML =`${inputs.value} <i class="ri-delete-bin-6-line"></i>`;
        task.appendChild(newEle);
        inputs.value = "";
        newEle.querySelector("i").addEventListener("click" , remove);
        // localStorage.setItem(inputs);

        function remove(){
            newEle.remove();
        }
    }
}