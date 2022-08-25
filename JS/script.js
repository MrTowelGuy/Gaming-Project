const URL = "https://api.rawg.io/api/platforms?key=e0bf16b64b704c9ca38eaac77d4a5087" 

const $name = $('#title');
const $textInput = $('#textInput');
const $gamesCount = $('#gamesCount');
const $input = $( '#searchBar' )
const $poster =$('#popularGamePoster')
const $form = $('form')

let filteredResults
$form.on('submit',handleData)
function handleData(event){
    event.preventDefault()
    let userInput = $input.val()
    $.ajax(URL)
    .then((data)=>{
        let dataResults = data.results
        filteredResults = dataResults.filter((platform) => {
            return platform.name.toLowerCase().includes(userInput.toLowerCase().trim()) 
        })
        console.log(filteredResults)
        const consoleSelect = filteredResults[filteredResults.length-1]
        console.log(consoleSelect.games_count)
        $gamesCount.text(consoleSelect.games_count)
        $name.text(consoleSelect.name)
        document.getElementById("popularGamePoster").src = consoleSelect.image_background
        //$poster.append( `<img src="${ consoleSelect.image_background }" alt="Popular ${consoleSelect.name} Game"/>` )
        return filteredResults
        render()
    })
}