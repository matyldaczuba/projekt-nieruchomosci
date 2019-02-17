// ~~~~~~~~~~~~~~~~~~~~~~~~~~ RANGE SLIDERS ~~~~~~~~~~~~~~~~~~~~~~~~~~ 
//~~~~~~~~~~~~ RANGE VALUE IN PLN ~~~~~~~~

document.addEventListener(
    "DOMContentLoaded",
    function () {

        let ranges = document.querySelectorAll(".range-input");
        ranges.forEach(range =>
            range.addEventListener("change", function () {
                document.querySelector(`.${range.id}`).innerHTML = range.value;

            })
        );


    },
    false
);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~ SELECT DISTRICT ON MAP ~~~~~~~~~~~~~~~~~~~~~~~~~~ 

function toggleActiveMap() {
    // console.log(this);
    this.classList.toggle("district-active");
    document.querySelector(`.${this.id}`).classList.toggle("text-map-active");
}
var svgDistrict = document.querySelectorAll(".district");
svgDistrict.forEach(elem => elem.addEventListener("click", toggleActiveMap));

function toggleActiveText(){
    this.classList.toggle("text-map-active");
    document.querySelector(`.${this.id}`).classList.toggle("district-active");
}


var textMap = document.querySelectorAll('.text-map');
textMap.forEach(txt => {
    console.log(txt);

    txt.addEventListener("click", toggleActiveText)
 } );


// ~~~~~~~~~~~~~~~~~~~~~~~~~~ FIND OFFICE  ~~~~~~~~~~~~~~~~~~~~~~~~~~ 

var districtOptions = document.querySelectorAll(".district-select option");
// var chekedOption;

function selectDistrictValue() {
    // this.setAttribute("selected","");
    changeOnSelect(this.value);
}


districtOptions.forEach((el) => {
    el.addEventListener('click', selectDistrictValue);
});

function changeOnSelect(currentSelect) {

    svgDistrict.forEach(el => {

        if (el.id === currentSelect) {
            el.classList.toggle("district-active");
            document.querySelector(`.${el.id}`).classList.toggle("text-map-active");
        }
    });
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~ FIND OFFICE BUTTON FUNCTION TO KNOW WHAT DISTRICT IS SELECTED ~~~~~~~~~~~~~~~~~~~~~~~~~~ 


var btnFindOffice = document.querySelector("#find-office-btn");

btnFindOffice.addEventListener("click", () => {

    var chekedDistricts = [];
    var activeDistricts = document.querySelectorAll(".district-active");
    var activeDistrictsId;

    activeDistricts.forEach((elem, ind) => {
        activeDistrictsId = elem.getAttribute("id");
        chekedDistricts[ind] = activeDistrictsId;
    });

    console.log(`WYBRANE DZIELNICE : ${chekedDistricts}`);

});