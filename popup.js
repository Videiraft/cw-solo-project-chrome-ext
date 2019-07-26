chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  tabURL = tabs[0].url;
  const title = `<h1>${tabs[0].title}</h1>`;
  console.log(tabURL);
  document.querySelector('.title-container').insertAdjacentHTML('afterbegin', title);
});