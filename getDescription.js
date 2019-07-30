function getDescription () {
  let description = document.querySelector('[name="description"]')
    || document.querySelector('[name="Description"]')
    || document.querySelector('[property="og:description"]')
    || document.querySelector('[name="twitter:description"]')
    || '';
  description = description === '' ? '' : description.getAttribute('content');
  return description;
}

getDescription();
