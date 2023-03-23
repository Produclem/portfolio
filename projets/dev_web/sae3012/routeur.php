<?php

require 'controller.php';

// GESTION URL /////////////////////////////////////////////////////

$chemin_de_ce_fichier = $_SERVER['HTTP_HOST']; // toute l'adresse
$urlactuel = $_SERVER["REQUEST_URI"]; // soit localhost soit 
$url_sans_parametre = parse_url($urlactuel, PHP_URL_PATH);

parse_url($chemin_de_ce_fichier, PHP_URL_PATH); // toujours localhost soit adresse IP
// echo "<br>";


// si on rentre que localhost ou juste l'adresse IP on ouvre simplement index.php
if ($url_sans_parametre == '/') {
    require 'index.php';
} else
if ($url_sans_parametre == '/routeur.php') {
    // header("Location : $chemin_de_ce_fichier");
}


// echo "bonjour";
/////////////////////////////////////////////////////////////////////

$method = $_SERVER['REQUEST_METHOD'];

if ($method == "POST") {
    if ($_POST["_formu"] == "CONNEXION") {
        $mail = $_POST["mail"];
        if (verifbdd($mail) === "false"){
            echo "<script>alert('Tu n'as pas encore de compte !')</script>";
        } else
        if (verifbdd($mail) === "true"){
            voir_un_utilisateur($mail);
        }
        require 'index.php';
    } else
    if ($_POST["_formu"] == "CREATE") {
        store();
        echo "L'inscription s'est bien passée !";
        require 'index.php';
    } else
    if ($_POST["_formu"] == "AJOUTER") {
        
        echo "<div style='color: white;'>";
        require "insertion.php";
        echo "</div>";
        require 'index.php';
    }
}
