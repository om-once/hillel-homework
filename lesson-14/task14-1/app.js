'use strict';

const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const pagination = document.querySelector('.pagination');
const sliderItems = document.querySelectorAll('.slider-item');

let count = 0;
const sliderItemsCount = sliderItems.length;

function createPagination() {
	sliderItems.forEach(() => {
		const btn = document.createElement('button');
		btn.classList.add('pagination-item');
		pagination.appendChild(btn);
	});
}
createPagination();

const paginationItems = Array.from(pagination.children);

function setActiveItem(index) {
	sliderItems[count].classList.remove('active');
	paginationItems[count].classList.remove('active');

	count = index;
	sliderItems[count].classList.add('active');
	paginationItems[count].classList.add('active');
	togglePaginationBtns();
}

setActiveItem(0);

function togglePaginationBtns() {
	btnNext.classList.toggle('hidden', count === sliderItemsCount - 1);
	btnPrev.classList.toggle('hidden', count === 0);
}

btnNext.addEventListener('click', () => {
	if (count < sliderItemsCount - 1) {
		setActiveItem(count + 1);
	}
});

btnPrev.addEventListener('click', () => {
	if (count > 0) {
		setActiveItem(count - 1);
	}
});

paginationItems.forEach((item, index) => {
	item.addEventListener('click', () => setActiveItem(index));
});
