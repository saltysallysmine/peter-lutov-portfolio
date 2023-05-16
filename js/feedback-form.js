class FeedbackPopup {

  constructor() {
    this.container = document.querySelector("#feedback-form");
    this.background = this.container.querySelector(".popup-background");
    this.openingLink = document.querySelector("#feedback-opening-link"); this.isOpened = false;
    this.registerEventListeners();
  }

  openPopup() {
    this.isOpened = true;
    this.container.classList.add("popup-container--opened");
    this.background.classList.add("popup-background--opened");
  }

  closePopup() {
    this.isOpened = false;
    this.container.classList.remove("popup-container--opened");
    this.background.classList.remove("popup-background--opened");
  }

  preventAndOpenPopup(event) {
    event.preventDefault();
    this.openPopup();
  }
  
  keyboardListener(event) {
    let keyName = event.key;
    if (this.isOpened) {
      switch (keyName) {
        case "Escape":
          closePopup();
          break;
      }
    }
  }

  registerEventListeners() {
    this.openingLink.addEventListener('click', this.preventAndOpenPopup);
    document.addEventListener('keydown', this.keyboardListener);
    this.background.addEventListener('click', this.closePopup);
  }

};

let feedbackPopup = new FeedbackPopup();
