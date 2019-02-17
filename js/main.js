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

// Math.decimal = function(n, k) 
// {
//     var factor = Math.pow(10, k+1);
//     n = Math.round(Math.round(n*factor)/10);
//     return n/(factor/10);
// }

// console.log(Math.decimal(12.344, 2));

// function currencyChange() {
//     var pln = document.querySelector("#currency");
//     var plnValue = pln.innerHTML;
//     var euroRate = 4.3329;

    
//     var plnOnEuro = () = {
//         // plnValue/euroRate
//     }
//     document.querySelector(`.${pln.id}`).innerHTML = plnValue;
// }


// ~~~~~~~~~~~~~~~~~~~~~~~~~~ SELECT DISTRICT ON MAP ~~~~~~~~~~~~~~~~~~~~~~~~~~ 

function toggleActiveMap() {
    // console.log(this);
    this.classList.toggle("district-active");
    document.querySelector(`.${this.id}`).classList.toggle("text-map-active");
}
var svgDistrict = document.querySelectorAll(".district");
svgDistrict.forEach(elem => elem.addEventListener("click", toggleActiveMap));

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

// console.log(districtOptions);


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