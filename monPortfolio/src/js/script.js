(function(){
    
    // let offcanvasLinks = document.querySelectorAll("a")
    let subTitles = document.querySelectorAll('h2');
    
    for (let h2 of subTitles){

        h2.addEventListener("mouseover", function(e){
            console.log('Trouvé !')
        })
    }

    // for (let link of offcanvasLinks)
    // {
    //     link.addEventListener('click', function(){
    //         if (link.classList.contains('P1'))
    //         {
    //             window.open("https://webd-project.netlify.app", "_blank") 
    //         }
    //         else if (link.classList.contains('P2'))
    //         {
    //             window.open("https://webd-project.netlify.app", "_blank")
    //         }
    //         else if (link.classList.contains('P3'))
    //         {
    //             window.open("https://instantcafe.fun", "_blank")
    //         }
    //         else if (link.classList.contains('P4'))
    //         {
    //             window.open("https://flask-aflokkat-app.herokuapp.com/login", "_blank")
    //         }
    //         else if (link.classList.contains('P5'))
    //         {
    //             window.open("https://morpion-canvas.netlify.app", "_blank")
    //         }
    //         else if (link.classList.contains('P6'))
    //         {
    //             window.location="#"
    //         }            
    //     })
    // }
})()

