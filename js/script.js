let progressSpans = document.querySelectorAll(".prog span");
let ourSkills = document.querySelector(".our-skills");

let stats = document.querySelector(".stats")
let goals = document.querySelectorAll(".stats .number")
let started = false

let scrollBtn = document.getElementById("scroll-btn")

window.onscroll = function () {
  // Skills Animate Width
  if (window.scrollY >= ourSkills.offsetTop - 250) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  // Stats increase Number
  if (window.scrollY >= stats.offsetTop - 250) {
    if(!started){ // If The Started = false
      goals.forEach((goal) => {
        let WantedNumber = goal.dataset.num
        let count = setInterval(() => {
          goal.textContent++
          if(goal.textContent == WantedNumber){ // When The Number Reach The Wanted Goal
            clearInterval(count)
          }
        },2000 / WantedNumber) // To Make Them Stop at one Time
      })
    }
    started = true
  }
  // Scroll Btn
  if (window.scrollY >= 3500) {
    scrollBtn.style.right = "30px"
  }else{
    scrollBtn.style.right = "-60px"
  }
};
scrollBtn.onclick = function(){
  window.scroll({
    top:0,
    behavior:"smooth"
  })
}

// Countdown
let currentYear = new Date().getFullYear() + 1;
let countDownDate = new Date(`Dec 31, ${currentYear} 23:59:59`).getTime();

let counter = setInterval(() => {
  let currentDate = new Date().getTime()
  // Difference
  let diff = countDownDate - currentDate
  
  // let days = Math.floor(diff / 1000 / 60 / 60 / 24 )
  let days = Math.floor(diff / (1000 * 60 * 60 * 24))
  document.querySelector(".days").innerHTML = days
  
  let hours = Math.floor(diff % (1000 * 60 * 60 * 24) / 1000 / 60 / 60)
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours
  
  let minutes = Math.floor(diff % (1000 * 60 * 60) / 1000 / 60 )
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes
  
  let seconds = Math.floor(diff % (1000 * 60) / 1000)
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds

  if(diff == 0){
    clearInterval(counter)
  }
}, 1000)
