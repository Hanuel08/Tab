const asTabs = (nodo) => {
  nodo.classList.add("asTabs-container");

  const asTabsButtonsContainer = document.createElement("div"),
    asTabschildrens = Array.from(
      document.querySelectorAll(".asTabs-container [data-tabname]")
    ),
    fragment = document.createDocumentFragment();

  asTabsButtonsContainer.classList.add("asTabs-container__buttons-container");

  asTabschildrens.forEach((el) => {
    const asTabsButtonsContainerBtn = document.createElement("button");
    asTabsButtonsContainerBtn.classList.add(
      "asTabs-container__buttons-container__btn"
    );
    asTabsButtonsContainerBtn.setAttribute(
      "id",
      el.getAttribute("data-tabname")
    );
    asTabsButtonsContainerBtn.textContent = el.getAttribute("data-tabname");
    asTabsButtonsContainer.append(asTabsButtonsContainerBtn);

    el.classList.add("asTabs-container__panel");
    fragment.append(el);
  });

  fragment.prepend(asTabsButtonsContainer);

  document.addEventListener("click", (e) => {
    if (e.target.matches(".asTabs-container__buttons-container__btn")) {
      const asTabspanels = document.querySelectorAll(
          ".asTabs-container__panel"
        ),
        asTabsbuttons = document.querySelectorAll(
          ".asTabs-container__buttons-container__btn"
        );

      Array.from(asTabspanels).forEach((el) => (el.style.display = "none"));
      Array.from(asTabsbuttons).forEach(
        (el) => (el.style.backgroundColor = "#fff")
      );

      document.querySelector(
        `[data-tabname='${e.target.getAttribute("id")}']`
      ).style.display = "flex";
      e.target.style.backgroundColor = "#eee";
    }
  });
  //console.log(fragment);
  asTabschildrens[0].style.display = "flex";
  asTabsButtonsContainer.children[0].style.backgroundColor = "#eee";
  nodo.append(fragment);
};

asTabs(document.querySelector("tab-panel"));
