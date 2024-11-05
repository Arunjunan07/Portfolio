let menuVisible = false;

function showHiddenMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function select(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function skilleffort(){
    var skills = document.getElementById("skills");
    var distance_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distance_skills >= 300){
        let skills = document.getElementsByClassName("progress");
        skills[0].classList.add("htmlcss");
        skills[1].classList.add("javascript");
        skills[2].classList.add("java");
        skills[3].classList.add("python");
        skills[4].classList.add("android");
        skills[5].classList.add("comunication");
        skills[6].classList.add("team");
        skills[7].classList.add("creativity");
        skills[8].classList.add("dedication");
        skills[9].classList.add("project");
    }
}


window.onscroll = function(){
    skilleffort();
} 


