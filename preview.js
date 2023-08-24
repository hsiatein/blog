console.log("preview.js已加载")
function toggleIframe(id, link) {
    const piframe = document.getElementById(id);
    const pbutton=document.getElementById("goto");
    piframe.src = link;
    piframe.style.display = "block";
    pbutton.style.display="block";
}
document.addEventListener("click", function(event) {
    const clickedElement = event.target;
    const elements = document.querySelectorAll("a");
    const piframe=document.getElementById("preview");
    const pbutton=document.getElementById("goto");
    var targetcheck=true;
    // console.log(elements);
    for(var i=0;i<elements.length;i++){
        if(clickedElement==elements[i]){
            targetcheck=false;
        }
    }
    if(targetcheck){
        piframe.style.display="none";
        pbutton.style.display="none";
    }
});
function gotothepage(){
    piframe=document.getElementById("preview");
    window.open(piframe.src, '_blank');
}
