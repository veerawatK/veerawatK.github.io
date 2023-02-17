var listText = {
  "myHTMLCarousel-inner": {
    "detail" : [
      {'slideID': "Solar", 'name' : "Solar Rooftop Landing Page", 'description':"เว็บไซต์เกี่ยวกับโซลาร์รูฟท็อปในรูปแบบของ Landing Page ทำร่วมกับ Greenpeace Thailand"}
    ]
  },
  "myReactCarousel-inner": {
    "detail" : [
      {'slideID': "RANS", 'name':"Road Risk Areas Notification System",'description':"แอปพลิเคชันทางโทรศัพท์สำหรับแจ้งเตือนจุดเสี่ยงบนท้องถนนเมื่อผู้ใช้เข้าใกล้จุดเสี่ยง"}
    ]
  },
  "myJavaCarousel-inner": {
    "detail" : [
      {'slideID': "bankSim", 'name':"Bank Simulation",'description':"จำลองระบบธนาคารด้วยภาษา Java"},
      {'slideID': "bookStore", 'name':"Bookstore Simulation",'description':"จำลองระบบซื้อขายหนังสือออนไลน์ด้วยภาษา Java"}
    ]
  },
  "myPythonCarousel-inner": {
    "detail" : [
      {'slideID': "snakeGame", 'name':"Snake Game",'description':"เกมงูที่ถูกสร้างด้วยภาษา Python โดยใช้ Python Library ต่างๆ"}
    ]
  },
}

function nextText(info){
  // var element = document.querySelector('#'+info.id+' > div.carousel-item.active');
  // var elementAll = document.querySelectorAll('#'+info.id+' .carousel-item').length;
  var detailFilter = listText[info.parentID].detail.filter((value)=>{
    return value.slideID == info.slideID
  })
  document.querySelector('#'+info.parentID+'_expName').innerHTML = detailFilter[0].name
  document.querySelector('#'+info.parentID+'_expDesc').innerHTML = detailFilter[0].description
}

function prevText(info){
  var detailFilter = listText[info.parentID].detail.filter((value)=>{
    return value.slideID == info.slideID
  })
  document.querySelector('#'+info.parentID+'_expName').innerHTML = detailFilter[0].name
  document.querySelector('#'+info.parentID+'_expDesc').innerHTML = detailFilter[0].description
}

var navBtn = document.getElementsByClassName('nav-btn')
var navTextBG = document.getElementsByClassName("navTextBG")
var navText = document.getElementsByClassName("navText")
var detailText = document.getElementsByClassName("detail_text")
var navLink = document.getElementsByClassName("nav-link")
var activeNav = 1;
var lastActiveNav = 0;

function navLinkCheck(){
  for(var i=0; i<navLink.length; i++){
    if(navLink[i].classList.contains("active")){
      navLink[i].classList.remove("active")
      break;
    }
  }
  if(window.pageYOffset >= detailText[0].offsetTop-200){
    navLink[1].classList.add("active")
  }else if(window.pageYOffset >= 0){
    navLink[0].classList.add("active")
  }
}

function returnToTop(){
  window.scrollTo(0, 0);
}

function sendEmail(to){
  var link = "mailto:"+to;
  window.location.href = link;
}

var area = ''
window.onscroll = function(){
  if(window.pageYOffset >= 1){
    document.getElementById("top-nav").classList.add("fixed-top")
  }else{
    if(document.getElementById("top-nav").classList.contains("fixed-top")){
      document.getElementById("top-nav").classList.remove("fixed-top")
    }
  }
  navLinkCheck()
  if(window.pageYOffset >= detailText[0].offsetTop-200){
    area = 'experience'
  }
  else if(window.pageYOffset >= 0){
    area = 'home'
  }
  if(area == 'experience'){
    for(var i=0; i<navBtn.length-1; i++){
      if(window.pageYOffset >= detailText[i].offsetTop-200){
          activeNav = i+1
      }
      else{
        break;
      }
    }
    navBtn[lastActiveNav].classList.remove("active")
    navTextBG[lastActiveNav].classList.remove("open")
    navText[lastActiveNav].classList.remove("open")
    navBtn[activeNav].classList.add("active")
    navTextBG[activeNav].classList.add("open")
    navText[activeNav].classList.add("open")
    lastActiveNav = activeNav
  }else{
    navBtn[lastActiveNav].classList.remove("active")
    navTextBG[lastActiveNav].classList.remove("open")
    navText[lastActiveNav].classList.remove("open")
    navBtn[0].classList.add("active")
    navTextBG[0].classList.add("open")
    navText[0].classList.add("open")
    lastActiveNav = 0
  }
}

function navToCarousel(to){
  window.scrollTo(0, document.getElementsByClassName('detail_text')[to].offsetTop-200)
}

const myCarousel = document.getElementsByClassName('carousel')
for(var i=0; i<myCarousel.length; i++){
  myCarousel[i].addEventListener('slide.bs.carousel', event => {
    if(event.direct == 'right'){
      prevText({'parentID':event.relatedTarget.parentElement.id, 'slideID':event.relatedTarget.id})
    }else{
      nextText({'parentID':event.relatedTarget.parentElement.id, 'slideID':event.relatedTarget.id})
    }
  })
}