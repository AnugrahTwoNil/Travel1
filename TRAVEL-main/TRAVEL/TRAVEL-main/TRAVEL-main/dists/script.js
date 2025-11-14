const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },
});

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')
if (myModal && myInput) {
  myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
  })
}

document.addEventListener('DOMContentLoaded', function () {
  const hotelModal = document.getElementById('hotelModal')
  if (!hotelModal) return

  hotelModal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget
    const name = button.getAttribute('data-hotel') || ''
    const location = button.getAttribute('data-location') || ''
    const img = button.getAttribute('data-img') || ''
    const bookUrl = button.getAttribute('data-book-url') || '#'

    const modalTitle = hotelModal.querySelector('#hotelModalLabel')
    const modalName = hotelModal.querySelector('#hotelModalName')
    const modalLocation = hotelModal.querySelector('#hotelModalLocation')
    const modalImg = hotelModal.querySelector('#hotelModalImg')
    const modalBook = hotelModal.querySelector('#hotelModalBook')

    if (modalTitle) modalTitle.textContent = name
    if (modalName) modalName.textContent = name
    if (modalLocation) modalLocation.textContent = location
    if (modalImg) modalImg.src = img
    if (modalBook) modalBook.href = bookUrl
  })
})