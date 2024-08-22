// Contoh kodingan switch case
const peopleCountry = "indonesia";

switch (peopleCountry) {
  case "Malasyia":
    console.log("Halo! korang nak kemane?");
    break;

  case "Thailand":
    console.log("สวัสดีคุณต้องการไปไหน?");
    break;

  case "Indonesia":
    console.log("Halo! Mau ke mana?");
    break;

  default:
    console.log("Orang mana lu?");
    break;
}

// Contoh kodingan dari Dicoding
const day = new Date().getDay();

if (day === 0) {
  console.log("Minggu");
} else if (day === 1) {
  console.log("Senin");
} else if (day === 2) {
  console.log("Selasa");
} else if (day === 3) {
  console.log("Rabu");
} else if (day === 4) {
  console.log("Kamis");
} else if (day === 5) {
  console.log("Jumat");
} else if (day === 6) {
  console.log("Sabtu");
} else {
  console.log("Hari tidak valid");
}

// Kondisi jika break tidak ada
const buah = "Jeruk";
switch (buah) {
  case "Apel":
    console.log("Hai buah Apel");
  case "Jeruk":
    console.log("Hai buah Jeruk");
  case "Mangga":
    console.log("Hai buah Mangga");
    break;
  default:
}
