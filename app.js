const millisHandle = document.querySelector(".handle__millis");
const secondHandle = document.querySelector(".handle__second");
const minuteHandle = document.querySelector(".handle__minute");
const hourHandle = document.querySelector(".handle__hour");

// setInterval(() => {
//   setHandles();
// }, 1000);
// YOU WOULD USE SETINTERVAL IF YOU WANTED THE SECONDS TO TICK EVERY 1 SEC LIKE AN OLDSCHOOL CLOCK

requestAnimationFrame(setHandles);

function setHandles() {
  const d = new Date();
  const millis = d.getMilliseconds();
  const seconds = d.getSeconds();
  const minutes = d.getMinutes();
  const hours = d.getHours();

  const extraSecondsAngle = millis * 0.006;
  const secondsAngle = seconds * 6 + extraSecondsAngle;
  //we multiplied by 6, because there are 360 deg divided by 60 seconds ticks on the clock

  const extraMinutesAngle = seconds * 0.1; //to get 0.1, you move 6 deg per minute and there are 60 seconds in a minute.  So how many deg do you need to move per second? 0.1 degrees
  const minutesAngle = minutes * 6 + extraMinutesAngle;
  //we multiplied by 6, because there are 360 deg divided by 60 minutes ticks on the clock

  const extraHoursAngle = minutes * 0.5; //to get 0.5, you move 30 deg per hour and there are 60 minutes in an hour.  So how many deg do you need to move per minute? 0.5 degrees.
  const hoursAngle = hours * 30 + extraHoursAngle;
  //we multiplied by 30, because there are 360 deg divided by 12 hour ticks on the clock

  millisHandle.style.transform = `translateX(-50%) rotate(${millis * 0.36}deg)`;
  secondHandle.style.transform = `translateX(-50%) rotate(${secondsAngle}deg)`;
  minuteHandle.style.transform = `translateX(-50%) rotate(${minutesAngle}deg)`;
  hourHandle.style.transform = `translateX(-50%) rotate(${hoursAngle}deg)`;

requestAnimationFrame(setHandles);


  // console.log('called')
}
