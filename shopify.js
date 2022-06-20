const changeStyle = (item) => {
  item.style =
    'background-image: none !important; background-color: #ffe000 !important';

  const span = document.createElement('span');
  span.innerText = item.getAttribute('data-value');
  span.style =
    'background-color: #ffe000 !important; color: #000 !important; font-size: 16px; font-weight: bold;';
  item.appendChild(span);
};

document
  .querySelector('.tt-product-swatches-container')
  .querySelector('.tt-options-swatch')
  .querySelectorAll('li a')
  .forEach(function (linkItem) {
    changeStyle(linkItem);
  });

[
  ...document
    .querySelector('.tt-product-swatches-container')
    .querySelector('.tt-options-swatch').children,
].forEach(function (item) {
  item.addEventListener('click', function () {
    changeStyle(item);
  });
});
