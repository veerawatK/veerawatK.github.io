var listText = {
  "myHTMLCarousel-inner": {
    "detail" : [
      {'slideID': "Solar", 'name' : "Solar Rooftop Landing Page", 'description':"โปรเจกต์วิชา Multimedia Technology ทำร่วมกับ Greenpeace Thailand"}
    ]
  },
  "myRANSCarousel-inner": {
    "detail" : [
      {'slideID': "RANS", 'name':"Road Risk Areas Notification System",'description':"แอปพลิเคชันทางโทรศัพท์สำหรับแจ้งเตือนจุดเสี่ยงบนท้องถนนเมื่อผู้ใช้เข้าใกล้จุดเสี่ยง"}
    ]
  }
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
