const app = Vue.createApp({
    data() {
        return {
            kutuAsecildiMi: false,
            kutuBsecildiMi: false,
            kutuCsecildiMi: false,
            sayac: 0,
        }
    },
    watch: {
        sayac(deger) {
            if (deger > 10) {
                setTimeout(() => {
                    this.sayac = 0;
                }, 1000);
            }
        }
    },
    methods: {
        KutuSec(kutu) {
            if (kutu === 'a') {
                //toggle işlemi
                this.kutuAsecildiMi = !this.kutuAsecildiMi;
            }
            else if (kutu === 'b') {
                this.kutuBsecildiMi = !this.kutuBsecildiMi;
            }
            else if (kutu === 'c') {
                this.kutuCsecildiMi = !this.kutuCsecildiMi;
            }
        },
        SayacArttir(arttirim) {
            this.sayac += arttirim;
            // this.sayac = this.sayac + 1;
        },
    },
    computed: {
        kutuAcss() {
            return { active: this.kutuAsecildiMi };
        }
    }
});

app.mount('#dyn-stil');