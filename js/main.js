/***** DOM *****/
const $ = (element) => {
  return document.querySelector(element);
}

const $$ = (element) => {
  return document.querySelectorAll(element);
}

window.addEventListener("load", (e) => {
  e.preventDefault();

  /***** Dark Mode *****/
  const darkModeToggle = $('#dark-mode-toggle');
  const body = $('body');

  /***** DOM *****/
  const cv = $('.cv');
  const skill = $('#skill');
  const skillsContainer = $('.skillsContainer');
  const animado = $('.animado')

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
        window.open("imagenes/CV_Shamela200623.pdf", '_blank').focus();
      }
    })
  })

  skill.addEventListener('click', (e) => {
    e.preventDefault();
    skillsContainer.innerHTML = `
    <h3>Habilidades</h3>
			<div class="skllis">
				<div class="skill">
					<div class="info">
						<p><span class="lista"></span>Html5</p>
						<span class="porcentaje">90%</span>
					</div>
					<div class="barra">
						<div id="html" class="barra-progreso1"></div>
					</div>
				</div>

				<div class="skill">
					<div class="info">
						<p><span class="lista"></span>Css3</p>
						<span class="porcentaje">90%</span>
					</div>
					<div class="barra">
						<div id="css" class="barra-progreso2"></div>
					</div>
				</div>

				<div class="skill">
					<div class="info">
						<p><span class="lista"></span>Javascript</p>
						<span class="porcentaje">80%</span>
					</div>
					<div class="barra">
						<div id="js" class="barra-progreso3"></div>
					</div>
				</div>

				<div class="skill">
					<div class="info">
						<p><span class="lista"></span>Node js</p>
						<span class="porcentaje">30%</span>
					</div>
					<div class="barra">
						<div id="node" class="barra-progreso4"></div>
					</div>
				</div>

				<div class="skill">
					<div class="info">
						<p><span class="lista"></span>React</p>
						<span class="porcentaje">60%</span>
					</div>
					<div class="barra">
						<div id="react" class="barra-progreso5"></div>
					</div>
				</div>

				<div class="skill">
					<div class="info">
						<p><span class="lista"></span>Figma</p>
						<span class="porcentaje">80%</span>
					</div>
					<div class="barra">
						<div id="figma" class="barra-progreso6"></div>
					</div>
				</div>
			</div>`
  });

  const mostrarScroll = () => {
	let scrollTop = document.documentElement.scrollTop;
	for (i = 0; 1 < animado.length; i++) {
		let alturaAnimada = animado[i].offsetTop;
		if (alturaAnimada = 500 < scrollTop) {
			animado[i].style.opacity = 1;
		}
	}
  }

  window.addEventListener('scroll', mostrarScroll);


})
