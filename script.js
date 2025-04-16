 

function scrollToTop(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}


window.addEventListener('scroll',function(){ 
    const image = document.querySelector('.hero2 img');
    let box = document.querySelector('.hero2')
    const scrollY = window.scrollY;


    const scale = 1 + scrollY / 1000;
 

    image.style.transform = `scale(${scale})`
})

 