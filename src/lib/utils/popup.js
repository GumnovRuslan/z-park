export function closeBeyond(e) {
	const elSize = e.target.getBoundingClientRect();
	if (
		e.clientX < elSize.left ||
		e.clientX > elSize.right ||
		e.clientY < elSize.top ||
		e.clientY > elSize.bottom
	)
		e.target.close();
}
export function openPopup() {
	window.popupBooking.showModal();
	window.body.style.overflow = 'hidden';
}
export function closePopup() {
	window.popupBooking.close();
	window.body.style.overflow = 'visible';
}
