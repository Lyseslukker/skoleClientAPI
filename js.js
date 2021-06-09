const url = window.location
// searchForm
const searchForm = document.querySelector("#searchForm")
const searchInput = document.querySelector("#searchForm__input")



searchForm.addEventListener("submit", searchFormSubmit)

function searchFormSubmit(e) {
    let inputSearch = searchInput.value
    e.preventDefault()
    console.log(`Submit Fired \n Trying to Fetch: ${inputSearch}`)

    fetch(`http://localhost:4500/api/animals?=${inputSearch}`)
    .then(function(temp) {
        // console.log(temp)
        return temp.json()
    })
    .then(function(data) {
        htmlBuilder(data)
    })
}


// FONTAWSOME ICONS
/* <i class="fas fa-drumstick-bite"></i>  KØD
<i class="fas fa-seedling"></i>  PLANTE
<i class="fas fa-spider"></i>  INSEKT
<i class="fas fa-sun"></i>  SOL
<i class="fas fa-moon"></i>  NAT */




function htmlBuilder(data) {

}



