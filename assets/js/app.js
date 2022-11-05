const sidebarToggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const linkItem = document.querySelector(".link-item");
const sidebarHeading = document.querySelector(".sidebar-heading");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("full-width");
  sidebarHeading.classList.toggle("show-sidebar-heading");
  //   linkItem.style.width = "fit-content";
});

const sidebarAccountLink = document.querySelector(".sidebar-account-link");
const userSettingsContainer = document.querySelector(
  ".user-settings-container"
);

sidebarAccountLink.addEventListener("click", () => {
  userSettingsContainer.classList.toggle("sidebar-account");
});
