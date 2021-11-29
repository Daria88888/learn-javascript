
let mapProjectToImage = {
    button__modal_1: "/assets/images/modal_1.jpeg",
    button__modal_2: "/assets/images/modal_2.jpeg",
    button__modal_3: "/assets/images/modal_3.jpeg",
    button__modal_4: "/assets/images/modal_4.jpeg",
    button__modal_5: "/assets/images/modal_5.jpeg",
}

document.addEventListener('DOMContentLoaded', () => { // это обязательно вообще?
 
    // Кнопка по которой происходит клик
    let callBackButtons = document.getElementsByClassName('project'); // как сделать без модификатора или он не будет это воспринимать?
   
    let modal1 = document.getElementById('modal-1');

    let modalImg = document.getElementById('modal-content') 

    for (let i=0; i< callBackButtons.length; i++) {
        let callBackButton = callBackButtons[i];

    callBackButton.onclick = function (event) {
        console.log (modalImg.src)
        let currentImage = mapProjectToImage [event.target.id]
        modalImg.src = currentImage
        modal1.classList.add('modal_active');
      }
    }

    



    
   
    // Кнопка "закрыть" внутри модального окна
    let closeButton = modal1.getElementsByClassName('modal__close-button')[0]; // я так и не поняла почему тут ноль
   
   
   
    closeButton.onclick = function () {
      modal1.classList.remove('modal_active');
    }
  });