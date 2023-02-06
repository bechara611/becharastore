export const EstaActivoElemento = (elem) => {
    try {
        let distance = elem.getBoundingClientRect();
        return (
            distance.top < (window.innerHeight || document.documentElement.clientHeight) && distance.bottom > 0
        );
    } catch (error) {

    }

}