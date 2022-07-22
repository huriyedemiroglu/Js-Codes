setInterval(function digitalClock(){ 
  let currentTime = new Date();
  let hour = currentTime.getHours();
  let minute = currentTime.getMinutes();
  let second = currentTime.getSeconds();
  
  document.getElementById("dayNight").textContent = hour>12 ? "PM" : "AM";
  if (hour > 12){
      hour -= 12;
  }
  document.getElementById("hours").textContent = (hour+"").padStart(2, "0");
  document.getElementById("seconds").textContent = (second+"").padStart(2, "0");
  document.getElementById("minutes").textContent = (minute+"").padStart(2, "0");
}, 1000)