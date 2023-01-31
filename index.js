var homecounter=document.getElementById("homecounter")
var guestcounter=document.getElementById("guestcounter")

//home buttons
let counterhome=0
function oneh(){
    counterhome++
    homecounter.innerHTML=counterhome
}
function twoh(){
    counterhome+=2
    homecounter.innerHTML=counterhome
} 

function treeh(){
    counterhome+=3
    homecounter.innerHTML=counterhome
    
}

//guest buttons
let counterguest=0
function oneg(){
    counterguest++
    guestcounter.innerHTML=counterguest

    
}

function twog(){
    counterguest+=2
    guestcounter.innerHTML=counterguest
    
}

function treeg(){
    
    counterguest+=3
    guestcounter.innerHTML=counterguest
   

}


