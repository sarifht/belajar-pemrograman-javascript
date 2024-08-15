// Belajar Function lebih dari satu parameter
function perkalian(angkaPertama, angkaKedua) {
  hasil = angkaPertama * angkaKedua;
  console.log(`${angkaPertama}` + " x " + `${angkaKedua}` + " = " + `${hasil}`);
}

perkalian(2, 4);
perkalian(3, 5);
perkalian(6, 7);
perkalian(8, 9);

// Function dengan 3 parameter
function biodata(nama, umur, pekerjaan) {
  console.log("Nama saya adalah " + `${nama}` + ", umur saya " + `${umur}` + " tahun dan saya bekerja sebagai " + `${pekerjaan}`);
}

biodata("Joko", 20, "Presiden");
biodata("Sarif", 21, "UIUX");
