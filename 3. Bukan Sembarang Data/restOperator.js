// Kodingan Rest Operator atau Rest Parameter
function myFunc(...manyMoreArgs) {
  console.log("manyMoreArgs", manyMoreArgs);
}
myFunc("one", "two", "three");

function namaKota(...kota) {
  console.log("kota", kota);
}
namaKota("Jakarta", "Bandung", "Surabaya", "Medan");

// Argument function tak terbatas
function namaHari(hariLibur, hariSeram, ...hariKerja) {
  console.log(namaHari.length);
  console.log("hariLibur", hariLibur);
  console.log("hariSeram", hariSeram);
  console.log("hariKerja", hariKerja);
}
namaHari("Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu");
namaHari("Hari ke-1", "Hari ke-2");
namaHari("Hari ke-3", "Hari ke-4");
