<?php

require "modele.php";

function store() {
    insert_user();
}

function voir_un_utilisateur($mail) {
    see_an_user($mail);
}

function ajouterImage(){
    ajouter();
}
function verifbdd($mail){
    verif($mail);
}

?>