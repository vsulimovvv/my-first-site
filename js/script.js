window.addEventListener('DOMContentLoaded', () => {

  // toggle popup
  const popup = () => {
    const popup = document.querySelector('.popup');
    const popupBtn = document.querySelectorAll('.flat__item');
    const popupClose = document.querySelector('.popup-close');
    const popupContent = document.querySelector('.popup-content');

    const openPopup = (e) => {
      e.preventDefault();
      popup.style.display = 'block';
    };

    const closePopup = (e) => {
      e.preventDefault();
      popup.style.display = 'none';
    };

    popupBtn.forEach(item => {
      item.addEventListener('click', openPopup);
    });

    popupClose.addEventListener('click', closePopup);

    popup.addEventListener('click', (event) => {
      let target = event.target;
      if (target === popup) {
        popup.style.display = "none";
      }
    });
  };

  // popup();


  // valid input

  const validForm = () => {
    const inputs = document.querySelectorAll('input');


    console.log(inputs);
  };

  validForm();

  // calc
  const toggleCalc = () => {
    const btn = document.querySelector('#count');
    const calc = document.querySelector('.calc');
    const calcClose = document.querySelector('.calc-close');
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      calc.classList.toggle('active');
    });

    calcClose.addEventListener('click', (e) => {
      e.preventDefault();
      calc.classList.toggle('active');
    });
  };

  toggleCalc();

  const calc = () => {
    const calcBlock = document.querySelector('.calc');
    const bank = document.querySelector('select');
    const inputCount = document.querySelector('.count');
    const inputSum = document.querySelector('.sum-first');
    const inputIncime = document.querySelector('.income');
    let total = document.querySelector('.output');

    const countSum = () => {

      let bankValue = bank.options[bank.selectedIndex].value;

      let count = +inputCount.value;
      let sum = +inputSum.value;
      let income = +inputIncime.value;

      total.textContent = (count + sum + income) * bankValue;
    }

    calcBlock.addEventListener('input', event => {
      const target = event.target;
      console.log(target)
      if (target.matches('select') || target.matches('input')) {
        countSum();
      }
    });
  };

  calc();

  // scroll to contacts
  const contacts = () => {
    const contacts = document.querySelector('#contacts');
    let scrolled;
    let timer;
    contacts.addEventListener('click', () => {
      scrolled = window.pageYOffset;
      requestAnimationFrame(scrolByContacts);
    });


    const scrolByContacts = () => {
      if (scrolled < 3500) {
        window.scrollTo(0, scrolled);
        scrolled = scrolled + 500; // скорость прокрутки
        timer = setTimeout(scrolByContacts, 100);
      } else {
        clearTimeout(timer);
        window.scrollTo(0, 3500);
      }
    };
  };
  requestAnimationFrame(contacts);

  // scroll to top
  const byTop = () => {
    let scrolled;
    let timer;
    window.addEventListener('dblclick', () => {
      scrolled = window.pageYOffset;
      requestAnimationFrame(scrolByContacts);
    });


    const scrolByContacts = () => {
      if (scrolled > 0) {
        window.scrollTo(0, scrolled);
        scrolled = scrolled - 500; // скорость прокрутки
        timer = setTimeout(scrolByContacts, 100);
      } else {
        clearTimeout(timer);
        window.scrollTo(0, 0);
      }
    };
  };
  requestAnimationFrame(byTop);

  // images
  const images = () => {
    const imgPopup = document.createElement('div');
    const imageBlock = document.querySelector('.flat');
    const bigImage = document.createElement('img');

    imgPopup.classList.add('popup');
    imageBlock.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    imgPopup.appendChild(bigImage);

    imageBlock.addEventListener('click', (e) => {
      e.preventDefault();

      let target = e.target;
      if (target && target.classList.contains('preview')) {
        imgPopup.style.display = 'flex';
        const path = target.parentNode.getAttribute('href');
        bigImage.setAttribute('src', path);
      }
      if (target && target.matches('div.popup')) {
        imgPopup.style.display = 'none';
      }
    });
  };
  images();

});