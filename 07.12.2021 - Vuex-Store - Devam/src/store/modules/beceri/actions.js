const BASE_URL = "https://vue-deneme-11-11-default-rtdb.europe-west1.firebasedatabase.app/beceriler";

export default {
    async becerileriAl(context) {
        const cevap = await fetch(
            BASE_URL + ".json"
        );

        const cevapVeriler = await cevap.json();
        const responseBeceriler = [];

        if (!cevap.ok) {
            const error = new Error("Kaynağa ulaşılamadı!");
            throw error;
        } else {
            for (const key in cevapVeriler) {
                const beceriObj = {
                    teknoloji: cevapVeriler[key].teknoloji,
                    seviye: cevapVeriler[key].seviye,
                };

                responseBeceriler.push(beceriObj);
            }
        }
        context.commit('becerileriDepola', responseBeceriler);
    },
    async beceriEkle(context, dataBeceri) {
        const cevap = await fetch(
            BASE_URL + ".json",
            {
                method: "POST",
                body: JSON.stringify(dataBeceri),
            }
        );

        const cevapVeri = await cevap.json();

        if (!cevapVeri.ok) {
            console.error("Beceri kaydedilemedi!");
            const error = new Error("Beceri kaydedilemedi!");
            throw error;
        }
    }
};