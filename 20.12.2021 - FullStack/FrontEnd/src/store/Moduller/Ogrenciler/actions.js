const BASE_URL = 'http://localhost:31399/api/'

export default {
    async OgrenciEkle(context, paramOgr) {

        /*alert("Store action - " + paramOgr.OGRENCINO + " " + paramOgr.ADSOYAD);
        alert(BASE_URL);*/

        /*const reqData = {
            OGRENCINO: paramOgr.OGRENCINO,
            ADSOYAD: paramOgr.ADSOYAD,
            VIZENOTU: '',
            FINALNOTU: ''
        };*/

        // alert(JSON.stringify(reqData));

        const cevap = await fetch(
            BASE_URL + "Ogrenciler",
            {
                method: "post",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(paramOgr),
            }
        );

        var cevarpVeri = await cevap.json();

        if (!cevarpVeri.ok) {
            const hata = new Error("Öğrenci kaydedilemedi'");
            throw hata;
        }

        /*get(),get(id),post(),delete(),put() */
    },
};