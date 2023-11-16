var forma = document.querySelector("form");

var imeiprezime = document.querySelector("#imeiprezime");
var email = document.querySelector("#email");
var poruka = document.querySelector("#poruka");

var muski = document.querySelector("#muski");
var zenski = document.querySelector("#zenski");

var sablonImenaIPrezimena = /[A-Za-z]+\s[A-Za-z]+/i;

var poljeImeIPrezime = document.querySelector(".forma form input");
var poljePoruka = document.querySelector(".forma form textarea");

var tekstUpozorenja = document.querySelector(".forma form h5");

forma.addEventListener("submit", (e) => {
  e.preventDefault();

  // Provera validnosti polja imeiprezime
  if (!sablonImenaIPrezimena.test(imeiprezime.value)) {
    tekstUpozorenja.innerHTML =
      "Ime i prezime moraju biti u formatu IME(razmak)PREZIME!";
    poljeImeIPrezime.classList.add("upozorenje");
    return;
  }
  poljeImeIPrezime.classList.remove("upozorenje");

  // Provera validnosti polja poruka
  if (poruka.value.length < 20) {
    tekstUpozorenja.innerHTML = "Poruka mora imati minimum 20 karaktera!";
    poljePoruka.classList.add("upozorenje");
    return;
  }
  poljePoruka.classList.remove("upozorenje");

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

  // Vracanje forme u prvobitno stanje
  imeiprezime.value = email.value = poruka.value = "";
  tekstUpozorenja.innerHTML = "";
});
