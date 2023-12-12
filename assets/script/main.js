let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

// Button 1 --- click
let frontend = document.querySelector('a:nth-of-type(1)');

frontend.addEventListener("click", function(){
  frontend.classList.toggle("colorswitch");
});

// Button 2 --- dblclick
let design = document.querySelector('a:nth-of-type(2)');

design.addEventListener("dblclick", function(){
  design.classList.toggle("colorswitch");
});

// Button 3 --- KeyUp "L"
let and = document.querySelector('a:nth-of-type(3)');

document.addEventListener("keyup", function (Event) {
  console.log(Event)
  if (Event.keyCode == 76 ) {
    and.classList.toggle("colorswitch")
  }
})

// Button 4 --- focus
let development = document.querySelector('a:nth-of-type(4)');

development.addEventListener("focusin", function(Event){

  event.target.style.background = "var(--highlight-secondary)";
  event.target.style.color = "var(--secondary)";

},
true,);

development.addEventListener("focusout", function(Event){
  
  event.target.style.background = "var(--secondary)";
  event.target.style.color = "var(--highlight-primary)";

},
true,);

// Button 5 --- 'naam eventlistener'
let sprint5 = document.querySelector('a:nth-of-type(5)');

// sprint5.addEventListener("iets", function);




