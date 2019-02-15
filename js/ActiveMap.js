// ~~~~~~~~~~~~~~~~~~~~~~~~~~ FIND OFFICE SELECT DISTRICT ON MAP ~~~~~~~~~~~~~~~~~~~~~~~~~~ 
function ActiveMap() {
    this.classList.toggle("district-active");
    document.querySelector(`.${this.id}`).classList.toggle("text-map-active");
}
