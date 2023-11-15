var forma = document.querySelector("form");

var imeiprezime = document.querySelector("#imeiprezime");
var email = document.querySelector("#email");
var poruka = document.querySelector("#poruka");

var muski = document.querySelector("#muski");
var zenski = document.querySelector("#zenski");

let sablonImenaIPrezimena = /[A-Za-z]+\s[A-Za-z]+/i;

forma.addEventListener("submit", (e) => {
  e.preventDefault();

  // Provera validnosti polja imeiprezime
  if (!sablonImenaIPrezimena.test(imeiprezime.value)) {
    alert("Ime i prezime moraju biti u formatu IME(razmak)PREZIME!");
    return;
  }

  // Provera validnosti polja poruka
  if (poruka.value.length < 20) {
    alert("Poruka mora imati minimum 20 karaktera!");
    return;
  }

  var pol = muski.checked ? "Muški" : "Ženski";

  // Ispis uspesno popunjene forme
  alert(
    "Vaša poruka je zabeležena i čeka obradu naših administratora. Uneli ste sledeće podatke:\n\n" +
      "Ime i prezime: " +
      imeiprezime.value +
      "\n" +
      "E-mail adresa: " +
      email.value +
      "\n" +
      "Poruka: " +
      poruka.value +
      "\n" +
      "Pol: " +
      pol
  );
});
