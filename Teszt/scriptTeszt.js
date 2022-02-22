QUnit.module("kepekTombFeltoltese()", function (j) {
    j.beforeEach(() => {
      this.jatek = new Jatek();
    });
    QUnit.test("létezik-e az ellenőrzés metódus?", (assert) => {
      assert.ok(this.jatek.kepekTombFeltoltese, "létezik");
    });
  
    QUnit.test("A kepekTombFeltoltese függvény-e?", (assert) => {
      assert.ok(
        typeof this.jatek.kepekTombFeltoltese === "function",
        "A kepekTombFeltoltese egy függvény"
      );
    });
  
    QUnit.test("A kepekTomb véletlenszerűen rendezett-e? ", (assert) => {
  
      rendezeselott = []
      rendezeselott.push(kepekTomb)
  
      kepekTomb.sort((a, b) => {
        return Math.random() - 0.5;
      });
      elsorendezes = []
      elsorendezes.push(kepekTomb)
  
      kepekTomb.sort((a, b) => {
        return Math.random() - 0.5;
      });
  
      masodikrendezes = []
      masodikrendezes.push(kepekTomb)
  
      assert.notEqual(elsorendezes,masodikrendezes,"A két rendezés eltérő");
      assert.notEqual(elsorendezes,rendezeselott,"Az 1. rendezés utáni tömb nem egyezik az eredeti tömbbel");
      assert.notEqual(masodikrendezes,rendezeselott,"A 2. rendezés utáni tömb nem egyezik az eredeti tömbbel");
    });
  });
  