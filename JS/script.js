const URL = "https://api.rawg.io/api/platforms?key=e0bf16b64b704c9ca38eaac77d4a5087"

const $name = $('#title');
const $textInput = $('#textInput');
const $gamesCount = $('#gamesCount');



$.ajax(URL)
  .then((data)=>{
     console.log(data)
})


// $textInput.on('submit', getGameData)
// //let gameData;

// function getGameData(event){
//     event.preventDefault()
//     const userInput = $input.val();
//     if (userInput === '') return;
    
//     });
    
// }


// // function render(){
    
// // }