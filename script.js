let wygenerowanaLiczba = Math.floor(Math.random() * 100) + 1;
console.log("wygenerowanaLiczba: ", wygenerowanaLiczba);

// let liczbaGracza = document.getElementById("#guessing_number");
// console.log(liczbaGracza);
let wynik = document.getElementById("wynik");

function sprawdzanieZgodnosci() {
  let liczbaGracza = guessing_number.value;
  if (wygenerowanaLiczba == liczbaGracza) {
    wynik.textContent = "Gratulacje zgadłeś !!";
  } else if (liczbaGracza < wygenerowanaLiczba) {
    wynik.textContent =
      "Podana przez Ciebie liczba to  " + liczbaGracza + " jest za mała";
  } else if (liczbaGracza > wygenerowanaLiczba) {
    wynik.textContent =
      "Podana przez Ciebie liczba " + liczbaGracza + " jest za duza";
  }
 
}

document.addEventListener("click", sprawdzanieZgodnosci);
