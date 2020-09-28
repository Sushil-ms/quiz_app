const username=document.getElementById('username');
const saveScoreBtn=document.getElementById('saveScoreBtn');

const finalScore=document.getElementById('finalScore');
const mostRecentScore=localStorage.getItem('mostRecentScore');
finalScore.innerText=mostRecentScore;



localStorage.setItem("highScores",JSON.stringify([]));
const highScores=JSON.parse(localStorage.getItem("highScores"))||[];
console.log(highScores);

const max_high_score=5;




username.addEventListener('keyup',()=>{
    saveScoreBtn.disabled=!username.value;


    


});





saveHighScore  = e =>{
    console.log("clicked the save button ");
    e.preventDefault();

    const score={
        score:mostRecentScore,
        name:username.value
    };

    
    
    highScores.push(score);

     
    highScores.sort((a,b)=>
        b.score-a.score
    );

    highScores.splice(5);

    localStorage.setItem("highScores",JSON.stringify(highScores));




    window.location.assign("/");



}

