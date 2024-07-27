const visitsCountMap = new Map(); // Menyimpan daftar user

function countUser(user){
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}

let jonas = {nama: "Jonas"};
countUser(jonas); // Menambahkan user "Jonas"

jonas = null; // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu gerbage collector bekerja
setTimeout(function() {
    console.log(visitsCountMap);
}, 10000)
/* output
Map(1) { { name: 'Jonas' } => 1 }
*/

/*
setTimeout merupakan fungsi yang digunakan 
untuk menunda eksekusi kode yang ada di dalamnya 
hingga jangka waktu yang ditetapkan.
*/