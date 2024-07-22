// Contoh Switch Case Statement
let language = "Sundanese";
let greeting = null;

switch (language) {
    case "English":
        greeting = "Good Morning!";
        break;
    case "French":
        greeting = "Bonjour!";
        break;
    case "Japanese":
        greeting = "Ohayou Gozaismasu!";
        break;
    case "Sundanese":
        greeting = "Kumaha barudak? well";
        break;
    default:
        greeting = "Selamat Pagi!";
}

console.log(greeting);

/* output
Kumaha barudak? well
*/