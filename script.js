document.getElementById('login').addEventListener("click", function myfun(){
     document.getElementById("mylogin").style.display="none";
     document.getElementById("depositdiv").style.display="";
     
})

// deposit code
document.getElementById("deposit_button").addEventListener("click",function deposit(){
     var deposit_value=document.getElementById("deposit_input").value;
     var dep_val=parseInt(deposit_value);
     var initial_deposit=document.getElementById("initial-deposit").innerText;
     var int_dep=parseInt(initial_deposit);
     document.getElementById("initial-deposit").innerText=dep_val+int_dep;
     var value=dep_val+int_dep
    var initial_balance= document.getElementById("initial-balance").innerText;
    var ini_bal=parseInt(initial_balance);
    document.getElementById("initial-balance").innerText=value+ini_bal;
});


//withdraw code
document.getElementById("withdraw_button").addEventListener("click",function withdraw(){
     var withdraw_value=document.getElementById("withdraw_input").value;
     document.getElementById("initial-withdraw").innerHTML=withdraw_value;
});