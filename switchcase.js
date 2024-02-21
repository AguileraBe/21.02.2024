const sortear = () => {
var nomes = ["Twilight Sparkle","Fluttershy","Pinkie Pie","Applejack","Rarity","Rainbow Dash","Spike","Princesa Celestia","Princesa Luna"];

    let h1Nome = document.getElementById("nome");

    let achouNumero = false;
    let numeroSorteado;

    while (achouNumero == false) {
        numeroSorteado = Math.floor(Math.random() * 100);
        if (numeroSorteado < nomes.length) {
            achouNumero = true;
        }
    }

    switch (numeroSorteado) {
        case 0:
            h1Nome.InnerText = nomes [numeroSorteado];
            break;
        case 1:
            h1Nome.InnerText = nomes [numeroSorteado];
            break;
        case 2:
            h1Nome.InnerText = nomes [numeroSorteado];
            break;
        case 3:
            h1Nome.InnerText = nomes [numeroSorteado];
            break;
        case 4:
            h1Nome.InnerText = nomes [numeroSorteado];
            break;
        case 5:
            h1Nome.InnerText = nomes [numeroSorteado];
            break;
        case 6:
            h1Nome.InnerText = nomes [numeroSorteado];
            break;
        case 7:
            h1Nome.InnerText = nomes [numeroSorteado];
            break;
        case 8:
            h1Nome.InnerText = nomes [numeroSorteado];
            break;
    }
    h1Nome.innerText +="O numero sorteado foi:" +numeroSorteado;
}