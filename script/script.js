try {
const hamburger = document.querySelector(".mobile-nav-button");
const navMenu = document.querySelector(".header-nav-container-list-bars");

hamburger.addEventListener("click", mobileMenu);  

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    console.log("you are pressing me");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList-remove("active");
}
} catch {}




var audiolist = {
    1: "../images/02.Jonathan McReynolds-I Love You-1.mp3",
    2: "../images/04  - kim burrell - i surrender all-1.mp3",
    0: "../images/Anthony Brown ● I Am Miracle ( Lyrics ) (192 kbps).mp3"
}


document.querySelectorAll(".song-section-two-one-music-box").forEach((el, i)=> {
    // if (i != 0) {
        el.addEventListener("click", ()=>{
            document.getElementById('player').pause();
            var img = el.children[0].children[0].src;
            var title = el.children[0].children[1].innerText;
            var artist = el.children[1].innerText;
            document.querySelector(".song-section-two-one-box-image").children[0].src = img;
            document.querySelector(".song-section-two-one-box-texts-title").innerText = title;
            document.querySelector(".song-section-two-one-box-texts-author").children[0].innerText = artist;
            document.getElementById('player').src = audiolist[i];
            document.getElementById('player').play();
            document.getElementById('play').style.display = 'none'
            document.getElementById('pause').style.display = 'block'
        })
    // }  
    // console.log(el)
})

var audioListtwo = {
    0: "../images/BROODING victoria orenze.mp3",
    1: "../images/BULIE-Preye Odede.mp3",
    2: "../images/Changed-Geoffery-Golden.mp3",
    3: "../images/David D - We Worship You.mp3",
    4: "../images/David-G-Yahweh.mp3",
    5: "../images/Draw - Victoria Orenze.mp3"
}

document.querySelectorAll(".song-section-two-two-secondbox-title-flex").forEach((el, i)=>{
    el.addEventListener("click", ()=>{
        document.getElementById("player").pause();
        var img = el.children[0].children[0].src;
        var artist = el.children[0].children[1].innerText;
        document.querySelector(".song-section-two-one-box-image").children[0].src = img;
        document.querySelector(".song-section-two-one-box-texts-author").children[0].innerText = artist;
        document.querySelector(".song-section-two-one-box-texts-title").innerText = " ";
        document.getElementById('player').src = audioListtwo[i];
        document.getElementById('player').play();
        document.getElementById('play').style.display = 'none'
        document.getElementById('pause').style.display = 'block'
    })
})