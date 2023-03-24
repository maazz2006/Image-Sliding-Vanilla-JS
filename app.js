const carousal = document.querySelector('.images');

const images =[ 
    [img1='./images/item-1.jpeg',img2='./images/item-2.jpeg',img3='./images/item-3.jpeg',],
    [img1='./images/item-4.jpeg',img2='./images/item-5.jpeg',img3='./images/item-6.jpeg'],
    [img1='./images/item-7.jpeg',img2='./images/item-8.jpeg',img3='./images/item-9.jpeg']
]
leftBtn = document.querySelector('.left');
rightBtn = document.querySelector('.right');
let content = 0
    
window.addEventListener("DOMContentLoaded",(event) => {
    displayImages(content); 
})

function displayImages(content){

        threeImgs = images[content];
        console.log(threeImgs);
        carousal.innerHTML="";

        for(eachImg of threeImgs){
            const newImage = document.createElement('img');
            newImage.src = eachImg ;
            carousal.appendChild(newImage);
            // carousal.innerHTML += newImage
        }
}
leftBtn.addEventListener('click', ()=>{
    if(content < 0){
        content = images.length-1;
        displayImages(content);
    }
    else{
        content -= 1
        displayImages(content);
    }
})

rightBtn.addEventListener('click', ()=>{
    if(content == images.length - 1){
        content = 0;
        displayImages(content);
    }
    else{
        content += 1
        displayImages(content);
    }
})
