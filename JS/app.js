//The slider (JS part)

//--img id and img list for slider:
var slider_img = document.getElementById('imageDisplay');

var slider_list = [
    "media/aurelien-lemasson-theobald-x00CzBt4Dfk-unsplash(resized).jpg",
    "media/kouji-tsuru-A9rP99IEdNM-unsplash(resized).jpg",
    "media/jasmin-schreiber-V2Kw-YC7Cls-unsplash(resized).jpg",
];

//show for slider
slider_img.src = slider_list[0] //first img shows

// Buttons 
// get value of btn
var slideBtn1 = document.getElementById('slideImg1');
var slideBtn2 = document.getElementById('slideImg2');
var slideBtn3 = document.getElementById('slideImg3');

//slide buttons
slideBtn1.addEventListener('click', sliding);
slideBtn2.addEventListener('click', sliding);
slideBtn3.addEventListener('click', sliding);

var slide_num = 0 //for auto-slider

function sliding(event) {

    // switch based on id of button
    switch (event.target.id) {
        case 'slideImg1':
            slider_img.src = slider_list[0]
            slide_num = 0 //set slide_num to current slide
            break;

        case 'slideImg2':
            slider_img.src = slider_list[1]
            slide_num = 1 //set slide_num to current slide
            break;

        case 'slideImg3':
            slider_img.src = slider_list[2]
            slide_num = 2 //set slide_num to current slide
            break;

        default: 
            break;
    }

    //reset auto-slider
    clearInterval(autoSlide)
    slider_img.classList.remove('fading')
    autoSlide = setInterval(function() { //auto slide imgs

        slide_num++
    
        if (slide_num > 2) { //if slide num becomes greater than 2
            slide_num = 0 //reset slide num
        }
        
        slider_img.src = slider_list[slide_num]
        slider_img.classList.add('fading')

    
    }, 3000); // time inbetween each second (1000ms = 1s)   

}

//the initial auto-slider
var autoSlide = setInterval(function() { //auto slide imgs

    slide_num++

    if (slide_num > 2) { //if slide num becomes greater than 2
        slide_num = 0 //reset slide num
    }

    slider_img.src = slider_list[slide_num]
    slider_img.classList.add('fading')

}, 3000); // time inbetween each second (1000ms = 1s)

