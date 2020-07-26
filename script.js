document.getElementById('login').addEventListener("click", function myfun(){
     document.getElementById("mylogin").style.display="none";
     document.getElementById("depositdiv").style.display="";
     
})



document.getElementById("deposit_button").addEventListener("click",function deposit(){
     var deposit_value=document.getElementById("deposit_input").value;
     document.getElementById("initial-deposit").innerHTML=deposit_value;
});

document.getElementById("withdraw_button").addEventListener("click",function withdraw(){
     var withdraw_value=document.getElementById("withdraw_input").value;
     document.getElementById("initial-withdraw").innerHTML=withdraw_value;
});