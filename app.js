
const main_container = document.querySelector('.container')
const rect = main_container.getBoundingClientRect();
const main_image = document.querySelector('img');
console.dir(main_image.style)
console.log(main_container.clientWidth)
console.log(main_container.clientHeight)
let transformRight = 0;
let moveRight = false;
let moveRightValue = 0;
let xPosition;
let Num = 0;

main_container.addEventListener('mouseleave', () => {
    moveRight = false;
    console.log('bahar agayeee')
})

main_container.addEventListener('mousemove', (e) => {
    
    xPosition = Math.floor(e.clientX - rect.left) ;
    if(xPosition < 0){
        xPosition = 0;
    }

        if(xPosition > main_container.clientWidth/1.35){
            //here i need to add logic to move the image 
            moveRight = true;     
            moveToRight();   
        } else {
            moveRight = false;
            moveToRight();
        }
})

// main_container.addEventListener('mousemove', () => {
//     if(xPosition < main_container.clientWidth/1.35){
//         moveRight = false;
//         Num = 1;
//         moveToRight(); 
//     }
// })

console.log(main_image.style.transform);


function moveToRight(){
    
        interval1 = setTimeout(() => {
            if(moveRight){
                moveToRight();
            } 
        }, 20);
        console.log(transformRight, "    ",main_image.style.right)
        transformRight = transformRight + 1;
        main_image.style.right = `${transformRight}px`
       
  
}


