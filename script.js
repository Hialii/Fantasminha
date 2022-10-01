const fantasma = document.querySelector('.fantasma');
const poçao = document.querySelector('.poçao');


const jump = () => {
    fantasma.classList.add('jump')

    setTimeout(() =>{     
        fantasma.classList.remove('jump') 
    }, 500)
}

const loop = setInterval(() => {

   const poçaoPosition = poçao.offsetLeft;
   const fantasmaPosition = +window.getComputedStyle(fantasma).bottom.replace('px', '');

   if (poçaoPosition <= 70 &&  poçaoPosition > 0 && fantasmaPosition < 60 ) {
   
   poçao.style.animation = 'none'
   poçao.style.left = `${poçaoPosition}px`;

   fantasma.style.animation = 'none'
   fantasma.style.bottom = `${fantasmaPosition}px`;

   fantasma.src = './imagem/verde.gif'
   fantasma.style.width = '120px'
    
   clearInterval(loop);

   }
}, 10)

document.addEventListener('keydown', jump)
