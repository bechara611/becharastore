export const Animacionlogo=()=>{
    const elemento= document.getElementById('brand');
    elemento.classList.remove('animate__flip')
     
    setTimeout(() => {
     elemento.classList.add('animate__flip')
    }, 200);
    return true;
}