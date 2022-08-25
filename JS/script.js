//////////////////////////////////////////////////////////////////////////
//J A V A S C R I P T  F O R  M Y  F I R S T  C O D I N G  P R O J E C T//
//////////////////////////////////////////////////////////////////////////
// PROPS TO THE TAs IN OFFICE HOURS AND RYAN FOR HELPING MY SOMETIMES CLUELESS SELF!!!!
//1. the code below is setting a variable which is sayin "URL is equal to..." and the url is my api url with my api key.
const URL = "https://api.rawg.io/api/platforms?key=e0bf16b64b704c9ca38eaac77d4a5087" 
//2. below im setting a jquery variable called $name and saying it is equal to the id of title in my html. so when i type $name it references my html.
const $name = $('#title');
//3. lines 10 - 14 are the same as the code above but the variable name is different and it is referencing different id in the html.
const $textInput = $('#textInput');
const $gamesCount = $('#gamesCount');
const $input = $( '#searchBar' )
const $poster =$('#popularGamePoster')
const $form = $('form')

//4. code below is creating a let variable called "filteredResults" whoch will be referenced in a function following.
let filteredResults
//5. on 19 this is an on click event listener that will run the handleData function on line 21
$form.on('submit',handleData)
//6. this code below is declaing the handleData function.
function handleData(event){
//7. online 23 below we are referencing the parameter from the handleData function, and we are linking it to preventDefault, which means it will prevent the page from refreshing when the submit button is clicked.   
    event.preventDefault()
//8. the code below on line 25 is setting a let variable that is equal to our (jquery const variable we set called) $input's value.
    let userInput = $input.val() 
//9. below on line 27 is our ajax call. this basically grabs the data from the url. in this case the url is our API!
    $.ajax(URL)
//10. below is a function 
    .then((data)=>{ //.then is just saying "..then run this function" (when the api is called, run this function). data is just referencing the data from the api.
        let dataResults = data.results// here we are setting a variable called dataResults which is equal to the results within the data.
        filteredResults = dataResults.filter((platform) => { //this is a function within the .then function that is called the filter method. "platform" is from the console platforms url i was given with the api. 
            return platform.name.toLowerCase().includes(userInput.toLowerCase().trim()) //return statements return the value of the function. so here we are saying return the console names from the platform api url. to lowercase()method returns the calling string value converted to lower case. the rest of the code on this line basically trims down the user input if they put extra spaces after whatever they type in.
        })



        console.log(filteredResults)// hopefully we know what console logging does at this point.
        const consoleSelect = filteredResults[filteredResults.length-1] //we created a const variable here for "filteredResults[filteredResults.length-1]" and named it consoleSelect so we dont have to type out the long crap again for the next few lines.
        $gamesCount.text(consoleSelect.games_count) // this grabs the amount of games that were released for the console selected and appends it onto the page where the #gamesCount id is in the html.
        $name.text(consoleSelect.name)// this grabs the name of the console selected and appends it onto the page where the #title id is in the html.
        document.getElementById("popularGamePoster").src = consoleSelect.image_background //we are setting the image src here which places it into the empty img src from the html.
        return filteredResults //this returns the filtered results
    })
}
//REACHED MVP!! 