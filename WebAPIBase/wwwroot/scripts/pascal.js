window.onload = function () {
    console.log("window loaded")
    loadPascal(20)
}
function loadPascal(n) {
    for (var sor = 0; sor < n; sor++) {
        var sdv = document.createElement("div")
        sdv.classList.add("sor")
        document.getElementById("pascal").appendChild(sdv)
        //új div létrehozása az új sornak
        //új div osztálylistájához add hozzá a "sor"-t
        //új div-et add hozzá a "pascal" gyermekeihez
        for (var oszlop = 0; oszlop <= sor; oszlop++) {
            var odiv = document.createElement("div")
            odiv.classList.add("elem")
            odiv.innerHTML = faktoriális(sor) / (faktoriális(oszlop)*faktoriális(sor-oszlop))
            //odiv.innerHTML = `${sor}:${oszlop}`
            sdv.appendChild(odiv)
        }
    }
}
var faktoriális = function (n) {
    let er = 1;
    for (let i = 2; i <= n; i++) {
        er = er * i;
    }
    return er;
}