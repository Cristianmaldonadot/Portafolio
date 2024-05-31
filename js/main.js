
document.addEventListener('DOMContentLoaded',() =>{

    const arrayIconos = ["./iconos/react.svg", "./iconos/java.svg", "./iconos/css.svg"
    , "./iconos/javascript.svg", "./iconos/kotlin.svg", "./iconos/mysql.svg", "./iconos/springboot.svg"
    , "./iconos/aws.svg", "./iconos/github.svg", "./iconos/html.svg", "./iconos/angular.svg"
    , "./iconos/android-icon.svg", "./iconos/azure.svg", "./iconos/jwt.svg",
    "./iconos/react.svg", "./iconos/java.svg", "./iconos/css.svg"
    , "./iconos/javascript.svg", "./iconos/kotlin.svg", "./iconos/mysql.svg", "./iconos/springboot.svg"
    , "./iconos/aws.svg", "./iconos/github.svg", "./iconos/html.svg", "./iconos/angular.svg"
    , "./iconos/android-icon.svg", "./iconos/azure.svg", "./iconos/jwt.svg"
    ]

    const carruselContenedor = document.getElementById('carrusel_contenedor');
    
    for(let i = 0; i < arrayIconos.length; i++ ){
        const imgElemento = document.createElement('img')
        imgElemento.style = 'width:75px';
        imgElemento.src = arrayIconos[i];
        carruselContenedor.appendChild(imgElemento);
    }

    carruselContenedor.style = 'position: relative; left:-400px; transition: transform 2s ease'

    const box = document.getElementById('carrusel_contenedor');
    let position = 0;
    const speed = 0.5; // píxeles por frame

    function move() {
        position -= speed;
        box.style.left = position + 'px';

        if (position < window.innerWidth - box.offsetWidth) {
            requestAnimationFrame(move);
        }
        if(position === -2000){
            moverev();
        }
    }
    function moverev(){
        position += speed;
        box.style.left = position + 'px';
        requestAnimationFrame(moverev);
        if(position === 0){
            move();
        }
        
    }

    move();

})
