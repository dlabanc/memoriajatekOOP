$(function () {
    const meret = 4; //ennyi kártyával dolgozuk
    let szuloElem = $("article"); //itt lesznek a kártyák
    let sablonElem = $(".kartya"); //ez a mintaelem, amit másolgatunk

    const kartyaTomb = []; //itt tárolom a kártya objektumokat
    const kepekTomb = []; //itt tárolom a képek elérési útját

    jatekter();

    const kivalsztottKartyak = []; //itt fogom tárolni a kiválsztott Kártyákat
    //feliratkozunk a Kartya osztályban létrehozott *kartyaKattintas* eseményre
    $(window).on("kartyaKattintas", (event) => {
        //ha blokkolva van a kattintás, akkor ne is menjünk tovább
        if (event.detail.blocked) {
            return;
        }
        console.log(event.detail); //ezért kellett visszaadni az objektumot
        kivalsztottKartyak.push(event.detail);

        //ha már van két kártya a kiválasztottKártyák között
        if (kivalsztottKartyak.length >= 2) {
            //Blokkolom az összes kártyát, azaz nem lesznek kattinthatóak
            TriggerBlocked();

            //ha egyenlő a két kártya
            if (
                kivalsztottKartyak[0].fajlnev == kivalsztottKartyak[1].fajlnev
            ) {
                //ürítsük ki a tömböt , miközben eltüntetjük a nyertes kártyákat
                while ((kivalasztottKartya = kivalsztottKartyak.pop())) {
                    kivalasztottKartya.eltuntet();
                }
                TriggerUnBlocked(); //kiváltjuk a blokkolás eseményt
            } else {
                //ha  akét kártya nem egynelő, akkor foduljanak visszaadni
                //késleltetve
                setTimeout(function () {
                    while ((kivalasztottKartya = kivalsztottKartyak.pop())) {
                        kivalasztottKartya.allapotValtozas();
                    }
                    TriggerUnBlocked(); //megszüntetjük a blokkolást
                }, 2000);
            }
        }
    });

    function TriggerBlocked() {
        window.dispatchEvent(new Event("gameBlocked"));
    }
    function TriggerUnBlocked() {
        window.dispatchEvent(new Event("gameUnBlocked"));
    }

    function jatekter() {
        for (let index = 1; index <= meret; index++) {
            kepekTomb.push("kepek/kep" + index + ".jpg");
            kepekTomb.push("kepek/kep" + index + ".jpg");
        }
        // kepekTomb vélelten sorrendű keverése, a tesztelés idejére kikommentezzük
        /*  kepekTomb.sort((a, b) => { 
        return Math.random() - 0.5;
    }); */
        kepekTomb.forEach((element) => {
            let ujElem = sablonElem.clone().appendTo(szuloElem); //új elem létrehozása
            const kartya = new Kartya(element, ujElem); //Kártya osztály példányosítása
            kartyaTomb.push(kartya);
        });

        sablonElem.remove(); //sablonelem eltávolítása
    }
});
