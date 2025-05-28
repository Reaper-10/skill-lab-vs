function vote(){
    var name = document.getElementById("n").value;
    var age = document.getElementById("a").value;
    var res = document.getElementById("res");
    if(age>18){
        res.innerHTML="Eligible";
    }
    else
    {
res.innerHTML="You're Minor, go study.";
    }
    }