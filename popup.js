import { appHtml } from './viewApp.js';
import { loginHtml } from './viewLogin.js';

let title = '';
let tabURL = '';
const basicUrl = 'http://127.0.0.1:4000';
// TODO: check if user is loged in
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDNhYjg3MmYwMWExMjE1MGQwNjc0ZWUiLCJlbWFpbCI6Im1hcmNvQG1haWwuY29tIiwiaWF0IjoxNTY0MTU3MjI5LCJleHAiOjE1NjQzMzAwMjl9.tuR1QHmqXwLLYhovrUVsxIcfcD6-kdLDeYN-bY59bi8';

document.body.innerHTML = token ? appHtml : loginHtml;

if (token) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    tabURL = tabs[0].url;
    title = tabs[0].title;
    const titleHtml = `<h1>${title}</h1>`;
    document.querySelector('.title-container').insertAdjacentHTML('afterbegin', titleHtml);
  });
  
  document.getElementById('app-form').addEventListener('submit', submitNewLink);
  
  function submitNewLink (e) {
    e.preventDefault();
    const url = basicUrl + '/users/links';
    const tagsStr = document.querySelector('[name="tags"]').value.replace(/\s/g,'');
    const tags = tagsStr.split(',');
  
    const data = { title, url: tabURL, tags };
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => console.log(data));
  }
} else {
  // TODO: Login page
  console.log('TODO')
}
