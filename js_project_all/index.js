window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('is-active')
    })

    document.querySelectorAll ('.text').forEach(function (el){
        el.addEventListener('click', function(event) {
        console.log(event)
        event.target.classList.toggle('alert')
        })
    })
})