// ~~~~~~~~~~~~~~~~~~~~~~~~~~ FIND OFFICE SELECT DISTRICT ON MAP ~~~~~~~~~~~~~~~~~~~~~~~~~~ 
function activeMap() {
    this.classList.toggle("district-active");
    document.querySelector(`.${this.id}`).classList.toggle("text-map-active");
}
