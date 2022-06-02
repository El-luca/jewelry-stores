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
    fetch("").then(function (response){
        return response.json()
    }).then(function(json){
        constructInformativesTop(json)
    })
}

function constructMenuDesktop(json)

function requestMenuDesktop(){
    fetch("../../src/mocks/MENU.json").then(function (response){
        return response.json();
    }).then(function (json){
        constructMenuDesktop(json)
    })
}

informativesTop()
requestMenuDesktop()