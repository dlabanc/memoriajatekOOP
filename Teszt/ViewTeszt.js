QUnit.module("Felület", function (j) {
  j.beforeEach(() => {
    this.kepekTomb = ["kepek/kep1.jpg","kepek/kep2.jpg"]
    this.szuloElem = $("#qunit-fixture")
    this.sablonElem = $(".kartya")
    this.jatekter = new Jatekter(this.szuloElem,this.sablonElem,this.kepekTomb);
  });

  QUnit.test("Létrejön-e a megfelelő számú Kártya elem?", (assert) => {
    
    assert.equal($(".kartya").length,this.kepekTomb.length)

  });

  QUnit.test("Létrejön-e az IMG tag az elemben?", (assert) => {
    
    assert.ok($(".kartya").attr("img"))

  });

  QUnit.test("Megfelelő-lesz-e az elem háttérképe?", (assert) => {
    
    kartyaTomb.forEach(element => {
        assert.equal(element.hatter,"../kepek/hatter.jpg")
    });

  });

  QUnit.test("A létrejövő Kártya objektumok a allapot értéke false?", (assert) => {
    
    kartyaTomb.forEach(element => {
        assert.equal(element.allapot,false)
    });

  });

  QUnit.test("A létrejövő Kártya objektumok blokkolt értéke false?", (assert) => {
    
    kartyaTomb.forEach(element => {
        assert.equal(element.blokkolt,false)
    });

  });


QUnit.test("Az objektum állapot értéke TRUE lesz", (assert) => {

    kartyaTomb[0].allapotValtozas();
    assert.equal(kartyaTomb[0].allapot,true)

  });

  QUnit.test("A képe leme attribútum a fájlnév lesz.", (assert) => {

    kartyaTomb[0].allapotValtozas();
    console.log(kartyaTomb[0])
    assert.equal(kartyaTomb[0].kepElem.attr("src"),kartyaTomb[0].fajlnev)

  });
});


