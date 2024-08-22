const tabs = document.querySelectorAll(".button");
const contents = document.querySelectorAll(".favorites__content");
const underlines = document.querySelector(".favorites__tab");
recentUnderline = `tab-1-underline`;

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    removeActiveTab();
    tab.classList.add("active");
    const activeContent = document.querySelector(`#${tab.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");

    underlines.classList.remove(recentUnderline);
    underlines.classList.add(`${tab.id}-underline`);
    recentUnderline = `${tab.id}-underline`;
  });
});

function removeActiveTab() {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
}
function removeActiveContent() {
  contents.forEach((content) => {
    content.classList.remove("active");
  });
}
