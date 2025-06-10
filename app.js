
const millisHandle = document.querySelector('.handle__millis');
const secondsHandle = document.querySelector('.handle__second');
const minutesHandle = document.querySelector('.handle__minute');
const hoursHandle = document.querySelector('.handle__hour');


// setInterval(() => {
//   setHandles()
// }, 1000);

let cancelId = requestAnimationFrame(setHandles)

function setHandles() {
  const d = new Date();
  const milliSeconds = d.getMilliseconds()
  const seconds = d.getSeconds();
  const minutes = d.getMinutes();
  const hours = d.getHours();

  const millisAngle = milliSeconds * 360 / 1000

  const secondsAngle = seconds * 6;

  const extraMinutesAngle = seconds * 0.1;
  const minutesAngle = minutes * 6 + extraMinutesAngle;
  const extraHoursAngle = minutes * 0.5; 
  const hoursAngle = hours * 30 + extraHoursAngle;

  millisHandle.style.transform = `translateX(-50%) rotate(${millisAngle}deg)`;
  secondsHandle.style.transform = `translateX(-50%) rotate(${secondsAngle}deg)`;
  minutesHandle.style.transform = `translateX(-50%) rotate(${minutesAngle}deg)`;
  hoursHandle.style.transform = `translateX(-50%) rotate(${hoursAngle}deg)`;

  cancelId = requestAnimationFrame(setHandles)
  
}