let cat = document.getElementById("cat")
let dog = document.getElementById("dog")
let bird = document.getElementById("bird")

cat.addEventListener("mouseover", function() {
    dog.style.opacity = 0.2;
    bird.style.opacity = 0.2;
    scenes[scenes.length-3].render();
})

cat.addEventListener("mouseout", function( event ) {
    dog.style.opacity = 1; 
    bird.style.opacity = 1;
    scenes[8].render()
})

dog.addEventListener("mouseover", function() {
    cat.style.opacity = 0.2;
    bird.style.opacity = 0.2;
    scenes[scenes.length-2].render();
})

dog.addEventListener("mouseout", function( event ) {
    cat.style.opacity = 1; 
    bird.style.opacity = 1;
    scenes[8].render()
})

bird.addEventListener("mouseover", function() {
    dog.style.opacity = 0.2;
    cat.style.opacity = 0.2;
    scenes[scenes.length-1].render();
})

bird.addEventListener("mouseout", function( event ) {
    dog.style.opacity = 1; 
    cat.style.opacity = 1;
    scenes[8].render()
})



