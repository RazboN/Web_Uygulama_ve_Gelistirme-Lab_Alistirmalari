const app = Vue.createApp({
    data() {
        return {
            arkadaslar: [
                {
                    id: 1,
                    ad: "Cem",
                    soyad: "Cantekin",
                    telefon: "053438874560",
                    eposta: "cem@gmail.com"
                },
                {
                    id: 2,
                    ad: "Berkay",
                    soyad: "Yılmaz",
                    telefon: "053438874562",
                    eposta: "berkay@gmail.com"
                }
            ]
        }
    }
});

//kebab-case
//arkadasAdi camel case
app.component('arkadas-bilgi', {
    template: `
        <li>
            <h2>{{ tamIsim }}</h2>
            <button v-on:click="DetayDegistir()">
                Detayları {{detaylarGizliMi ? 'Göster' : 'Gizle'}}
            </button>
            <ul v-if="!detaylarGizliMi">
                <li><strong>Telefon #: </strong> {{arkadas.telefon}} </li>
                <li><strong>Eposta: </strong>{{arkadas.eposta}}</li>
            </ul>
        </li>
    `, //alt gr + virgül
    data() {
        return {
            detaylarGizliMi: true,
            arkadas: {
                id: 1,
                ad: "Umut",
                soyad: "Çelik",
                telefon: "053438874565",
                eposta: "umut@gmail.com"
            }
        }
    },
    methods:{
        DetayDegistir(){
            console.log("detay değiştir");
            this.detaylarGizliMi = !this.detaylarGizliMi;
        }
    },
    computed: {
        tamIsim() {
            return this.arkadas.ad + " " + this.arkadas.soyad;
        }
    }
});

app.mount('#arkadas-listesi');