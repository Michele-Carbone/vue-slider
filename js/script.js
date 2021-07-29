

const root = new Vue({

    el: '#root',
    data: {
        currentIndex: 0,
        images: [
            'images/image1.jpg',
            'images/image2.jpg',
            'images/image3.jpg',
            'images/image4.jpg',
        ],
    },
    methods: {
        isActive(index) {
            return this.currentIndex === index ? 'active' : '';
        },
        increaseIndex() {   //imcrementiamo le immagini
            if (this.currentIndex === this.images.length - 1) { //soluzione per far scorrere le immagini in modo continuo
                this.currentIndex = 0;
            } else {
                this.currentIndex++;
            }
            this.autoPlay();
        },
        decreaseIndex() {    //decrementiamo le immagini
            if (this.currentIndex === 0) { //soluzione per far scorrere le immagini in modo continuo
                this.currentIndex = this.images.length - 1;
            } else {
                this.currentIndex--;
            }
            this.autoPlay();
        },

        setCurrentIndex(newIndex) { //usiamo questa funzione che rendera' i pallini dinamici al click

            this.currentIndex = newIndex;

            this.autoPlay();
        },

        //crea un automatismo nel cambiare l immagine
        autoPlay() {

            clearTimeout(this.timeoutId);
            this.timeoutId = setTimeout(this.increaseIndex, 3000);

        },

        //nuovo metodo
        created() {     //viene eseguito non appena l istanza di VUE e' stata creata
            this.autoPlay();
        },
    },
});



































