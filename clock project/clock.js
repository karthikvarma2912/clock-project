setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let ampm="AM";
    //document.getElementById("tiktok").innerHTML = (sec%2==0)?"TICK____":"____TOCK";
    
    if(hour>12)
    {
        hour-=12;
        ampm="PM";
        
    }
    
    if(hour==0)
    {
        hour=12;
    }
    hour=(hour<10)?"0"+hour:hour;
    sec=(sec<10)?"0"+sec:sec;
    min=(min<10)?"0"+min:min;
    
    window.currentTime = hour + ":"
        + min + ":" + sec + ampm;

    document.getElementById("clock")
        .innerHTML = currentTime;

    
        
};

setInterval(updateImg,1000);
function updateImg()
{
    let hours=new Date().getHours();
    var msg;
    var image;

    if(hours<12)
    {
        image="images/gdmrng.jpg";
        msg="GOOD MORNING";
    }
    else if(hours>=12 && hours<=16)
    {
        image="images/laptop.jpg";
        msg="GOOD AFTERNOON";
    }
    else if(hours>16)
    {
        image="images/gdevng.jpg";
        msg="GOOD EVENING";
    }
   document.getElementById("message").innerHTML=msg;
   document.getElementById("clockimage").src=image;

};



