function progress() {
    var elem = document.getElementById("myBar"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }
function percent(){
    var now = new Date();
    var minutesInWorkDay = 60*8.5
    var timeSinceWorkStarted = (now.getMinutes()+(now.getHours()*60))-(7.5*60);
    var percentage = timeSinceWorkStarted / minutesInWorkDay;
    console.log("Now in minutes: ", now.getMinutes());
    console.log("Minutes in work day: ", minutesInWorkDay);
    console.log("MinuteSinceWork Started: ", timeSinceWorkStarted);
    console.log("Percentage: ", percentage*100);

    var percentSpan = $("#percentage")
    if((percentage*100) > 50){
        percentSpan.text("Almost Time to go home");
    }else if((percentage*100) < 50){
        percentSpan.text("Almost Time for lunch");
    }   
    
    var elem = document.getElementById("myBar");
    elem.style.width = (percentage*100+ '%');
    elem.innerHTML = (percentage*100).toFixed(2) + '%'
    
}


function updateProgress(){
    percent();
    setInterval(updateProgress, 30000);
}

updateProgress()