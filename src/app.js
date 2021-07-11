const frag = document.createDocumentFragment();

const generateNumbers = () => {
  for (let i = 0; i < 144; i++) { 
    let element = document.createElement('button');
    element.innerHTML = i+1;
    element.setAttribute('class', 'number');
    element.setAttribute('data-number', i+1);
    element.addEventListener('click', buttonClicked);
    frag.appendChild(element);
  }
}

const buttonClicked = (event) => {
  let clickedClassName='numberClicked';
  removeHighlights();

  if (event.currentTarget.classList) {
    if (event.currentTarget.classList.contains(clickedClassName)) {
      event.currentTarget.classList.remove(clickedClassName);
    } else {
      event.currentTarget.classList.add(clickedClassName);
    }
  }

  let numberValue = parseInt(event.currentTarget.dataset.number, 10);
  multiples(numberValue);
}

const multiples = (number) => {
  document.querySelectorAll('.number').forEach((element) => {
    if (element.dataset.number % number === 0) {
      const highlightNumberClassName = 'highlightNumber';
      if (element.classList) {
        element.classList.add(highlightNumberClassName);
      } else{
        element.className += ` ${highlightNumberClassName}`;
      }
    }
  });
}

const removeHighlights = () => {
  document.querySelectorAll('.highlightNumber').forEach((element) => {
    element.classList.remove('highlightNumber');
  });
}

const append = () => {
  document.getElementById('numbers').appendChild(frag);
}

const app = function() {
  console.log('hello from app!');
  generateNumbers();
  append();
};

export default app;
