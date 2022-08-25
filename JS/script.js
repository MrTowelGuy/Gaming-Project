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
        console.log(filteredResults[filteredResults.length-1].games_count)
        $gamesCount.text(filteredResults[filteredResults.length-1].games_count)
        $name.text(filteredResults[filteredResults.length-1].name)
        //$poster.append( `<img src="${ filteredResults.image_background }" alt="Popular ${data.name} Game"/>` )
        //$poster.append(filteredResults[filteredResults.length-1].background_image)
        return filteredResults
        render()
    })
}