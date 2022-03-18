function showTime() { // Added Hour,Minute and Second variable with Date Constructor Below
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  // Added Zero before hour,minutes and second if they < 10 Below

  hour = (hour < 10) ? "0" + hour : hour;
  minute = (minute < 10) ? "0" + minute : minute;
  second = (second < 10) ? "0" + second : second;


  const clock = hour + ":" + minute + ":" + second;
  document.getElementById("clock").innerHTML = clock;



  setTimeout(showTime, 1000);
}
showTime()