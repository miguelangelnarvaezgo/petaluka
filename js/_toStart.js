export const toStartOnOffScrollControl = () => {
  if (window.scrollY > 400) {
    document.querySelector('#to-start').classList.add('to-start-opacity-1');
    document.querySelector('#to-start').classList.remove('to-start-opacity-0');
  } else if (window.scrollY < 400) {
    document.querySelector('#to-start').classList.add('to-start-opacity-0');
    document.querySelector('#to-start').classList.remove('to-start-opacity-1');
  }
}
