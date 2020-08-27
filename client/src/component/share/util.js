export function addCommaToNumber(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const $ = document.querySelector.bind(document);

export const $all = document.querySelectorAll.bind(document);

export const $id = document.getElementById.bind(document);
