class TypeWriter {

    constructor(txtElement, words, wait = 3000) {

        this.txtElement = txtElement;

        this.words = words;

        this.txt = '';

        this.wordIndex = 0;

        this.wait = parseInt(wait, 10);

        this.type();

        this.isDeleting = false;

    }





    type() {

        const current = this.wordIndex % this.words.length;

        const fullTxt = this.words[current];


        if (this.isDeleting) {

            this.txt = fullTxt.substring(0, this.txt.length - 1);

        } else {

            this.txt = fullTxt.substring(0, this.txt.length + 1);

        }

        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        let typeSpeed = 300;

        const typingElement = document.querySelector('.fas');



        if (this.isDeleting) {

            typeSpeed /= 4;

        }



        if (this.isDeleting) {

            typingElement.className = "fas fa-pencil-alt erasing-animation";

        } else {

            typingElement.className = "fas fa-pencil-alt writing-animation";

        }

        if (!this.isDeleting && this.txt === fullTxt) {

            typeSpeed = this.wait;
            this.isDeleting = true;
            typingElement.className = "fas fa-pencil-alt";

        } else if (this.isDeleting && this.txt === '') {

            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 2500;



        }



        setTimeout(() => this.type(), typeSpeed)

    }

}

//Init On DOM Load

document.addEventListener('DOMContentLoaded', init);



//Init App

function init() {

    const txtElement = document.querySelector('.txt-type');

    // const words = JSON.parse(txtElement.getAttribute('data-words'));

    const words = [' Papelaria novo mundo', 'Papelaria novo mundo'];





    // const wait = txtElement.getAttribute('data-wait');

    const wait = 2500;



    new TypeWriter(txtElement, words, wait);

}