// Digital Clock 
function currentTime() {
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if(hh === 0){
      hh = 12;
  }
  if(hh > 12){
      hh = hh - 12;
      session = "PM";
   }

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
    
   let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clock").innerText = time; 
  let t = setTimeout(function(){ currentTime() }, 1000);
  //This method calls or runs a function after a specified number of milliseconds. Note: 1000ms = 1 second.
  //We use this method to update the code every second, to keep our clock running.
}

currentTime();



// part 2 

<div id = "clock" onload="currentTime()"></div>

function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh === 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
    //This method calls or runs a function after a specified number of milliseconds. Note: 1000ms = 1 second.
    //We use this method to update the code every second, to keep our clock running.
  }
  
  currentTime();


//   password hidden or seen 

{/* <p>Click the radio button to toggle between password visibility:</p>

Password: <input type="password" id="myInput"><br><br>
<input type="checkbox" onclick="myFunction()">Show Password */}


function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}


// scroll on top 

// #myBtn {
//     display: none;
//     position: fixed;
//     bottom: 20px;
//     right: 30px;
//     z-index: 99;
//     font-size: 18px;
//     border: none;
//     outline: none;
//     background-color: red;
//     color: white;
//     cursor: pointer;
//     padding: 15px;
//     border-radius: 4px;
//   }
  
//   #myBtn:hover {
//     background-color: #555;
//   }
//   </style>
//   </head>
  
  
//   <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>
  
//   <div style="background-color:black;color:white;padding:30px">Scroll Down</div>
//   <div style="background-color:lightgrey;padding:30px 30px 2500px">This example demonstrates how to create a "scroll to top" button that becomes visible 
//     <strong>when the user starts to scroll the page</strong>.</div>
  
  
  // Get the button
  let mybutton = document.getElementById("myBtn");
  
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


//   stricky navbar 

/* The sticky class is added to the navbar with JS when it reaches its scroll position */
// .sticky {
//     position: fixed;
//     top: 0;
//     width: 100%;
//   }

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}