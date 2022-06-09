(function(){

    let offcanvasLinks = document.querySelectorAll(".offcanvas-header a")
    
    for (let link of offcanvasLinks)
    {
        link.addEventListener('click', function(){
            if (link.classList.contains('P1'))
            {
                window.location="#"
            }
            else if (link.classList.contains('P2'))
            {
                window.open("https://webd-project.netlify.app", "_blank")
            }
            else if (link.classList.contains('P3'))
            {
                window.open("https://instantcafe.fun", "_blank")
            }
            else if (link.classList.contains('P4'))
            {
                window.open("https://flask-aflokkat-app.herokuapp.com/login", "_blank")
            }
            else if (link.classList.contains('P5'))
            {
                window.location="#"
            }
            else if (link.classList.contains('P6'))
            {
                window.location="#"
            }            
        })
    }
})()

