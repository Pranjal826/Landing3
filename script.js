var h4 = document.querySelector("h4")
var nav = document.querySelector(".menu")
var flag = 0
var home=document.querySelector("#home")
var room=document.querySelector("#rooms")
var about=document.querySelector("#about")
var contact=document.querySelector("#contact")


h4.addEventListener("click",function(){
  if(flag == 0){
    nav.style.top = "0"
    h4.innerHTML = `<i class="ri-close-fill"></i>`
    h4.style.color="white"
    flag = 1
  }else{
    nav.style.top = "-100%"
    h4.innerHTML = `<i class="ri-menu-3-fill"></i>`
    h4.style.color="white"
    flag = 0 
  }
  setTimeout(()=>{
    home.classList.add('animate__animated', 'animate__flipInX');
    room.classList.add('animate__animated', 'animate__flipInX');
    about.classList.add('animate__animated', 'animate__flipInX');
    contact.classList.add('animate__animated', 'animate__flipInX');
 

  },1000)
  

})