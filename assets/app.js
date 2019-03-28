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
    percentSpan.text((percentage*100).toFixed(2));
    var elem = document.getElementById("myBar");
    elem.style.width = (percentage*100+ '%');

    // var startOfDay = moment().startOf('day')
    // console.log(startOfDay)
    // var endOfWorkDay = startOfDay.clone()
    // endOfWorkDay.add(16, 'hours');
    // var startOfWorkDay = startOfDay.add(7.5, 'hours')  
    // var timeAtWork = startOfWorkDay.from(now); //endOfWorkDay.subtract(startOfWorkDay) 
    // var percentDoneWD = (now / timeAtWork);
    // console.log("Start of Day: ", startOfWorkDay.format('LT'));
    // console.log("End of Day: ", endOfWorkDay.format('LT'));
    // console.log("time At Work: ", timeAtWork);
    // console.log("Percentage: ", percentDoneWD);

}


function updateProgress(){
    // progress(percent())
    percent();
    setInterval(updateProgress, 30000);
}

updateProgress()