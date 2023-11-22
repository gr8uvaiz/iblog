// Toggle the Content of the Blog

const content  = document.getElementById('content');
const content2 = document.getElementById('content2')
const readMore = document.getElementById('readMore');
const readMore2 = document.getElementById('readMore2');
readMore.addEventListener('click',()=>{
    content.classList.toggle("content");
    if (readMore.textContent === "Read More..") {
        readMore.textContent = "Read Less.."
    }
    else{
        readMore.textContent = "Read More.."
    }
    
})
readMore2.addEventListener('click',()=>{
    content2.classList.toggle("content");
    if (readMore2.textContent === "Read More..") {
        readMore2.textContent = "Read Less.."
    }
    else{
        readMore2.textContent = "Read More.."
    }
    
})