// object array for quizz
var Quizz = [
    {question : "Quelle est le personnage jouable dans les legends of Zelda?",value:"Link",r1:"Zelda",r2:"Link",r3:"Vaati",r4:"Ganondorf"},
    {question : "comment s'apel le royaume des principaux opus?",value:"Hyrule",r1:"Holodrum",r2:"Cocolint",r3:"Termina",r4:"Hyrule"},
    {question : "Comment s'apelle le peuple de la forêt de ocarina of time?",value:"Kokiri",r1:"Kokiri",r2:"Conkirie",r3:"pet de mojo",r4:"Korogus"},
    {question : "Quel peuple ne fais pas partis des Zelda",value:"Gillets Jaunes",r1:" Zoras",r2:"Gorons",r3:"Gillets Jaunes",r4:"Hyliens"},
    {question : "Quelle arme exite pas dans Zelda",value:"fleau",r1:"fleau",r2:"Grappin",r3:"Arc",r4:"Marteau"},
    {question : "Quelle est la particularité de Link",value:"il ne s'est pas parler",r1:"il sert a rien",r2:"il est habillé en vert",r3:"il a des oreilles hyliennes",r4:"il ne s'est pas parler"},
    {question : "Comment s'appel le cheval de Link ",value:"Epona",r1:"Epona",r2:"Zelda",r3:"igor",r4:"Ganondorf"},
    {question : "A quelle autre univer de nintendo fait réferrence certain Easters eggs de  zelda",value:"Super Mario",r1:"Metroid",r2:"Super Mario",r3:"Kirby",r4:"F-zero"},
    {question : "Quel personnage n'est pas un énemi de Link ",value:"Impa",r1:"Ganon",r2:"Vaati",r3:"Impa",r4:"ghirahim"},
    {question : "quelle animal vous attaque si vous vous acharné dessus",value:"poule",r1:"cheval",r2:"poule",r3:"chien",r4:"chat"},
];

//variable for  push user answers
var Utilisateur=[];

// variable for score
var score=0;
// variable fo browse the object array
var index=0;
// variables for count the number of click
var click =0;

//display question and choises answers
$('#question').html(Quizz[0].question);
$('#rep1').html(Quizz[0].r1);
$('#rep2').html(Quizz[0].r2);
$('#rep3').html(Quizz[0].r3);
$('#rep4').html(Quizz[0].r4);

//loop for browse the click on the answers
for(let j=1;j<=4;j++){
$("#rep"+j).click(function () {

    // push the choice user int the array "Utilisteur"
Utilisateur.push($("#rep"+j).html());

console.log("Q[i] : " + Quizz[index].value);
    console.log("U[i] : " +$("#rep"+(j)).html());

     //compare the value of object array to the user answer
    if( Quizz[index].value === $("#rep"+j).html()){
        //increase the score
        score++;
        console.log(score);

    }else{

        console.log(score);
    }
    //increase the click
    click++;
    index++;

    //condition for block the click if "click" more the 9
    if(click >9){
        //show the scoreans hide the game
        $("#quizz").hide();
        $("#score").show();
        $("#scoreDiv").html("Score: "+score+"/10");
        for(let i=0;i<Quizz.length;i++){
            $("#repB"+i).html("<t2>$</t2> reponse exacte: "+Quizz[i].value+" <t2>$</t2>");
            $("#rep-user"+i).html("<t1>*</t1> vous avez repondu:" +Utilisateur[i]+" <t1>*</t1>");
            $("#repB"+i).css({marginBottom: 10+"px"})
        }
        }else{
            $("#quizz").show();
            $("#score").hide();
    }
    // display the different question whith Fade effect
    $('#question').html(Quizz[index].question);
    $('#quizz').hide();
    $('#quizz').fadeIn(1000);
    $('#rep1').html(Quizz[index].r1);
    $('#rep2').html(Quizz[index].r2);
    $('#rep3').html(Quizz[index].r3);
    $('#rep4').html(Quizz[index].r4);
});
}


