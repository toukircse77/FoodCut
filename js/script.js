/*navbar */
let header = document.querySelector('.navbarcss');

window.addEventListener('scroll', function(){
let value = window.scrollY;
header.classList.toggle("sticky", value > 100);

});
/*navbar */

/*Time clock */

        setInterval(function showTime() {
            let time = new Date();
            let hour = time.getHours();
            let min = time.getMinutes();
            let sec = time.getSeconds();
			let session;
			
			if(hour >= 12){
			hour = hour - 12;
			session = 'PM';
			}else{
			hour = 12;
			session = 'AM';
			}
			
           
		   
		   if(hour < 10){
		   hour = '0' + hour;
		   }else{
		   hour = hour;
		   }
		   
		   if(min < 10){
		   min = '0' + min;
		   }else{
		   min = min;
		   }
		   
		   if(sec < 10){
		   sec = '0' + sec;
		   }else{
		   sec = sec;
		   }
		   
            let currentTime = hour + ":" 
                + min + ":" + sec + session;
  
            document.getElementById("clock").innerHTML = currentTime;
        });
		
/*Time clock */	
	
/* slider */		
   var swiper = new Swiper(".mySwiper", {
		effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
		 speed: 1000,
		 loop: true,
		 autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });	

	  
/* FAQ  */		
 // select all accordion items
const accItems = document.querySelectorAll(".accordion__item");

// add a click event for all items
accItems.forEach((acc) => acc.addEventListener("click", toggleAcc));

function toggleAcc() {
  // remove active class from all items exept the current item (this)
  accItems.forEach((item) => item != this ? item.classList.remove("accordion__item--active") : null
  );

  // toggle active class on current item
  if (this.classList != "accordion__item--active") {
    this.classList.toggle("accordion__item--active");
  }
} 

