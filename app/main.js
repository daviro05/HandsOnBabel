export class Main {
    constructor() {
        this.vista = {
            eBtnMenuMob: document.querySelector('#menuBtn'),
            eMenuMob: document.querySelector('.menuMob ul'),
            eBtnSug: document.querySelector('#btnSug'),
            eFormSug: document.querySelector('#formSug'),
            eFormSugC: document.querySelector('#formSugC'),
            eNameForm: document.querySelector('#nombre'),
            eMailForm: document.querySelector('#correo'),
            eSugForm: document.querySelector('#sugerencia'),
            ePrefForm: document.querySelectorAll('#formSug input[type="checkbox"]'),
            eBtnPanel: document.querySelector(".aside_visible"),
            ePanel:  document.querySelector(".aside_oculto"),
            eCaras: document.querySelector("#enlace_caras"),
            eParejas: document.querySelector("#enlace_parejas"),
            eTrivial: document.querySelector("#enlace_trivial"),
            oPrefForm: [],
        }
        this.vista.eBtnMenuMob.addEventListener('click', this.desplegarMenu.bind(this), false);
        this.vista.eBtnSug ? this.vista.eBtnSug.addEventListener('click', this.desplegarFormSug.bind(this), false) : null;
        this.vista.eFormSug ? this.vista.eFormSug.addEventListener('submit', this.manejarForm.bind(this), false) : null;
        this.vista.eBtnPanel ? this.vista.eBtnPanel.addEventListener('click',this.desplegarPanel.bind(this),false) : null;

        this.vista.eCaras.addEventListener('click',this.ircaras.bind(this),false);
        this.vista.eParejas.addEventListener('click',this.irparejas.bind(this),false);
        this.vista.eTrivial.addEventListener('click',this.irtrivial.bind(this),false);
    }

    desplegarMenu() {
        if (!this.vista.eMenuMob.style.display || this.vista.eMenuMob.style.display==='none') {
            this.vista.eMenuMob.style.display = 'list-item';
        } else {
            this.vista.eMenuMob.style.display = 'none';
        }
    }

    desplegarFormSug() {
        if (!this.vista.eFormSugC.style.display || this.vista.eFormSugC.style.display==='none') {
            this.vista.eFormSugC.style.display = 'block';
            this.vista.eBtnSug.innerHTML=`<span class="fa fa-arrow-up"></span>Sugerencias<span class="fa fa-arrow-up"></span>`;
        } else {
            this.vista.eFormSugC.style.display = 'none';
            this.vista.eBtnSug.innerHTML=`<span class="fa fa-arrow-down"></span>Sugerencias<span class="fa fa-arrow-down"></span>`;
        }
    }

    manejarForm(oEv){
        oEv.preventDefault();
        localStorage.setItem('nombre',this.vista.eNameForm.value);
        localStorage.setItem('correo',this.vista.eMailForm.value);
        this.vista.ePrefForm.forEach(item => {
            if(item.checked){
                this.vista.oPrefForm.push(item.id);
            }
        });
        let pref = JSON.stringify(this.vista.oPrefForm);
        localStorage.setItem('preferencias', pref);
        localStorage.setItem('sugerencia', this.vista.eSugForm.value);
        document.location.href="resultados.html";
    }

    desplegarPanel(){
        if(this.vista.ePanel.style.display === "none" || this.vista.ePanel.style.display === "")
            this.vista.ePanel.style.display = "block";
        else
             this.vista.ePanel.style.display = "none";
    }

    ircaras(){document.location.href = '../paginas/caras.html';}

    irparejas(){document.location.href = '../paginas/parejas.html';}

    irtrivial(){document.location.href = '../paginas/trivial.html';}
    

}