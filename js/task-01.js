const itemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemEl.length}`);

for (const element of itemEl) {
  console.log(`Category: ${element.children[0].innerText}`);

  console.log(`Elements: ${element.children[1].children.length}`);
}
