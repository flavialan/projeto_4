document.addEventListener('DOMContentLoaded', function(){
    const navSection = document.querySelector('.navbar');
    const navHeight = navSection.clientHeight;

    window.addEventListener('scroll', function(){
        const actualPosition = window.scrollY;
        console.log(actualPosition);


        if(actualPosition < navHeight){
            showBackgroundHeader();
        } else{
            hideBackgroundHeader();
        }
    })
})

function hideBackgroundHeader(){
    const navbar = document.querySelector('.navbar');
    navbar.classList.add('navbar--is-hidden');
}

function showBackgroundHeader(){
    const navbar = document.querySelector('.navbar');
    navbar.classList.remove('navbar--is-hidden');
}