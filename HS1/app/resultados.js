(function () {
    
    function rellenaPref(){
        let prefs = []
        prefs = JSON.parse(localStorage.getItem('preferencias'));
        let text = "";
        prefs.forEach(item => {
            text += `<li>${item}</li>`;
        });
        document.querySelector('#prefRes').innerHTML = text;
    }

    document.addEventListener("DOMContentLoaded", () => {
        localStorage.getItem('nombre') ? document.querySelector('#nombreRes').innerHTML = localStorage.getItem('nombre') : null;
        localStorage.getItem('correo') ? document.querySelector('#correoRes').innerHTML = localStorage.getItem('correo') : null;
        localStorage.getItem('preferencias') ? rellenaPref() : null;
        localStorage.getItem('sugerencia') ? document.querySelector('#sugRes').innerHTML = localStorage.getItem('sugerencia') : null;
    }, false)
})()