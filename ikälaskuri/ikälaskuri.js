function ika(e) {
    let tapahtuivirhe = false;
    e.preventDefault();
    let paiva1 = document.getElementById("paiva").value;
    let kuukausi1 = document.getElementById("kuukaus").value;
    let vuosi1 = document.getElementById("vuosi").value;
    

if(vuosi1 == ""){
    tapahtuivirhe = true;
    document.getElementById("virhe1").innerHTML = `ei voi olla tyhjä`;
}
else{
    document.getElementById("virhe1").innerHTML = ``;
}
if(kuukausi1 == ""){
    tapahtuivirhe = true;
    document.getElementById("virhe2").innerHTML = `ei voi olla tyhjä`;
}
else{
    document.getElementById("virhe2").innerHTML = ``;
}
if(paiva1 == ""){
    tapahtuivirhe = true;
    document.getElementById("virhe3").innerHTML = `ei voi olla tyhjä`;
}
else{
    document.getElementById("virhe3").innerHTML = ``;
}
//vuosi on tyhjä
//jos vuosi on tyhjä muuta tapahtui virhe arvoksi : True
//kuukausi on tyhjä
//päivä on tyhjä
if(tapahtuivirhe == true){
    return;
}

//päivän pitäisi olla numero väliltä 1-31,
//kuukauden pitäisi olla numero väliltä 1-12,
// vuoden pitää olla numero ja se pitää olla menneisyydessä
    if(isNaN(vuosi1)|| vuosi1 > new Date().getFullYear() ){
        document.getElementById("virhe1").innerHTML = `virheellinen luku1`;
        console.log("virhe1")
        tapahtuivirhe =  true;
    }
    else{
        document.getElementById("virhe1").innerHTML = ``;
    }

    if(isNaN(kuukausi1)||kuukausi1 < 0 || kuukausi1 > 12){
        document.getElementById("virhe2").innerHTML = `virheellinen luku2`;
        console.log("virhe2")
        tapahtuivirhe =  true;
    }
    else{
        document.getElementById("virhe2").innerHTML = ``;
    }
    if(isNaN(paiva1)||paiva1 <0 || paiva1 > 31){
        document.getElementById("virhe3").innerHTML = `virheellinen luku3`;
        console.log("virhe3")
        tapahtuivirhe =  true;
    }
    else{
        document.getElementById("virhe3").innerHTML = ``;
    }
    if(tapahtuivirhe == true){
        return;
    }


    let paiva = new Date();
    let paiva2 = paiva.getDate();
    let kuukausi2 = 1 + paiva.getMonth();
    let vuosi2 = paiva.getFullYear();
    let kuukausi = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    
    if (paiva1 > paiva2) {
        paiva2 = paiva2 + kuukausi[kuukausi2 - 1];
        kuukausi2 = kuukausi2 - 1;
    }
    console.log("lol");
    if (kuukausi1 > kuukausi2) {
        kuukausi2 = kuukausi2 + 12;
        vuosi2 = vuosi2 - 1;
    }
    
    let paivaero = paiva2 - paiva1;
    let kuukausiero = kuukausi2 - kuukausi1;
    let vuosi = vuosi2 - vuosi1;
    document.getElementById("vvastaus").innerHTML = `${vuosi} Years`; //vuosi
    document.getElementById("kvastaus").innerHTML = `${kuukausiero} Months`;
    document.getElementById("dvastaus").innerHTML = `${paivaero} Days`;

}
document.getElementById("nappi").addEventListener("click", ika);
