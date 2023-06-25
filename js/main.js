const darkModeToggle = document.querySelector('#dark-mode-toggle');
const body = document.querySelector('body');

const cv = document.querySelector('.cv');

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
});

cv.addEventListener('click', () => {
  let timerInterval
  Swal.fire({
    title: '¡Hey un momento por favor!',
    html: 'Gracias por su interés.',
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading()
    
    },
    willClose: () => {
      clearInterval(timerInterval)
    }
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      window.open("../imagenes/CV_Shamela200623.pdf", '_blank').focus();
    }
  })
})
