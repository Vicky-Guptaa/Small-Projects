//https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

const loader=document.querySelector(".loader");
const imageContainer=document.querySelector(".image-container");

let imagesArray=[];

const count=10;
const apiKey='NUsQ1f8an9GQAmEs7EKkUvYNRMV_Dw65sfAsIUlNgtQ';

const apiUrl=`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


(async function getImages(){
    try{
        const response=await fetch(apiUrl);
        imagesArray=await response.json();
        displayImages();
    }
    catch (error){
        console.log("error : ",error);
    }

})()

function displayImages(){
    imagesArray.forEach((image)=>{
        const imageWrapper=document.createElement("div");
        setAttribute(imageWrapper,{
            class:'div-style'
        })

        const anchor=document.createElement("a");
        setAttribute(anchor,{
            target:'_blank',
            href:image.links.html
        })

        const img=document.createElement('img');
        setAttribute(img,{
            src:image.urls.regular,
            alt: image.alt_discription,
            title:image.alt_discription,
            class:'img-style'
        })
        
        //Put The Anchor Tag To The Div Which Is The Image Wrapper
        imageWrapper.appendChild(anchor);
        
        // Put The Image To Anchor
        anchor.appendChild(img);

        // Put The Whole Wrapper In The Image Container
        imageContainer.appendChild(imageWrapper);
    })
}

function setAttribute(element,attributes){
    for(const key in attributes)
    {
        element.setAttribute(key,attributes[key]);
    }
}