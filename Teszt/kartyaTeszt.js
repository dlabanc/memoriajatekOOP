QUnit.module("Kartya()", function (j) {
  j.beforeEach(() => {
    while(kartyaTomb.length > 0) {
      kartyaTomb.pop();
  }
    this.jatek = new Jatek();
    kartyaTomb.forEach(element => {
      element.allapot=false;
    });
    
    // this.kartya = new Kartya("../kepek/kep1.jpg", $(".kartya").appendTo($("#qunit-fixture")));
  });

  QUnit.test(
    "Kártyára kattintáskor megváltozik- e az állapota?",
    function (assert) {
      
      kartyaTomb.forEach((element) => {
        element.kattintas();
        assert.equal(element.allapot, true,"első kattintásra megváltozik");
        element.kattintas();
        assert.equal(element.allapot, false,"második kattintásra megváltozik");
      });
    }
  );

  QUnit.test(
    "Kártyára kattintáskor megváltozik- e a blokkolt adattag?",
    function (assert) {


        kartyaTomb[0].kattintas();
        assert.equal(kartyaTomb[0].blokkolt, false);
    }
  );

  QUnit.test(
    "Kártyára kattintáskor a kivalasztottKartyak tömbbe bekerül-e a kártya?",
    function (assert) {

      kartyaTomb[0].kattintas();
      assert.equal(kivalsztottKartyak[0], kartyaTomb[0])
      
    }
  );

  QUnit.test(
    "Ha két azonos kártya kerül a tömbbe, akkor megváltozik-e a visibility értékük?",
    function (assert) {

      let kivalasztottak = []

      while (kivalsztottKartyak.length<2) {
        kartyaTomb.forEach(element => {
          kivalasztottak.push(element)
          element.kattintas()
        });
      }
      
      assert.equal(kivalasztottak[0].elem.css("visibility"),"hidden")
      assert.equal(kivalasztottak[1].elem.css("visibility"),"hidden")
      
      
    }
  );

  QUnit.test(
    "Ha  két kártyára kattintottunk, akkor az összes kártya blokkolva lesz-e?",
    function (assert) {
      

      kartyaTomb[0].kattintas();
      kartyaTomb[1].kattintas();
      
      kartyaTomb.forEach(element => {
        assert.equal(element.blokkolt,true)
      });
      
    }
  );

  QUnit.test(
    "Ha még csak egy kártyára kattintunk, akkor egyik kártya sincs blokkolva?",
    function (assert) {
      kartyaTomb[0].kattintas();
      kartyaTomb.forEach((element) => {
        assert.equal(element.blokkolt, false);
      });
    }
  );  
});
