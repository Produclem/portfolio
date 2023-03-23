
const menu_projets = document.querySelector(".menu_projets");
const menu_projets_select = document.querySelector("#menu_projets_select");
const Li = menu_projets.querySelectorAll("li");
const projets = document.querySelector(".projets");

// Quand une nouvelle <option> est selectionnée
menu_projets_select.addEventListener('change', function() {
    var index2 = menu_projets_select.selectedIndex + 1;
    console.log("L'index est : " + index2);

    if (index2 == 1) {
        projets.querySelector(".images_dev_mobile").style.display = 'none';
        projets.querySelector(".images_design_mobile").style.display = 'none';
        projets.querySelector(".images_audiovisuel_mobile").style.display = 'none';
        projets.querySelector(".images_tout_mobile").style.display = 'flex';
    }else
    if (index2 == 2) {
        projets.querySelector(".images_dev_mobile").style.display = 'flex';
        projets.querySelector(".images_design_mobile").style.display = 'none';
        projets.querySelector(".images_audiovisuel_mobile").style.display = 'none';
        projets.querySelector(".images_tout_mobile").style.display = 'none';
    }else
    if (index2 == 3) {
        projets.querySelector(".images_dev_mobile").style.display = 'none';
        projets.querySelector(".images_design_mobile").style.display = 'none';
        projets.querySelector(".images_audiovisuel_mobile").style.display = 'flex';
        projets.querySelector(".images_tout_mobile").style.display = 'none';
    }else
    if (index2 == 4) {
        projets.querySelector(".images_dev_mobile").style.display = 'none';
        projets.querySelector(".images_design_mobile").style.display = 'flex';
        projets.querySelector(".images_audiovisuel_mobile").style.display = 'none';
        projets.querySelector(".images_tout_mobile").style.display = 'none';
    }
  });

Li.forEach((li, index) => {
    li.addEventListener("click", e => {
        e.preventDefault();
        menu_projets.querySelector(".navActive").classList.remove("navActive");
        li.classList.add("navActive");
        console.log(index+1);
        // let width_indic = 
        if (index+1 == 1) {
            menu_projets.querySelector(".indicator").style.left = '32px';
            menu_projets.querySelector(".indicator").style.width = '100px';
            projets.querySelector(".images_dev").style.display = 'none';
            projets.querySelector(".images_design").style.display = 'none';
            projets.querySelector(".images_audiovisuel").style.display = 'none';
            projets.querySelector(".images_tout").style.display = 'flex';
        }else
        if (index+1 == 2) {
            menu_projets.querySelector(".indicator").style.left = '153px';
            menu_projets.querySelector(".indicator").style.width = '150px';
            projets.querySelector(".images_dev").style.display = 'flex';
            projets.querySelector(".images_design").style.display = 'none';
            projets.querySelector(".images_audiovisuel").style.display = 'none';
            projets.querySelector(".images_tout").style.display = 'none';
        }else
        if (index+1 == 3) {
            menu_projets.querySelector(".indicator").style.left = '322px';
            menu_projets.querySelector(".indicator").style.width = '200px';
            projets.querySelector(".images_dev").style.display = 'none';
            projets.querySelector(".images_design").style.display = 'none';
            projets.querySelector(".images_audiovisuel").style.display = 'flex';
            projets.querySelector(".images_tout").style.display = 'none';
        }else
        if (index+1 == 4) {
            menu_projets.querySelector(".indicator").style.left = '542px';
            menu_projets.querySelector(".indicator").style.width = '130px';
            projets.querySelector(".images_dev").style.display = 'none';
            projets.querySelector(".images_design").style.display = 'flex';
            projets.querySelector(".images_audiovisuel").style.display = 'none';
            projets.querySelector(".images_tout").style.display = 'none';
        }
    });
});

