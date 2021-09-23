var currentSlide = 1;

var lastClass = " fox"; //we'll understand what this does later..


var link = document.getElementById(1);

function go(e, x) {        // function to slide between slides
                        // by adding class 'go' and specify which slide to go
                        // class 'go'  adds translate-X to main slider

    if (x > currentSlide || x < currentSlide) { //if x == currentSlide don't go

        lastClass = lastClass.substring(1); // remove space from last Class
        document.querySelector('.slider').classList.remove(lastClass);
        var str = " go" + (x-1);
        document.querySelector('.slider').className += str;
        currentSlide = x;
        lastClass = str; // holds the value of the last added class
                         // so we can remove it later
    }

    if(e.className == "read-button-one") {

        e = document.getElementById('2');

    }

    if(e.className == "read-button-two") {

        e = document.getElementById('3');

    }

    link.classList.remove('active');
    e.classList.add('active');
    link = e;

}

//  READ MORE buttons function

var firstButton = document.querySelector('.read-button-one');
var secondButton = document.querySelector('.read-button-two');




//modal functions

var modalImages = document.querySelectorAll('img.modalImage');

var cur;

function setImage(x) {

    cur = x;
    modalImages[cur].classList.add("active");

}

function removeImage(x) {

    modalImages[x].classList.remove("active");

}

function showModal(x) {

    setImage(x-1);
    document.querySelector('.modal').style.display = 'block';

}

function closeModal() {

    removeImage(cur);
    document.querySelector('.modal').style.display = 'none';

}

function next() {

    removeImage(cur);

    if(cur + 1 == modalImages.length){

        cur = -1;

    }

    setImage(cur+1);

}


function prev() {

    removeImage(cur);

    if(cur == 0){

        cur = 12;

    }

    setImage(cur-1);

}

function show(x) {

    removeImage(cur);
    cur = x-1;
    setImage(cur);

}
