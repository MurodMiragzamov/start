const selectEl = (selector) => document.querySelector(selector),
  createDom = (element) => document.createElement(element),
  normalizeDate = (time) => {
    const year = new Date(time).getFullYear();
    const month = String(new Date(time).getMonth() + 1).padStart(2, "0");
    const day = String(new Date(time).getDate()).padStart(2, "0");
    return day + "." + month + "." + year;
  };
