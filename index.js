
// animate the count
const counter = (from, to, element, duration) => {
    let startTime = null;
    const step = (time) => {
        if(!startTime) startTime = time;
        const progress = Math.min((time - startTime) / duration, 1);
        element.innerHTML = Math.floor(progress * (to - from) + from);
        if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
    window.requestAnimationFrame(step);
}

counter(0, 22, document.getElementById("questions"), 1000);
counter(1300, 1392, document.getElementById("solves"), 2000);
counter(900, 993, document.getElementById("users"), 1800);
counter(700, 789, document.getElementById("teams"), 1500);

// animate the countdown
const countdownFunction = () => {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
    const countDown = new Date("02/27/2022 12:00:00").getTime();
    x = setInterval(function() {    
      const now = new Date().getTime(),
            distance = countDown - now;
        document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
    }, 0)
}

countdownFunction()
