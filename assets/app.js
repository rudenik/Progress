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
    // console.log("Now in minutes: ", now.getMinutes());
    // console.log("Minutes in work day: ", minutesInWorkDay);
    // console.log("MinuteSinceWork Started: ", timeSinceWorkStarted);
    console.log("Percentage: ", percentage*100);

    var percentSpan = $("#percentage")
    if((percentage*100) > 100){
        percentSpan.text("It's over, Go Home!");
    }else if((percentage*100) > 80){
        percentSpan.text("Breathe, it's almost time to go home");
    }else if((percentage*100) > 59){
        percentSpan.text("You got this, keep going");
    }   
    else if((percentage*100) > 47){
        percentSpan.text("Stop what you're doing, get lunch");
    }   
    else if((percentage*100) > 35){
        percentSpan.text("Almost time for lunch");
    }   
    else if((percentage*100) > 10){
        percentSpan.text("Just think, this might be the most productive you'll be all day");
    }   
    else if((percentage*100) < 10){
        percentSpan.text("You shouldn't be checking the percentage yet, you haven't been here long enough");
    }else if ((percentage*100) < 0){
      percentSpan.text("You got to work too early. Take a nap");

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