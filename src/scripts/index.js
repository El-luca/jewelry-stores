function constructInformativesTop(json) {
  const $wrapper = document.querySelector(".header__informatives-wrapper");
  for (completeText of json) {
    $wrapper.innerHTML += `
        <span class="header__informatives-top--text${
          completeText.firstBold ? "-strong" : ""
        }">
          ${completeText.text}
          <strong class="header__informatives-top--text${
            completeText.firstBold == false ? "-strong" : "-margin"
          }">
            ${completeText.bold}
          </strong>
        </span>`;
  }
}



function informativesTop() {
  fetch("../src/mocks/INFORMATIVES__TOP.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      constructInformativesTop(json);
    });
}

function requestMenu() {
  fetch("../../src/mocks/MENU.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const sizeWindow = window.innerWidth
      if(sizeWindow > 1024){
        constructMenuDesktop(json.menu);
      } else {
        constructMenuMobile(json.menu);
      }
    });
}

function constructMenuDesktop(json) {
  let structureMenu = "";
  const $containerMenu = document.querySelector(".header__menu");
  for (const menu of json) {
    structureMenu += `<div class="header__menu-wrapper">
        <a href="${menu.url}" class="header__menu-department script">${
      menu.name
    }</a>
        ${
          menu.children
            ? `<div class="header__menu-items ${
              menu.name === "Turmalina" ? "turmalina" : ""
            }">
        ${menu.children.map(function (child) {
          return `
            <div class="header__menu-wrapper-category">
                <a href=${child.url} class="header__menu-category">
                    ${child.name}
                </a>
                
                ${
                  child.children
                    ? `
                  <div class="header__menu-sub-category">
                    ${child.children.map(function (subchild) {
                      return `
                        <a href=${subchild.url} class="header__menu-category">
                            ${subchild.name}
                        </a>
                      `;
                    }).join("")}                    
                  </div>
                `
                    : ``
                }
            </div>
            `;
        }).join("")}
        </div>`
            : ""
        }
        </div>`;
  }

  $containerMenu.innerHTML = structureMenu;
}

function constructMenuMobile(json) {
  let structureMenu = ""
  const $containerMenu = document.querySelector(
    ".header__menu-mobile-structure"
    )

  json.map(function(menu){
    structureMenu += `
    <div class="header__menu-mobile-wrapper">
      <div class="header__menu-mobile-wrapper-department">
        <a 
          href=${menu.url}
          class="header__menu-mobile-departament header__menu-mobile-department"
        >
         ${menu.name}
       </a>
        <span class="header__menu-mobile-icon-arrow icon-menu-mobile-arrow">
          <img src="assets/arrow down white.png" class="header__menu-mobile-img-arrow" alt="imagem de uma seta para baixo" title="duas barras verticais, nas extremidades superiores estão afastadas e nas inferiores juntas, aassim formando um simbolo de 'v' na cor branca">                    
        </span>
      </div>
     </div>
    `
  })
  $containerMenu.innerHTML = structureMenu
}

informativesTop();
requestMenu();

function handleToggleMenuMobile() {
  const $menuMobile = document.querySelector(".header__menu-hamburguer");
  const $esctrutureMenuMobile = document.querySelector(".header__menu-mobile");
  const $closeMenuImgX = document.querySelector(".close-menu");
  const $shadowCloseMenuMobile = document.querySelector(
    ".header__menu-mobile-shadow"
  );

  $menuMobile.addEventListener("click", function () {
    $esctrutureMenuMobile.classList.add("active");
  });
  $closeMenuImgX.addEventListener("click", function () {
    $esctrutureMenuMobile.classList.remove("active");
  });
  $shadowCloseMenuMobile.addEventListener("click", function () {
    $esctrutureMenuMobile.classList.remove("active");
  });
}

handleToggleMenuMobile();

function handleMenuMobileCategory() {
  const $iconShowDepartament = document.querySelector(
    ".icon-menu-mobile-arrow"
  );
  const $menuCategory = document.querySelector(".header__menu-mobile-itens");
  $iconShowDepartament.addEventListener("click", function () {
    $menuCategory.classList.toggle("active");
  });
}

handleMenuMobileCategory();

function rotateArrow() {
  const $iconShowDepartament = document.querySelector(
    ".icon-menu-mobile-arrow"
  );
  $iconShowDepartament.addEventListener("click", function () {
    $iconShowDepartament.classList.toggle("active");
  });
}

rotateArrow();
