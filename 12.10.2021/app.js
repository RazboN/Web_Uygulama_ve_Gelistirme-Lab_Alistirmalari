const app = Vue.createApp({
    data() {
        return {
            // dersBir: 'Nesne Tabanlı Programlama',
            // dersIki: 'Web Uygulama ve Geliştirme',
            inputDeger: '',
            soyad: 'Razbonyalı',
            amaclar: {
                dersBir: 'Nesne Tabanlı Programlama',
                dersIki: 'Web Uygulama ve Geliştirme',
                calisma: 'https://tercihsiralamalari.com',
            },
        }
    },
    methods: {
        inputReset() {
            this.inputDeger = '';
        },
        dersGetir() {
            const rasgeleSayi = Math.random();
            //alert('Üretilen sayi: ' + rasgeleSayi);

            if (rasgeleSayi < 0.5) {
                return this.amaclar.dersBir;
            }
            else {
                return this.amaclar.dersIki;
            }
        },
    },
    computed: {
        tamIsim() {
            if (this.inputDeger === '') {
                return '';
            }

            return this.inputDeger + ' ' + this.soyad;
        }
    }
});

app.mount('#kullanici-dersler');