<?php

///////////// CONNEXION.PHP //
require "connexion.php";
//////////////////////////////

function insert_user() {
    global $mysqli;
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $age = $_POST['age'];
    $mail = $_POST['mail'];
    $mdp = $_POST['mdp'];
    mysqli_query($mysqli, "INSERT INTO utilisateurs (nom, prenom, age, mail, mdp) VALUES ('$nom', '$prenom', $age, '$mail', '$mdp')");

}

function see_an_user($mail) {
    global $mysqli;
    $requete = mysqli_query($mysqli, "SELECT * FROM utilisateurs WHERE mail = '$mail' ");
    if ($requete == false) {
        echo "Il y a eu une erreur, retapez correctement votre mail";
    }
    else {
        $infos_user = mysqli_fetch_all($requete, MYSQLI_ASSOC);
        //print_r($infos_user);/*
        $nom = $infos_user[0]["nom"];
        $prenom = $infos_user[0]["prenom"];
        echo '<script>alert("Te revoilà parmi nous '.$prenom.' '.$nom.' !")</script>';
    }
}

function ajouter(){
    require "insertion.php";
}

function verif($mail) {
    global $mysqli;
    $requete = mysqli_query($mysqli, "SELECT * FROM utilisateurs WHERE mail = '$mail' ");
    if ($requete == false) {
        return "false";
    }
    else {
        return "true";
    }
}


?>