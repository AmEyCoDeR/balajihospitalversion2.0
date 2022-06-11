//less width
var navOpnBtn = document.getElementById("navOpenLesWidth");
var navClsBtn = document.getElementById("navCloseLesWidth");
navOpnBtn.addEventListener("click", opnNav);
navClsBtn.addEventListener("click", clsNav);

function opnNav() {
    document.getElementById("links").style.display = "block";
    navOpnBtn.style.display = "none";
    navClsBtn.style.display = "block";
}
function clsNav() {
    document.getElementById("links").style.display = "none";
    navClsBtn.style.display = "none";
    navOpnBtn.style.display = "block";
}


document.getElementById("det").style.display = "none";
document.getElementById("blogs").style.display = "none";
document.getElementById("abtus").style.display = "none";
document.getElementById("faqs").style.display = "none";
document.getElementById("cntus").style.display = "none";
document.getElementById("blog1").style.display = "none";


document.getElementById("hhome").addEventListener("click", function () {
    document.getElementById("home").style.display = "block";
    document.getElementById("det").style.display = "none";
    document.getElementById("blogs").style.display = "none";
    document.getElementById("abtus").style.display = "none";
    document.getElementById("faqs").style.display = "none";
    document.getElementById("cntus").style.display = "none";
    document.getElementById("blog1").style.display = "none";
});

document.getElementById("hdet").addEventListener("click", function () {
    document.getElementById("home").style.display = "none";
    document.getElementById("det").style.display = "block";
    document.getElementById("blogs").style.display = "none";
    document.getElementById("abtus").style.display = "none";
    document.getElementById("faqs").style.display = "none";
    document.getElementById("cntus").style.display = "none";
    document.getElementById("blog1").style.display = "none";
});

document.getElementById("hblogs").addEventListener("click", function () {
    document.getElementById("home").style.display = "none";
    document.getElementById("det").style.display = "none";
    document.getElementById("blogs").style.display = "block";
    document.getElementById("abtus").style.display = "none";
    document.getElementById("faqs").style.display = "none";
    document.getElementById("cntus").style.display = "none";
    document.getElementById("blog1").style.display = "none";
});

document.getElementById("habtus").addEventListener("click", function () {
    document.getElementById("home").style.display = "none";
    document.getElementById("det").style.display = "none";
    document.getElementById("blogs").style.display = "none";
    document.getElementById("abtus").style.display = "block";
    document.getElementById("faqs").style.display = "none";
    document.getElementById("cntus").style.display = "none";
    document.getElementById("blog1").style.display = "none";
});

document.getElementById("hfaqs").addEventListener("click", function () {
    document.getElementById("home").style.display = "none";
    document.getElementById("det").style.display = "none";
    document.getElementById("blogs").style.display = "none";
    document.getElementById("abtus").style.display = "none";
    document.getElementById("faqs").style.display = "block";
    document.getElementById("cntus").style.display = "none";
    document.getElementById("blog1").style.display = "none";
});

document.getElementById("hcntus").addEventListener("click", function () {
    document.getElementById("home").style.display = "none";
    document.getElementById("det").style.display = "none";
    document.getElementById("blogs").style.display = "none";
    document.getElementById("abtus").style.display = "none";
    document.getElementById("faqs").style.display = "none";
    document.getElementById("cntus").style.display = "block";
    document.getElementById("blog1").style.display = "none";
});

function showblog1() {
    document.getElementById("home").style.display = "none";
    document.getElementById("det").style.display = "none";
    document.getElementById("blogs").style.display = "none";
    document.getElementById("abtus").style.display = "none";
    document.getElementById("faqs").style.display = "none";
    document.getElementById("cntus").style.display = "none";
    document.getElementById("blog1").style.display = "block";
}

document.getElementById("hhomea").addEventListener("click", function () {
    document.getElementById("home").style.display = "block";
    document.getElementById("det").style.display = "none";
    document.getElementById("blogs").style.display = "none";
    document.getElementById("abtus").style.display = "none";
    document.getElementById("faqs").style.display = "none";
    document.getElementById("cntus").style.display = "none";
    document.getElementById("blog1").style.display = "none";
    document.getElementById("links").style.display = "none";
});

document.getElementById("hdeta").addEventListener("click", function () {
    document.getElementById("home").style.display = "none";
    document.getElementById("det").style.display = "block";
    document.getElementById("blogs").style.display = "none";
    document.getElementById("abtus").style.display = "none";
    document.getElementById("faqs").style.display = "none";
    document.getElementById("cntus").style.display = "none";
    document.getElementById("blog1").style.display = "none";
    document.getElementById("links").style.display = "none";
});

document.getElementById("hblogsa").addEventListener("click", function () {
    document.getElementById("home").style.display = "none";
    document.getElementById("det").style.display = "none";
    document.getElementById("blogs").style.display = "block";
    document.getElementById("abtus").style.display = "none";
    document.getElementById("faqs").style.display = "none";
    document.getElementById("cntus").style.display = "none";
    document.getElementById("blog1").style.display = "none";
    document.getElementById("links").style.display = "none";
});

document.getElementById("habtusa").addEventListener("click", function () {
    document.getElementById("home").style.display = "none";
    document.getElementById("det").style.display = "none";
    document.getElementById("blogs").style.display = "none";
    document.getElementById("abtus").style.display = "block";
    document.getElementById("faqs").style.display = "none";
    document.getElementById("cntus").style.display = "none";
    document.getElementById("blog1").style.display = "none";
    document.getElementById("links").style.display = "none";
});

document.getElementById("hfaqsa").addEventListener("click", function () {
    document.getElementById("home").style.display = "none";
    document.getElementById("det").style.display = "none";
    document.getElementById("blogs").style.display = "none";
    document.getElementById("abtus").style.display = "none";
    document.getElementById("faqs").style.display = "block";
    document.getElementById("cntus").style.display = "none";
    document.getElementById("blog1").style.display = "none";
    document.getElementById("links").style.display = "none";
});

document.getElementById("hcntusa").addEventListener("click", function () {
    document.getElementById("home").style.display = "none";
    document.getElementById("det").style.display = "none";
    document.getElementById("blogs").style.display = "none";
    document.getElementById("abtus").style.display = "none";
    document.getElementById("faqs").style.display = "none";
    document.getElementById("cntus").style.display = "block";
    document.getElementById("blog1").style.display = "none";
    document.getElementById("links").style.display = "none";
});

let imagenumber = 1;
let dec = false;
let inc = false;

function imagenumberinc() {
    imagenumber += 1;
    inc = true;
    dec = false;
}

function imagenumberdec() {
    imagenumber -= 1;
    inc = false;
    dec = true;
}

function update() {
    if (imagenumber === 1) {
        document.getElementById("img-div-desk").innerHTML = `<img src="img1.jpg" height="500vh">`;
        document.getElementById("img-div-mob").innerHTML = `<img src="img1.jpg" width="110vh">`;
    }
    else if (imagenumber === 2) {
        document.getElementById("img-div-desk").innerHTML = `<img src="img2.jpg" height="500vh">`;
        document.getElementById("img-div-mob").innerHTML = `<img src="img2.jpg" width="500vh">`;
    }
    else if (imagenumber === 3) {
        document.getElementById("img-div-mob").innerHTML = `<img src="img3.jpg" width="500vh">`;
        document.getElementById("img-div-desk").innerHTML = `<img src="img3.jpg" height="500vh">`
    }
    else if (imagenumber === 4) {
        document.getElementById("img-div-mob").innerHTML = `<img src="img4.jpg" width="500vh">`;
        document.getElementById("img-div-desk").innerHTML = `<img src="img4.jpg" height="500vh">`
    }
    else if (imagenumber === 5) {
        document.getElementById("img-div-mob").innerHTML = `<img src="img5.jpg" width="500vh">`;
        document.getElementById("img-div-desk").innerHTML = `<img src="img5.jpg" height="500vh">`
    }
    else if (imagenumber === 6) {
        document.getElementById("img-div-mob").innerHTML = `<img src="img6.jpg" width="500vh">`;
        document.getElementById("img-div-desk").innerHTML = `<img src="img6.jpg" height="500vh">`
    }
    else if (imagenumber === 7) {
        document.getElementById("img-div-mob").innerHTML = `<img src="img7.jpg" width="500vh">`;
        document.getElementById("img-div-desk").innerHTML = `<img src="img7.jpg" height="500vh">`
    }
    else if (imagenumber === 8) {
        document.getElementById("img-div-mob").innerHTML = `<img src="img8.jpg" width="500vh">`;
        document.getElementById("img-div-desk").innerHTML = `<img src="img8.jpg" height="500vh">`
    }
    else if (imagenumber === 9) {
        document.getElementById("img-div-mob").innerHTML = `<img src="img9.jpg" width="500vh">`;
        document.getElementById("img-div-desk").innerHTML = `<img src="img9.jpg" height="500vh">`
    }
    else if (imagenumber === 10) {
        document.getElementById("img-div-mob").innerHTML = `<img src="img10.jpg" width="500vh">`;
        document.getElementById("img-div-desk").innerHTML = `<img src="img10.jpg" height="500vh">`
    }
    else if (imagenumber === 11) {
        document.getElementById("img-div-mob").innerHTML = `<img src="img11.jpg" width="500vh">`;
        document.getElementById("img-div-desk").innerHTML = `<img src="img11.jpg" height="500vh">`
    }
    else if (imagenumber === 12) {
        document.getElementById("img-div-mob").innerHTML = `<img src="img12.jpg" width="500vh">`;
        document.getElementById("img-div-desk").innerHTML = `<img src="img12.jpg" height="500vh">`
    }
    else if (imagenumber === 13) {
        document.getElementById("img-div-mob").innerHTML = `<img src="img13.jpg" width="500vh">`;
        document.getElementById("img-div-desk").innerHTML = `<img src="img13.jpg" height="500vh">`
    }
    else if (imagenumber === 14) {
        document.getElementById("img-div-mob").innerHTML = `<img src="img14.jpg" width="500vh">`;
        document.getElementById("img-div-desk").innerHTML = `<img src="img14.jpg" width="500vh">`
    }
    else {
        if (dec) {
            imagenumber = 14;
        }
        else if (inc) {
            imagenumber = 1;
        }
        else {
            console.log("myau");
        }
        update();
    }
    console.log(imagenumber);
}

setInterval(update, 1);

document.onkeypress = function (eventKeyName) {
    eventKeyName = eventKeyName || window.event;
    if (eventKeyName.keyCode == 39) {
        imagenumberinc();
    }
    else if (eventKeyName.keyCode == 37) {
        imagenumberdec();
    }
    else {
        console.log("myau");
    }
};