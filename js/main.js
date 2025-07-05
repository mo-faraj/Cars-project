const next = document.getElementById('slider-next')
const prev = document.getElementById('slider-prev')
const landing = document.getElementById('landing')
const bullets = document.getElementById('bullets')

const images = ['imges/ksad.jpg','imges/pexels-alexander-pöllinger-14132868.jpg','imges/pexels-david-mcelwee-13333481.jpg', ];


const updateBulletsChildren = (activeIndex) => {
    const bulletsChildren = bullets.querySelectorAll('li');
    bulletsChildren.forEach(li => li.classList.remove('active'))
    bulletsChildren[activeIndex].classList.add('active')
}

const handleNext = () => {
    const index = +landing.getAttribute('data-index');
    const newIndex = index+1 === images.length ? 0 : index+1
    landing.style.backgroundImage = `url(${images[newIndex]})`
    landing.setAttribute('data-index',newIndex);
    updateBulletsChildren(newIndex)

}

const handlePrev =() => {
    const index = +landing.getAttribute('data-index');
    const newIndex = index-1 <0 ? images.length-1 : index-1
    landing.style.backgroundImage = `url(${images[newIndex]})` 
    landing.setAttribute('data-index',newIndex);
    updateBulletsChildren(newIndex)
}

const handleBulletClick = (e) => {
    const index = +e.target.getAttribute('data-index');
    landing.style.backgroundImage = `url(${images[index]})` 
    landing.setAttribute('data-index',index);
    updateBulletsChildren(index)
}

images.forEach((image,i) => {
    const li = document.createElement('li');
    li.setAttribute('data-index', i)
    const activeIndex = +landing.getAttribute('data-index');
    if(i===activeIndex) li.classList.add('active')
    bullets.appendChild(li);
})

next.addEventListener('click', handleNext)
prev.addEventListener('click', handlePrev)
bullets.querySelectorAll('li').forEach(li=> li.addEventListener('click', handleBulletClick ))