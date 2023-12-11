let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

// Button 1
let frontend = document.querySelector('a:nth-of-type(1)');

frontend.addEventListener("click", function(){
  frontend.classList.toggle("colorswitch");
});
// Button 2
let design = document.querySelector('a:nth-of-type(2)');

design.addEventListener("dblclick", function(){
  design.classList.toggle("colorswitch");
});
// Button 3
let and = document.querySelector('a:nth-of-type(3)');

document.addEventListener("keyup", function (Event) {
  console.log(Event)
  if (Event.keyCode == 76 ) {
    and.classList.toggle("colorswitch")
  }
})
// Button 4
let 


