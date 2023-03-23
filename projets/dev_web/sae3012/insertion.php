<?php
$target_dir = "img_post/"; // dossier ou sont les images
$fichier_cible = $target_dir . basename($_FILES["imageupload"]["name"]); // chemin de l'image
$verif = 1; // variable de base
$imageFileType = strtolower(pathinfo($fichier_cible,PATHINFO_EXTENSION)); // recupere l'extension de l'image

// Vérification si c'est bien une image
if(isset($_POST["valider"])) {
  $check = getimagesize($_FILES["imageupload"]["tmp_name"]);
  if($check !== false) {
    $verif = 1;
  } 
  else {
    echo "Le fichier n'est pas une image.";
    $verif = 0;
  }
}

// Vérification si le fichier existe déjà
if (file_exists($fichier_cible)) {
  echo "Désolé, mais cette image existe déjà... Veuillez changer de nom. ";
  $verif = 0;
}

// Vérification de la taille de l'image
if ($_FILES["imageupload"]["size"] > 5000000) {
  echo "Désolé mais votre image est trop lourde (comme votre humour d'ailleurs).";
  $verif = 0;
}

// Permission de certaines extensions : jpg, png, jpeg, et gif.
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif" ) {
  echo "Désolé mais votre image doit être un .jpg ou .jpeg ou .png ou .gif.";
  $verif = 0;
}


// -------------------------------------------------------------------------------
// Vérification de $verif : si c'est 0 alors l'image s'est pas envoyée.
if ($verif == 0) {
    echo "Désolé mais votre image ne s'est pas bien uploadée, c'est un échec.";
}
else {
    if (move_uploaded_file($_FILES["imageupload"]["tmp_name"], $fichier_cible)) {
        echo '<script>alert("Le fichier image a bien été uploadé !")</script>';

    }
    else {
        echo "Désolé mais votre image ne s'est pas bien uploadée, c'est un échec.";
    }
}
// -------------------------------------------------------------------------------

/*
$images = glob("img_post/*.{jpg,JPG,jpeg,JPEG,png,PNG,gif}", GLOB_BRACE);
echo "<div class='imgs'>";
foreach ($images as $img) {
    echo "<div><img src='$img' alt=''></div>";
}
echo "</div>";*/


?>