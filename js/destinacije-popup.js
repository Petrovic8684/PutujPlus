var tekstZahvale = document.querySelector(".tekstZahvale");
var slajder = document.querySelector(".slider");
var tekstOsobe = document.querySelector(".tekstOsobe");

function zahvaliSe() {
  tekstZahvale.innerHTML =
    "Vaša prijava je evidentirana. Hvala na ukazanom poverenju!";
}

function resetujTekstZahvale() {
  tekstZahvale.innerHTML = "";
}

function prikaziOsobe() {
  tekstOsobe.innerHTML = slajder.value;
}

$(".open-popup-link").magnificPopup({
  type: "inline",
  midClick: true,
  closeOnBgClick: false,
  fixedContentPos: true,
  callbacks: {
    open: function () {
      resetujTekstZahvale();
    },
  },
});
