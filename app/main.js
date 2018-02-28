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
            ePrefForm: document.querySelectorAll('#formSug input[type="checkbox"]'),
            oPrefForm: [],
        }
        this.vista.eBtnMenuMob.addEventListener('click', this.desplegarMenu.bind(this), false);
        this.vista.eBtnSug ? this.vista.eBtnSug.addEventListener('click', this.desplegarFormSug.bind(this), false) : null;
        this.vista.eFormSug ? this.vista.eFormSug.addEventListener('submit', this.manejarForm.bind(this), false) : null;
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
        } else {
            this.vista.eFormSugC.style.display = 'none';
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
        document.location.href="resultados.html";
    }

}