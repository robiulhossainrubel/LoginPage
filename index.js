let ui1 = document.getElementById("pv");
let ui2 = document.getElementById("uv");
let form = document.getElementById("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if(isValid(username,password)){
        alert(`Hello,${username}`);
    }
    setTimeout(() => {
        ui1.style.visibility = "hidden";
        ui2.style.visibility = "hidden";
    }, 1000);
});


function isValid(username,password){
    if (username.trim() === '' && password.trim() === '') {
        console.log("v");
        ui1.style.visibility = "visible";
        ui1.innerText = "Please Enter Password.";
        ui2.style.visibility = "visible"
        ui2.innerText = "Please Enter Username.";
        return false;
    }else if(password.trim() === '' && username.trim() !== ''){
        console.log("p");
        ui1.style.visibility = "visible";
        ui1.innerText = "Please Enter Password.";
        return false;
    }else if(username.trim() === '' && password.trim() !== ''){
        console.log("u");
        ui2.style.visibility = "visible";
        ui2.innerText = "Please Enter Username.";
        return false;
    }else{
        return true;
    }
}
