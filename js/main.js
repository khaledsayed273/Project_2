let Links = document.querySelectorAll('.nav-link')

Links.forEach((link) => {
    link.onclick = function(){
        Links.forEach((items) => {
            items.classList.remove('active')
        })
        link.classList.add('active')
    }
})