    /* click sur l'icone burger menu, ca active la classe change */
    function myFunction(x) {
    x.classList.toggle("change");

    /* variable monElement = css du burgerMenu */
    var monElement = document.getElementById("burgerMenu");
    /* condition si la liste du burgerMenu est affichée on cache, sinon on affiche */
    if (monElement.style.display == "block")
        monElement.style.display="none";
    else
       monElement.style.display="block";
}
    /* fonction qui rend le burger menu en aqua color au survol */
    function functionOver(x) {
        document.getElementById("bar1").style.backgroundColor = "aqua";
        document.getElementById("bar2").style.backgroundColor = "aqua";
        document.getElementById("bar3").style.backgroundColor = "aqua";
    }
    /* fonction qui rend le burger menu en couleur d'origine hors survol */
    function functionOut(x) {
        document.getElementById("bar1").style.backgroundColor = "rgb(119, 64, 24)";
        document.getElementById("bar2").style.backgroundColor = "rgb(119, 64, 24)";
        document.getElementById("bar3").style.backgroundColor = "rgb(119, 64, 24)";
    }