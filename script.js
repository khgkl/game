let body = document.querySelector("body"); //тело сайта
let main_player = document.querySelector(".main_player"); //игрок на главной сцене

let main = document.querySelector(".main"); //главная локация
let school = document.querySelector(".school"); //картинка школы
let mastery = document.querySelector('.mastery');
let arena = document.querySelector('.arena');

let location2 = document.querySelector(".location2"); //локация 2
let nojniBox = document.querySelector(".nojni"); //ачивка ножны
let swordBox = document.querySelector('.sword');
let shieldBox = document.querySelector('.shield');
let checker = 0;
let location3 = document.querySelector(".location3")
let location4 = document.querySelector(".location4")



    school.onclick = function(){

    let prav = document.querySelector('.loc2_pravilno')
    let talk = document.querySelector('.loc2_talk');
    let miss = document.querySelectorAll('.loc2_variants');
    main_player.style.top = "32%";
    main_player.style.left = "70%";

    let loc2_variants_block = document.querySelector(".loc2_variants_block");

    function changeLocation2(){
        main.style.display = 'none';
        body.style.backgroundImage = "url(5.jpg)"
        body.style.backdropFilter = "blur(5px)"
        body.style.backgroundSize = "100% 100%"
        location2.style.display = 'block';
        setTimeout(showBuble, 1000);
        setTimeout(showVariants, 2000);
    }

    function showVariants(){
        loc2_variants_block.style.display = 'block';
    }
    let showBuble = function(){
        talk.style.display = 'block';
    }
    prav.onclick = function() {
        alert('great');
        main.style.display = 'block';
        location2.style.display = 'none';
        body.style.backgroundImage = 'url(8.jpg)';
        body.style.backgroundSize = 'cover';
        body.style.backdropFilter = "none"
        checker = checker + 1;
        if(checker>=1){
            nojniBox.style.display = 'block';
        }else if (checker >=2) {
            shieldBox.style.display = 'block';
        }else if (checker >=3) {
            swordBox.style.display = 'block';
        }
    }
    for(let i=2; i<miss.lenght;i++){
        miss[i].onclick = function(){
            alert('you are wrong')
        }
    }
    setTimeout(changeLocation2, 1000);
    }


    arena.onclick = function(){
    let score = 0
    let bull = document.querySelector('.bullet')
    let text1 = document.querySelector('.text1');
    let text2 = document.querySelector('.text2');
    let ml = document.querySelector('.ml')
    let ml2 = document.querySelector('.ml2')
    main_player.style.top = "15%";
    main_player.style.left = "20%";
    
    


    function changeLocation3(){
        main.style.display = 'none';
        body.style.background = "#e8ddcf"
        location3.style.display = 'block';
      
    }
    ml2.onclick = function(){
         score = score + 1;
         bull.innerHTML = score;
         text2.style.textDecoration = "line-through"
         if(score==2){
         alert('great')
        main.style.display = 'block';
        location3.style.display = 'none';
        body.style.backgroundImage = 'url(8.jpg)';
        body.style.backgroundSize = 'cover';
        }
         
    }
    
    ml.onclick = function(){
        score = score + 1;
         bull.innerHTML = score;
         text1.style.textDecoration = "line-through"
        if(score==2){
        alert('great')
        main.style.display = 'block';
        location3.style.display = 'none';
        body.style.backgroundImage = 'url(8.jpg)';
        body.style.backgroundSize = 'cover';
        }
    }

     
    setTimeout(changeLocation3, 1000);
    }
   


    mastery.onclick = function(){
    let ochki = 0
    main_player.style.top = "60%";
    main_player.style.left = "35%";
    let bullet = document.querySelector('.bull')
    let box = document.querySelector(".box");
    let kay = document.querySelector(".kay");
    let kay2 = document.querySelector(".kay2");
    
    function changeLocation4(){
        main.style.display = 'none';
        body.style.background = "#9fbfd4"
        location4.style.display = 'block';
      
    }
     kay.onclick = function(){
        ochki = ochki + 1;
         bullet.innerHTML = ochki;
        if(ochki==2){
        alert('great')
        main.style.display = 'block';
        location4.style.display = 'none';
        body.style.backgroundImage = 'url(8.jpg)';
        body.style.backgroundSize = 'cover';
        }
    }
     kay2.onclick = function(){
        ochki = ochki + 1;
         bullet.innerHTML = ochki;
        if(ochki==2){
        alert('great')
        main.style.display = 'block';
        location4.style.display = 'none';
        body.style.backgroundImage = 'url(8.jpg)';
        body.style.backgroundSize = 'cover';
        }
    }

     
    setTimeout(changeLocation4, 1000);
    }





   