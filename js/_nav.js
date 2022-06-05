export const navOnOffScrollControl = () => {
  let val = document.querySelector('#menu-triger-onoff').checked;
  if (window.scrollY > 100 && val == false) {
    document.querySelector('#menu-triger-onoff').checked = true;
  } else if (window.scrollY < 100) {
    document.querySelector('#menu-triger-onoff').checked = false;
  }
}

export const navSwitchStyles = () =>{
  if (window.scrollY > 600) {
    document.querySelector('nav').classList.add('nav-blue-background');
    document.querySelector('nav').classList.remove('nav-trans-background');
    document.querySelector('#logo-svg-grup').classList.add('logo-color-blue');
    document.querySelector('#logo-svg-grup').classList.remove('logo-color-white');
    for (let i = 0; i < document.querySelectorAll('.menu-btn-symbol-line').length; i++) {
      document.querySelectorAll('.menu-btn-symbol-line')[i].classList.add('menu-btn-symbol-line-blue');
      document.querySelectorAll('.menu-btn-symbol-line')[i].classList.remove('menu-btn-symbol-line-white');
    }
    for (let i = 0; i < document.querySelectorAll('.a-menu-item').length; i++) {
      document.querySelectorAll('.a-menu-item')[i].classList.add('a-color-blue');
      document.querySelectorAll('.a-menu-item')[i].classList.remove('a-color-white');
    }
    for (let i = 0; i < document.querySelectorAll('.symbol-a-menu-item').length; i++) {
      document.querySelectorAll('.symbol-a-menu-item')[i].setAttribute('src', 'img/symbol_03.svg');
    }

  }  else if (window.scrollY < 300) {
    document.querySelector('nav').classList.add('nav-trans-background');
    document.querySelector('nav').classList.remove('nav-blue-background');
    document.querySelector('#logo-svg-grup').classList.add('logo-color-white');
    document.querySelector('#logo-svg-grup').classList.remove('logo-color-blue');
    for (let i = 0; i < document.querySelectorAll('.menu-btn-symbol-line').length; i++) {
      document.querySelectorAll('.menu-btn-symbol-line')[i].classList.add('menu-btn-symbol-line-white');
      document.querySelectorAll('.menu-btn-symbol-line')[i].classList.remove('menu-btn-symbol-line-blue');
    }
    for (let i = 0; i < document.querySelectorAll('.a-menu-item').length; i++) {
      document.querySelectorAll('.a-menu-item')[i].classList.add('a-color-white');
      document.querySelectorAll('.a-menu-item')[i].classList.remove('a-color-blue');
    }
    for (let i = 0; i < document.querySelectorAll('.symbol-a-menu-item').length; i++) {
      document.querySelectorAll('.symbol-a-menu-item')[i].setAttribute('src', 'img/symbol_01.svg');
    }
  }
}
