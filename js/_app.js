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
