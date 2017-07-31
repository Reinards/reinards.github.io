var clicked = true;

function load_page(){
    $('<img/>').attr('src', './img/bg-min-or.png').on('load', function() {
        $(this).remove(); // prevent memory leaks as @benweet suggested
        $(".home").css('background-image', 'url("./img/bg-min-or.png")');
    });
    
    setTimeout(function(){
        
    $(".loader-wrapper").fadeOut(500,function(){
        $(".page-wrapper").fadeIn(1500);
    });

    document.getElementById("bgm").play();
    document.getElementById("bgm").volume = 0.3;
    },1000);
}

$(document).ready(function(){

     $('<img/>').attr('src', './img/bg-min.png').on('load', function() {
        $(this).remove(); // prevent memory leaks as @benweet suggested
        load_page();
    });

    var lang = localStorage.getItem("lang");

    if(lang =="en"||lang=="lv"){
        if(lang=="en")translate("en");
        else translate("lv");
    }

    
    $(".en").click(function(){translate("en")});
    $(".lv").click(function(){translate("lv")});

    $(".bar-c").click( function() {
        if (clicked) {
            $(".bar").addClass("noAnim");
            clicked = false;
            document.getElementById("bgm").volume = 0.0;
        } else {
            $(".bar").removeClass("noAnim");
            clicked = true;
            document.getElementById("bgm").volume = 0.3;
        }
    });

});

function translate(lang){
    if(lang=="en"){
        localStorage.setItem("lang","en");

        $(".lv").removeClass("current");
        $(".en").addClass("current");

        $(".home h1").html("Reinards Jānis Saulītis<small>[Programmer, Web designer];</small>");
        
        $(".about .left-side .table .cell h2").html("About me");
        $(".about .left-side .table .cell p").html("I am a creative programmer and web designer.<br>I create website designs, websites, interactive applications and videogames.<br><br>I participate in different projects and acquire experience by learning new technologies, frameworks, algorithms and data structures.");

        $(".skills h2").html("My skills<small>All skills are not listed</small>");

        $(".projects h2").html("My projects<small>Only the published ones</small>");

        $(".projects .container .games h3").html("Games/Applications");
        $(".projects .container .websites h3").html("Websites");

        $(".contacts h2").html("Wanna say hi? :)");

    }else{
        localStorage.setItem("lang","lv");
        $(".lv").addClass("current");
        $(".en").removeClass("current");

        $(".home h1").html("Reinards Jānis Saulītis<small>[Programmētājs, Web dizaineris];</small>");
        
        $(".about .left-side .table .cell h2").html("Par mani");
        $(".about .left-side .table .cell p").html("Esmu radošs programmētajs un web dizaineris.<br>Es veidoju mājaslapu dizainus, mājaslapas, interaktīvas lietotnes un videospēles.<br><br>Veicu dažādus projektus un krāju pieredzi, apgūstot jaunas tehnoloģijas, algoritmus un datu struktūras.");

        $(".skills h2").html("Manas prasmes<small>Ne visas ir parādītas</small>");

        $(".projects h2").html("Mani projekti<small>Tikai publicētie</small>");

        $(".projects .container .games h3").html("Spēles/Lietotnes");
        $(".projects .container .websites h3").html("Mājaslapas");

        $(".contacts h2").html("Sazināsimies? :)");
    }
}
