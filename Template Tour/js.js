// Slideshow image
var slideIndex = 0;
slide()
function slide(){
    var slides = document.getElementsByClassName("slideshow")
    for( var i = 0;i<slides.length;i++){
        slides[i].style.display = "none"
    }
    slideIndex++
    if(slideIndex > slides.length){
        slideIndex = 1
    } else if(slideIndex < 1) {
        slideIndex = slides.length
    }
    slides[slideIndex - 1].style.display = "block"
    setTimeout(slide, 4000)
}

// Map google
// mapOptions : Biến định nghĩa các thuộc tính cho bản đồ
// center :Định nghĩa trung tâm của map ở đâu
// zoom:Chỉ định leve zoom cho map
// mapTypeId:Định nghĩa kiểu hiển thị của map - HYBRID
// var map :Tạo một biến mới bên trong phân tử với id la map và tham số truyền vào là mapOptions
function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(41.878114, -87.629798),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
