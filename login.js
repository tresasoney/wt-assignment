let email=document.getElementById("email");
let error=document.getElementById("error");
let password=document.getElementById("password");

// let pwd= document.getElementById("pwd");
// let errorpwd=document.getElementById("errorpwd");






function  formvalidate() {
    // let message[];
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    // let regexp2=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;


    
if(regexp.test(email.value)&password.value!=" "){
 error.innerText="VALID"
     error.style.color="green";
    //   message.push("must contain @,number,com ");
    //    document.getElementById("erroremail")="hai"
// alert("haii");
    return true;
}
else 
{
     error.innerHTML="invalid";
     error.style.color="red";
    // alert("heke9");
    return false;
}
}