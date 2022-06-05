export const scrollSmooth = (classTarget, arrayId ) => {
  let links = document.querySelectorAll(classTarget)
  let items = new Array;

  arrayId.forEach((item, i) => {
    items[i] = links[i]
    items[i].addEventListener('click', () => {
      scrollSuave(item, 500, 80);
    })
  });
}

const scrollSuave = (objetivo, duracion, compensacion) => {
  let elemObj = document.querySelector(objetivo);
  let elemPos = elemObj.getBoundingClientRect().top - compensacion;
  let posInicial = window.pageYOffset;
  let tiempoInicial = null;

  const animacion = tiempoAhora => {
    if (tiempoInicial === null) tiempoInicial = tiempoAhora;
    let tiempoPasado = tiempoAhora - tiempoInicial;
    let auxAnimacion = easeInOutQuad(tiempoPasado, posInicial, elemPos, duracion);
    window.scrollTo(0, auxAnimacion);
    if (tiempoPasado < duracion) requestAnimationFrame(animacion);
  }
  requestAnimationFrame(animacion);
}

const easeInOutQuad = (t, b, c, d) => {
  t /= d / 2
  if (t < 1) return c / 2 * t * t + b
  t--
  return - c / 2 * (t * (t - 2) - 1) + b
}
