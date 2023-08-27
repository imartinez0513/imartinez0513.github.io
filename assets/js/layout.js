// ┬  ┌─┐┬ ┬┌─┐┬ ┬┌┬┐
// │  ├─┤└┬┘│ ││ │ │
// ┴─┘┴ ┴ ┴ └─┘└─┘ ┴
// Generate Layout.

const generateLayout = () => {
	let firstButtonsContainer = `
    <div class="buttonsContainer" id="buttons_1"></div>
  `;
	let firstListsContainer = `
    <div class="listsContainer" id="lists_1"></div>
  `;
	let secondListsContainer = `
    <div class="listsContainer" id="lists_2"></div>
  `;
 	let thirdListsContainer = `
    <div class="listsContainer" id="lists_3"></div>
  `;

	const position = 'beforeend';

	switch (CONFIG.bentoLayout) {
		case 'bento':
			linksBlockLeft.insertAdjacentHTML(position, firstButtonsContainer);
			linksBlockRight.insertAdjacentHTML(position, firstListsContainer);
			linksBlockRight.insertAdjacentHTML(position, secondListsContainer);
			linksBlockRight.insertAdjacentHTML(position, thirdListsContainer);
			linksBlock.classList.remove('reduceGap');
			linksBlock.classList.remove('removeGap');
			break;
		case 'lists':
			linksBlockLeft.insertAdjacentHTML(position, firstListsContainer);
			linksBlockRight.insertAdjacentHTML(position, secondListsContainer);
			linksBlockRight.insertAdjacentHTML(position, thirdListsContainer);
			linksBlock.classList.add('reduceGap');
			break;
		case 'buttons':
			linksBlockLeft.insertAdjacentHTML(position, firstButtonsContainer);
//			linksBlockRight.insertAdjacentHTML(position, secondButtonsContainer);
			linksBlock.classList.add('removeGap');
			break;
		default:
			break;
	}
};

generateLayout();
