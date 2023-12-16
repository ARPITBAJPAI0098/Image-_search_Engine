
const apii="ztHi98TFdfBIfBH2ToaWRdWRGDc0aHN1g1vlgaV4bdI"
const searchform=document.getElementById("search-form");
const searchbox=document.getElementById("search-box");
const searchresult=document.getElementById("search-more-result");
const searchshowmore=document.getElementById("show-more-button");
let keyword="";// passing the empty string
let page=1;
async function searchImg(){
    keyword=searchbox.value;//thed value entred by the user get access through it
    const response=await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${apii}&per_page=12`)
    // here query input gives the image of same input value eg office give office images
    //client id giving thed access to view the images
    const data=await response.json();
    console.log(data);
    const result=data.results;
    result.map((result)=>{//go to every result section of the result
        const image=document.createElement("img");
        image.src=result.urls.small;
        //add one link so that when user click on it it go the origin of that image
        const imagelink=document.createElement('a');
        imagelink.href=result.links.html;
        imagelink.target="_blank";// to open im age in new tab
        // now place image in a tag
        imagelink.appendChild(image);
        searchresult.appendChild(imagelink);
    })
}

searchform.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImg();
})


//show more button 
searchshowmore.addEventListener("click", ()=>
{
    page++;
    searchImg();
})