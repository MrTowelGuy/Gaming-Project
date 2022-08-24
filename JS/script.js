const URL = "https://api.rawg.io/api/platforms?key=e0bf16b64b704c9ca38eaac77d4a5087" 

const $name = $('#title');
const $textInput = $('#textInput');
const $gamesCount = $('#gamesCount');
const $input = $( '#searchBar' )
const $poster =$('')

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
    //.then(())
    console.log(filteredResults)
    return filteredResults
    }) 
   // $name.text(filteredResults[0].name)
    //console.log(filteredResults)
}    











//         if (userInput= "PC"){
    //})
    //console.log(typeof platform)
    //const filterResults = platform.filter(name => name.name == )
    //return
    //name.includes(userInput)
    //console.log(filterResults)
    // console.log(data)
    //$gamesCount.text (data.results[0].games_count)
        //             $name.text (data.results[1].name)
//         }if (userInput= "PlayStation 5"){
//             $name.text (data.results[2].name)
//         }if (userInput= "Xbox One"){
//             $name.text (data.results[3].name)
//         }if (userInput= "PlayStation 4"){
//             $name.text (data.results[4].name)
//         }if (userInput= "Xbox Series S/X"){
//             $name.text (data.results[5].name)
//         }if (userInput= "Nintendo Switch"){
//             $name.text (data.results[6].name)
//         }if (userInput= "iOS"){
//             $name.text (data.results[7].name)
//         }if (userInput= "Android"){
//             $name.text (data.results[8].name)
//         }if (userInput= "Nintendo 3DS"){
//             $name.text (data.results[9].name)
//         }if (userInput= "Nintendo DS"){
//             $name.text (data.results[10].name)
//         }if (userInput= "Nintendo DSi"){
//             $name.text (data.results[11].name)
//         }if (userInput= "macOS"){
//             $name.text (data.results[12].name)
//         }if (userInput= "Linux"){
//             $name.text (data.results[13].name)
//         }if (userInput= "Xbox 360"){
//             $name.text (data.results[14].name)
//         }if (userInput= "Xbox"){
//             $name.text (data.results[15].name)
//         }if (userInput= "PlayStation 3"){
//             $name.text (data.results[16].name)
//         }if (userInput= "PlayStation 2"){
//             $name.text (data.results[17].name)
//         }if (userInput= "PlayStation"){
//             $name.text (data.results[18].name)
//         }if (userInput= "PS Vita"){
//             $name.text (data.results[19].name)
//         }if (userInput= "PSP"){
//             $name.text (data.results[20].name)
//         }if (userInput= "Wii U"){
//             $name.text (data.results[21].name)
//         }if (userInput= "Wii"){
//             $name.text (data.results[22].name)
//         }if (userInput= "Gamecube"){
//             $name.text (data.results[23].name)
//         }if (userInput= "Nintendo 64"){
//             $name.text (data.results[24].name)
//         }if (userInput= "Game Boy Advance"){
//             $name.text (data.results[25].name)
//         }if (userInput= "Game Boy Color"){
//             $name.text (data.results[26].name)
//         }if (userInput= "Game Boy"){
//             $name.text (data.results[27].name)
//         }if (userInput= "SNES"){
//             $name.text (data.results[28].name)
//         }if (userInput= "NES"){
//             $name.text (data.results[29].name)
//         }if (userInput= "Classic Macintosh"){
//             $name.text (data.results[30].name)
//         }if (userInput= "Apple II"){
//             $name.text (data.results[31].name)
//         }if (userInput= "Commodore / Amiga"){
//             $name.text (data.results[32].name)
//         }if (userInput= "Atari"){
//             $name.text (data.results[33].name)
//         }if (userInput= "PC"){
//             $name.text (data.results[34].name)
//         }if (userInput= "PC"){
//             $name.text (data.results[35].name)
//         }if (userInput= "PC"){
//             $name.text (data.results[36].name)
//         }if (userInput= "PC"){
//             $name.text (data.results[37].name)
//         }if (userInput= "PC"){
//             $name.text (data.results[38].name)
//         }if (userInput= "PC"){
//             $name.text (data.results[39].name)
//         }if (userInput= "PC"){
//             $name.text (data.results[40].name)
//         }if (userInput= "PC"){
//             $name.text (data.results[41].name)
//         }if (userInput= "PC"){
//             $name.text (data.results[42].name)
//         }if (userInput= "PC"){
//             $name.text (data.results[43].name)
//         }if (userInput= "PC"){
//             $name.text (data.results[44].name)
//         }if (userInput= "PC"){
//             $name.text (data.results[45].name)
//         }if (userInput= "PC"){
//             $name.text (data.results[46].name)
//         }if (userInput= "PC"){
//             $name.text (data.results[47].name)
//         }if (userInput= "PC"){
//             $name.text (data.results[48].name)
//         }if (userInput= "PC"){
//             $name.text (data.results[49].name)
//         }
// });