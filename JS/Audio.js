let audio = new Audio("jungle-vibes-153242.mp3");
// --------- Start Music ---------
let playAudio = () => {
  audio.play();
};

// --------- Stop Music ---------
let pauseAudio = () => {
  audio.pause();
};

// Displaying time on clock
setTimeout(()=>{
    let d = new Date();
    // console.log(d);
    if(d.getMonth() < 10 && d.getDate() < 10){
      document.getElementById("time").value = `${d.getFullYear()}-0${d.getMonth()+1}-0${d.getDate()}T06:00`;
    }
    else if(d.getMonth() < 10){
      document.getElementById("time").value = `${d.getFullYear()}-0${d.getMonth()+1}-${d.getDate()}T06:00`;
    }
    else if(d.getDate() < 10){
      document.getElementById("time").value = `${d.getFullYear()}-${d.getMonth()+1}-0${d.getDate()}T06:00`;
    }
    else {
      document.getElementById("time").value = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}T06:00`;
    }
},10)


// --------- Setting an Alarm ---------
let id1 = 0;
let alarmSet = false;
let setAlarm = () => {
  let alarm = document.getElementById("time").value;
  console.log(alarm);
// --------- Getting Date ----------
  let dateInfo = alarm.slice(0, 10).split("-");
  console.log(dateInfo);
  let [year, month, date] = [
    dateInfo[0],
    dateInfo[1],
    dateInfo[2],
  ];

// --------- Getting Time ----------
  let timeInfo = alarm.slice(-5).split(":");
  console.log(timeInfo);
  let [hours, minutes] = [timeInfo[0], timeInfo[1]];

  if(year){
    if(hours < 12){
      document.querySelector("p").innerHTML = `Alarm has been set for ${hours}:${minutes} AM!!`;
    }
    else {
      document.querySelector("p").innerHTML = `Alarm has been set for ${hours}:${minutes} PM!!`;
    }
    setTimeout(()=>{
      document.querySelector("p").innerHTML = ``;
    },3000);
    console.log(`${year}-${month}-${date}T${hours}:${minutes}`);
      let timerId1 = setInterval(() => {
        let d = new Date();
        if (d.getFullYear() == year && d.getMonth() == month-1 && d.getDate() == date && d.getHours() == hours && d.getMinutes() == minutes) {
          playAudio();
          alarmSet = true;
        }
      }, 1000);
      id1 = timerId1;
    }
  };
  

// --------- Snoozing the Alarm for 5 minutes ---------
let id2 = 0;
let snooze = () => {
    if(id1){
      pauseAudio();
      clearInterval(id1);
      id1 = 0;
    }
    let alarm1 = document.getElementById("time").value;
// --------- Getting Date ----------
  let dateInfo = alarm1.slice(0, 10).split("-");
  // console.log(dateInfo);
  let [year, month, date] = [
    dateInfo[0],
    dateInfo[1],
    dateInfo[2],
  ];

// --------- Getting Time ----------
  let timeInfo = alarm1.slice(-5).split(":");
  // console.log(timeInfo);
  let [hours, minutes] = [timeInfo[0], timeInfo[1]];

  if(year){
    document.querySelector("p").innerHTML = `Alarm has been snoozed for 5 minutes!!`;
    setTimeout(()=>{
      document.querySelector("p").innerHTML = ``;
    },3000);
    console.log(`${year}-${month}-${date}T${hours}:${Number(minutes)+5}`);
    if(minutes > 4 && minutes < 55){
      document.getElementById("time").value = `${year}-${month}-${date}T${hours}:${Number(minutes)+5}`;
    }
    else if(minutes == 55){
      document.getElementById("time").value = `${year}-${month}-${date}T${Number(hours)+1}:00`;
    }
    else if(minutes == 56){
      document.getElementById("time").value = `${year}-${month}-${date}T${Number(hours)+1}:01`;
    }
    else if(minutes == 57){
      document.getElementById("time").value = `${year}-${month}-${date}T${Number(hours)+1}:02`;
    }
    else if(minutes == 58){
      document.getElementById("time").value = `${year}-${month}-${date}T${Number(hours)+1}:03`;
    }
    else if(minutes == 59){
      document.getElementById("time").value = `${year}-${month}-${date}T${Number(hours)+1}:04`;
    }
    else if(minutes <= 4){
      document.getElementById("time").value = `${year}-${month}-${date}T${Number(hours)+1}:0${Number(minutes)+5}`;
    }
    let timerId2 = setInterval(() => {
        let d = new Date();
        if(minutes < 55){
          if (d.getFullYear() == year && d.getMonth() == month-1 && d.getDate() == date && d.getHours() == hours && d.getMinutes() == Number(minutes)+5) {
            playAudio();
            document.querySelector(".btn2").addEventListener("click",()=>{
              if(id2){
                pauseAudio();
                clearInterval(id2);
                id2 = 0;
                snooze();
              }
            });
          }
        }
        if(minutes == 55){
          if (d.getFullYear() == year && d.getMonth() == month-1 && d.getDate() == date && d.getHours() == hours && d.getMinutes() == 0) {
            playAudio();
            document.querySelector(".btn2").addEventListener("click",()=>{
              if(id2){
                pauseAudio();
                clearInterval(id2);
                id2 = 0;
                snooze();
              }
            });
          }
        }
        if(minutes == 56){
          if (d.getFullYear() == year && d.getMonth() == month-1 && d.getDate() == date && d.getHours() == hours && d.getMinutes() == 1) {
            playAudio();
            document.querySelector(".btn2").addEventListener("click",()=>{
              if(id2){
                pauseAudio();
                clearInterval(id2);
                id2 = 0;
                alarmSet = false;
                snooze();
              }
            });
          }
        }
        if(minutes == 57){
          if (d.getFullYear() == year && d.getMonth() == month-1 && d.getDate() == date && d.getHours() == hours && d.getMinutes() == 2) {
            playAudio();
            document.querySelector(".btn2").addEventListener("click",()=>{
              if(id2){
                pauseAudio();
                clearInterval(id2);
                id2 = 0;
                alarmSet = false;
                snooze();
              }
            });
          }
        }
        if(minutes == 58){
          if (d.getFullYear() == year && d.getMonth() == month-1 && d.getDate() == date && d.getHours() == hours && d.getMinutes() == 3) {
            playAudio();
            document.querySelector(".btn2").addEventListener("click",()=>{
              if(id2){
                pauseAudio();
                clearInterval(id2);
                id2 = 0;
                alarmSet = false;
                snooze();
              }
            });
          }
        }
        if(minutes == 59){
          if (d.getFullYear() == year && d.getMonth() == month-1 && d.getDate() == date && d.getHours() == hours && d.getMinutes() == 4) {
            playAudio();
            document.querySelector(".btn2").addEventListener("click",()=>{
              if(id2){
                pauseAudio();
                clearInterval(id2);
                id2 = 0;
                alarmSet = false;
                snooze();
              }
            });
          }
        }
      }, 1000);
      id2 = timerId2;
    }
  }

// Allowing snooze function to get execute, if id1 value is there.
    document.querySelector(".btn2").addEventListener("click",()=>{
      if(alarmSet && id2 == 0){
        snooze();
      }
    });

  // --------- Turning Off Alarm ---------
  let turnOff = () => {
    pauseAudio();
    if(id1){  
      clearInterval(id1);
      id1 = 0;
      document.querySelector("p").innerHTML = `Alarm has been turned Off!!`;
       setTimeout(()=>{
         document.querySelector("p").innerHTML = ``;
       },3000);
    }
    if(id2){
      clearInterval(id2);
      id2 = 0;
      document.querySelector("p").innerHTML = `Alarm has been turned Off!!`;
       setTimeout(()=>{
         document.querySelector("p").innerHTML = ``;
       },3000);
    }
  }



