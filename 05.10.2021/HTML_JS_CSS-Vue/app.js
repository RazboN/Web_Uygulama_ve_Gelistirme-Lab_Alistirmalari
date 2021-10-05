Vue.createApp({
    data() {
        return {
            girilenDeger: '',
            notlar: []
        };
    },
    methods: {
        listeyeEkle() {
            this.notlar.push(this.girilenDeger);
            this.girilenDeger = '';
        },
        // sil(){

        // }
    },
}).mount('#app');






//var, const, let

// const buttonE = document.querySelector('button');
// const inputE = document.querySelector('input');
// const listeE = document.querySelector('ul');

// function listeyeEkle() {
//     const girilenDeger = inputE.value;
//     // const listeElamani = document.clone();
//     const listeElamani = document.createElement('li');
//     listeElamani.textContent = girilenDeger;
//     listeE.appendChild(listeElamani);

//     // girilenDeger = ''; 
//     inputE.value = '';

//     // document.getElementById("listemiz").lastChild.cloneNode(true)
// }

// buttonE.addEventListener("click", listeyeEkle);