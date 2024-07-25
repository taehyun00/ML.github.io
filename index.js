const idElement = document.getElementById("id");
const pwdElement = document.getElementById("pwd");
const loginButton = document.getElementById("login-btn");
const userIdElement = document.getElementById("userId");
const userPwdElement = document.getElementById("userPwd");

const userLoginInfo = localStorage.getItem("userInfo");
console.log(userLoginInfo);



loginButton.addEventListener("click",()=>{
    let userInfo = { id: idElement.value, pwd: pwdElement.value }
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
})