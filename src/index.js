function constructInformativesTop(json){
    const $wrapper = document.querySelector('.header__informatives-wrapper')
    for (completeText of json){
        $wrapper.innerHTML += `
        <span class="header__informatives-top--text${completeText.firstBold ? "-strong" : ""}">
          ${completeText.text}
          <strong class="header__informatives-top--text${completeText.firstBold == false ? "-strong" : "-margin"}">
            ${completeText.bold}
          </strong>
        </span>`

    }
}
function informativesTop(){
    fetch("./mocks/INFORMATIVES_TOP.json").then(function (response){
        return response.json()
    }).then(function(json){
        constructInformativesTop(json)
    })
}

// function requestMenuDesktop(){
//     fetch("../mocks/MENU.json").then(fun)
// }

informativesTop()