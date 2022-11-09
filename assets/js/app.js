// Declarations=================================================

const sidebarToggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const sidebarText = document.querySelectorAll(".sidebar-Text");
const sidebarHeading = document.querySelector(".sidebar-heading");
const logoTextImg = document.querySelector(".logo-text-img");
const logoName = document.querySelector(".logo-name");
const toggleRightSideCardBtn = document.querySelector(
  ".toggle-right-side-card-btn"
);

const dashboardRightContactCard = document.querySelector(
  ".dashboard-right-contact-card"
);
const dashboardRightTopCard = document.querySelector(
  ".dashboard-right-top-card"
);
const dashboardRightDefaultVisibleCards = document.querySelector(
  ".dashboard-right-default-visible-cards"
);
const notificationBox = document.querySelector(".notification-box");
const chatBox = document.querySelector(".chat-box");
const navbarMsgBox = document.querySelector(".navbar-msg-box");
const closeChatBox = document.querySelector(".close-chat-box");

// EVENTS========================================================
const sidebarAccountSettings = document.querySelector(
  ".sidebar-account-settings"
);

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("full-width");
  sidebarHeading.classList.toggle("show-sidebar-heading");
  logoTextImg.classList.toggle("commonHidden");
  sidebarAccountSettings.classList.toggle("sidebar-account-settings-hidden");
  sidebarToggle.classList.toggle("rotate-sidebar-toggle-btn");
  toggleSideBar();
  toggleLogoName();
});

const sidebarAccountLink = document.querySelector(".sidebar-account-link");
const userSettingsContainer = document.querySelector(
  ".user-settings-container"
);

sidebarAccountLink.addEventListener("click", () => {
  toggleSidebarAccount();
});

const sidebarNotifications = document.querySelector(".sidebar-notifications");
const SidebarNotificationContainer = document.querySelector(
  ".sidebar-notification-container"
);

sidebarNotifications.addEventListener("click", () => {
  toggleSidebarTotifications();
});

toggleRightSideCardBtn.addEventListener("click", () => {
  toggleRightSideCard();
  hidetoggleDashboardRightVisibleCards();
});

notificationBox.addEventListener("click", () => {
  toggleSidebarTotifications();
});

navbarMsgBox.addEventListener("click", () => {
  hideChatBox();
  // alert("Hello");
});

closeChatBox.addEventListener("click", () => {
  closeChatBoxFunction();
});
// functions================================
function toggleSideBar() {
  sidebarText.forEach((el) => {
    el.classList.toggle("hideSidebar-text");
  });
}

function toggleSidebarAccount() {
  SidebarNotificationContainer.classList.remove(
    "toggle-sidebar-notification-container"
  );

  userSettingsContainer.classList.toggle("sidebar-account");
}

function toggleSidebarTotifications() {
  userSettingsContainer.classList.remove("sidebar-account");

  SidebarNotificationContainer.classList.toggle(
    "toggle-sidebar-notification-container"
  );
}
function toggleLogoName() {
  logoName.classList.toggle("toggle-logo-name");
}

function toggleRightSideCard() {
  const changeText = "View contacts";

  if (
    toggleRightSideCardBtn.textContent
      .toLowerCase()
      .includes(changeText.toLowerCase())
  ) {
    toggleRightSideCardBtn.innerHTML = `
    <button class="toggle-right-side-card-btn">
         Back<i class='bx bx-arrow-back'></i>
    </button>`;
  } else {
    toggleRightSideCardBtn.innerHTML = `
    <button class="toggle-right-side-card-btn">
        View Contacts <i class="bx bxs-chevron-right"></i>
    </button>
    `;
  }
  dashboardRightContactCard.classList.toggle("toggle-contact-card");
}
function hidetoggleDashboardRightVisibleCards() {
  dashboardRightDefaultVisibleCards.classList.toggle(
    "toggle-dashboard-right-visible-cards"
  );
}
function hideChatBox() {
  chatBox.classList.remove("hide-chatbox");
}
function closeChatBoxFunction() {
  chatBox.classList.add("hide-chatbox");
}
