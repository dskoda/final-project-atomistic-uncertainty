let cat = document.getElementById("cat")
let dog = document.getElementById("dog")
let bird = document.getElementById("bird")

cat.addEventListener("mouseover", function() {
    dog.style.opacity = 0.2;
    bird.style.opacity = 0.2;
    document.getElementById("animals").src="figs/intro/nn_4.png"
})

cat.addEventListener("mouseout", function( event ) {
    dog.style.opacity = 1; 
    bird.style.opacity = 1;
    document.getElementById("animals").src="figs/intro/nn_1.png"
})

dog.addEventListener("mouseover", function() {
    cat.style.opacity = 0.2;
    bird.style.opacity = 0.2;
    document.getElementById("animals").src="figs/intro/nn_3.png"
})

dog.addEventListener("mouseout", function( event ) {
    cat.style.opacity = 1; 
    bird.style.opacity = 1;
    document.getElementById("animals").src="figs/intro/nn_1.png"
})

bird.addEventListener("mouseover", function() {
    dog.style.opacity = 0.2;
    cat.style.opacity = 0.2;
    document.getElementById("animals").src="figs/intro/nn_2.png"
})

bird.addEventListener("mouseout", function( event ) {
    dog.style.opacity = 1; 
    cat.style.opacity = 1;
    document.getElementById("animals").src="figs/intro/nn_1.png"
})



