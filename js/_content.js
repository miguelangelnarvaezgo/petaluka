export const article01InyectContent = (content) => {
  for (let i = 0; i < content.length; i++) {
    document.querySelector(`#${content[i].id} .article-01-title h2`).textContent = content[i].title;

    if (content[i].list) {
      for (let j = 0; j < content[i].list.length; j++) {
        document.querySelector(`#list-item-${j} p`).innerHTML = content[i].list[j];
      }
    } else if (content[i].content) {
      document.querySelector(`#${content[i].id} .article-01-content p`).innerHTML = content[i].content;
    }
  }
}

export const content = {
  home: [
    {
      id: "article-0",
      title: "Quienes somos",
      content: "La conectividad es nuestro mantra. Conectados todo fluye, conectados el éxito es compartido, conectados sumamos más. \r\nSomos analistas, somos creativos, somos sociales, somos conectores, somos únicos. Apostamos por el círculo como estrategia de éxito. \r\nConectamos a través del circular content para imantar a las marcas con sus audiencias desde la originalidad, la ultra credibilidad y la hyper dinamización de los contenidos. ",
      button_text: "Saber más",
      button_url: "‘#’"
    },
    {
      id: "article-1",
      title: "Qué hacemos",
      content: "<strong>Reimaginamos el contenido y la forma de conectar. Nuevo concepto Circular Content.</strong> <strong>Creamos</strong> contenido original, atractivo, racional y emocionalmente. <strong>Conceptualizamos</strong> interés/tirón periodístico en digital media y social media. Desarrollamos contenido multi-task, multi-media y trans-media. Atomizamos por cada plataforma según sus normas, código y estilo. <strong>Generamos</strong> enfoque editorial genuino. ",
      button_text: "Saber más",
      button_url: "#"
    },
    {
      id: "article-2",
      title: "Valores",
      list: [
        "Creemos en la solidaridad… porque sin solidaridad no hay éxito.",
        "Creemos en el trabajo de equipo… el círculo virtuoso como mantra.",
        "Creemos en la innovación… hacemos que cada segundo marque la diferencia.",
        "Creemos en la sostenibilidad… no existe proyecto sin Planeta." ],
      button_text: "Saber más",
      button_url: "#"
    },
    {
      id: "article-3",
      title: "Conócenos",
      content: "Quieres estar mega conectad@ con tu audiencia a través de contenidos genuinos, dinámicos e hyper dinamizados? PETALUKA reimagina el universo de la marca a través del Circular Content. Escríbenos a <a href='mailto:hola@petaluka.com'>hola@petaluka.com</a> o llámanos al <a href='tel:607408717'>607 408 717</a> y estaremos encantados de explicarte lo qué hacemos, cómo lo hacemos y cómo podemos ayudarte. "
    }
  ]
}
