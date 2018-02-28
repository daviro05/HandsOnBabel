export class Main {
    constructor() {
        this.vista = {
            eBtnMenuMob: document.querySelector('#menuBtn'),
            eMenuMob: document.querySelector('.menuMob ul')
        }

        this.vista.eBtnMenuMob.addEventListener('click', this.desplegarMenu.bind(this), false);
    }

    desplegarMenu() {
        if (!this.vista.eMenuMob.style.display || this.vista.eMenuMob.style.display==='none') {
            this.vista.eMenuMob.style.display = 'list-item';
        } else {
            this.vista.eMenuMob.style.display = 'none';
        }
    }

}