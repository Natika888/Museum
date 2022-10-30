const slider = document.querySelector('.welcome__carousel');
const sliderItems = Array.from(document.querySelectorAll('.welcome__carousel-item'));
const arrowNext = document.querySelector('.slider-welcome__arrow-next');
const arrowPrev = document.querySelector('.slider-welcome__arrow-prev');
const currentNumberofSlide = document.querySelector('.counter__current');
const sliderWelcomeSquares = document.querySelector('.slider-welcome__squares');
const sliderSquares = Array.from(document.querySelectorAll('.slider-welcome__square'));

//Если убрать градиент то будет свайпер работать по клику на картинку
sliderItems.forEach(function (slide, index) {     
    if (index!==0)   slide.classList.add('hidden');    

    slide.dataset.index = index;
    sliderItems[0].setAttribute('data-active', '');    

    slide.addEventListener('click', function () {        
        slide.classList.add('hidden');
        slide.removeAttribute('data-active');

        let nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1;        

        const nextSlide = slider.querySelector(`[data-index = '${nextSlideIndex}']`);
        nextSlide.classList.remove('hidden');
        nextSlide.setAttribute('data-active', '');
    })
})



arrowNext.onclick = function () {
    showNextSlide('next'); 

}

arrowPrev.onclick = function () {    
    showNextSlide('prev');
}

function showNextSlide (direction) {
    const currentSlide = slider.querySelector('[data-active]');
    const currentSlideIndex = +currentSlide.dataset.index;
    // squares
    const currentSquare = sliderWelcomeSquares.querySelector('.active');
    currentSquare.classList.remove('active');
    // squares
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');    
    
    let nextSlideIndex;
    
    if (direction === 'next') {
        nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
        currentNumberofSlide.innerHTML = '0' + (nextSlideIndex + 1);
        sliderSquares[nextSlideIndex].classList.add('active');

    } else if (direction === 'prev') {
        nextSlideIndex = currentSlideIndex  === 0  ? sliderItems.length - 1 : currentSlideIndex - 1;
        currentNumberofSlide.innerHTML = '0' + (nextSlideIndex + 1);
        sliderSquares[nextSlideIndex].classList.add('active');
    }

    const nextSlide = slider.querySelector(`[data-index = "${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');    
}