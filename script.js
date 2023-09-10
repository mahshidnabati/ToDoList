const myInput = document.getElementById('input');
const myUl = document.getElementById('items');
document.getElementById('add').addEventListener("click" , ()=>{
    if(myInput.value != ""){
        var li = document.createElement('li');
        li.setAttribute("id" , "myLi");
        li.innerHTML = myInput.value;
        var dltBtn = document.createElement('button');
        dltBtn.setAttribute("id" , "dltBtn");
        dltBtn.innerHTML = "X";
        li.appendChild(dltBtn);
        myUl.appendChild(li);
        dltBtn.addEventListener("click" , ()=>{
            li.remove();
        });
        li.addEventListener("click" , ()=>{
            // li.style.backgroundColor = "rgb(83, 241, 125)";
            if (li.style.backgroundColor != "rgb(83, 241, 125)") {
                li.style.backgroundColor = "rgb(83, 241, 125)";
            }else{
                li.style.backgroundColor = "rgb(83, 223, 241)";
            }
        });
    }
    myInput.value = "";
});