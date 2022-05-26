// let accordionTitle = document.querySelector(
//   '#elementor-tab-title-2191 .elementor-accordion-title'
// );
// const allTopNav = document.querySelectorAll('[data-id]');

// accordionTitle.innerText = allTopNav[0].lastElementChild.innerText;

let allInfo = [
  ...document.querySelector(
    '.elementor-element-e137192 .elementor-element-populated'
  ).children,
];

allInfo.forEach((info) => {
  info.classList.toggle(
    'd-none',
    info !== info.parentElement.firstElementChild
  );
});

const selectInput = document.querySelector('.custom-select').children[0];

// select selected option from select input
selectInput.addEventListener('change', (e) => {
  const selectedOption = e.target.options[e.target.selectedIndex].dataset.id;

  allInfo.forEach((info) => {
    if (info.id === `topnavinfo${Number(selectedOption)}`) {
      info.classList.remove('d-none');
    } else {
      info.classList.add('d-none');
    }
  });
});
