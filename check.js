//in this file we have code for position of x and y


const main_container = document.querySelector('.container')
const rect = main_container.getBoundingClientRect();

console.log(main_container.clientWidth)
console.log(main_container.clientHeight)

main_container.addEventListener('mousemove', (e) => {

    let xPosition = Math.floor(e.clientX - rect.left) ;
    let yPosition = Math.floor(e.clientY - rect.top) ;
    if(xPosition < 0){
        xPosition = 0;
    }
    if(yPosition < 0){
        yPosition = 0;
    }
    console.log('x:',xPosition, 'y:', yPosition)

})

