let car = document.getElementById("car");
let carsec = document.getElementById("car-1");
let carth = document.getElementById("car-2");
let carfr = document.getElementById("car-3");
let image = document.getElementById("redlight");
let imagesec = document.getElementById("redlight-1");
let imageth = document.getElementById("redlight-2");
let imagefr = document.getElementById("redlight-3");

let images = ["assets/images/red_light.svg", "assets/images/green_light.svg", "assets/images/red_light.svg", "assets/images/red_light.svg"];
let imagessec = ["assets/images/green_light.svg", "assets/images/red_light.svg", "assets/images/red_light.svg", "assets/images/red_light.svg"];
let imagesth = ["assets/images/red_light.svg", "assets/images/red_light.svg", "assets/images/green_light.svg", "assets/images/red_light.svg"];
let imagesfr = ["assets/images/red_light.svg", "assets/images/red_light.svg", "assets/images/red_light.svg", "assets/images/green_light.svg"];

let currentPos = 0;

function carRun() {
    car.style.animationPlayState = 'running';
    carsec.style.animationPlayState = 'paused';
    carth.style.animationPlayState = 'paused';
    carfr.style.animationPlayState = 'paused';
}

function carRun1() {
    car.style.animationPlayState = 'paused';
    carsec.style.animationPlayState = 'running';
    carth.style.animationPlayState = 'paused';
    carfr.style.animationPlayState = 'paused';
}

function carRun2() {
    car.style.animationPlayState = 'paused';
    carsec.style.animationPlayState = 'paused';
    carth.style.animationPlayState = 'running';
    carfr.style.animationPlayState = 'paused';
}

function carRun3() {
    car.style.animationPlayState = 'paused';
    carsec.style.animationPlayState = 'paused';
    carth.style.animationPlayState = 'paused';
    carfr.style.animationPlayState = 'running';
}

function stoprun() {
    car.style.animationPlayState = 'paused';
    carsec.style.animationPlayState = 'paused';
    carth.style.animationPlayState = 'paused';
    carfr.style.animationPlayState = 'paused';
}
stoprun();

function volgendefoto() {
    if (++currentPos >= images.length)
        currentPos = 0;
    image.src = images[currentPos];
    imagesec.src = imagessec[currentPos];
    imageth.src = imagesth[currentPos];
    imagefr.src = imagesfr[currentPos];

    console.log(image.src);
    if (image.src.endsWith("red_light.svg")) {
        stoprun();
    }
    if (image.src.endsWith("green_light.svg")) {
        carRun();
    } else if (imagesec.src.endsWith("green_light.svg")) {
        carRun1();
    } else if (imageth.src.endsWith("green_light.svg")) {
        carRun2();
    } else if (imagefr.src.endsWith("green_light.svg")) {
        carRun3();
    }
}

setInterval(volgendefoto, 5000);
