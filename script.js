const panels=document.querySelectorAll(".panel");


panels.forEach(function(panel){
    panel.addEventListener("click",function(){
        removeactive();
        panel.classList.add("active")
    });
});

function removeactive(){
    panels.forEach(function(panel){
        panel.classList.remove("active");
    });
}



