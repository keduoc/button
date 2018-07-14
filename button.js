b.addEventListener('click', function() {
    b.querySelectorAll('.circle')[0].classList.add('active')

})
b.querySelector('.circle').addEventListener('transitionend',function(){
    b.querySelectorAll('.circle')[0].classList.remove('active')
    b.blur()
})