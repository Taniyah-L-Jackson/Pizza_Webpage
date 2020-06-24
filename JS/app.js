//slider base
var slider_base = document.getElementById('slider');

//--id and list for slider:
var slider_img = document.getElementById('imageDisplay');

var slider_list = [
    "media/aurelien-lemasson-theobald-x00CzBt4Dfk-unsplash(resized).jpg",
    "media/sestrjevitovschii-ina-7zfQ6sbWVyE-unsplash(resized).jpg",
    "media/nadine-primeau--ftWfohtjNw-unsplash(resized).jpg",
];
//store in list

//show for slider
slider_img.src = slider_list[0]

// get value of btn
var slideBtn1 = document.getElementById('slideImg1');
var slideBtn2 = document.getElementById('slideImg2');
var slideBtn3 = document.getElementById('slideImg3');

//slide buttons
slideBtn1.addEventListener('click', sliding);
slideBtn2.addEventListener('click', sliding);
slideBtn3.addEventListener('click', sliding);

function sliding(event) {

    // switch based on id of button
    switch (event.target.id) {
        case 'slideImg1':
            slider_img.src = slider_list[0]
            break;

        case 'slideImg2':
            slider_img.src = slider_list[1]
            break;

        case 'slideImg3':
            slider_img.src = slider_list[2]
            break;
        
    }
}
