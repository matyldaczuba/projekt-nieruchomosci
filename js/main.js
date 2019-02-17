// ~~~~~~~~~~~~~~~~~~~~~~~~~~ SELECT DISTRICT ON MAP ~~~~~~~~~~~~~~~~~~~~~~~~~~ 

function toggleActiveMap() {
    this.classList.toggle("district-active");
    document.querySelector(`.${this.id}`).classList.toggle("text-map-active");
}

function toggleActiveText() {
    this.classList.toggle("text-map-active");
    document.querySelector(`.${this.id}`).classList.toggle("district-active");
}

var svgDistrict = document.querySelectorAll(".district");
svgDistrict.forEach(dist => dist.addEventListener("click", toggleActiveMap));


var textMap = document.querySelectorAll('.text-map');
textMap.forEach(txt => txt.addEventListener("click", toggleActiveText));


// ~~~~~~~~~~~~~~~~~~~~~~~~~~ FIND OFFICE  ~~~~~~~~~~~~~~~~~~~~~~~~~~ 

var districtOptions = document.querySelectorAll(".district-select option");

function selectDistrictValue() {
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

// ~~~~~~ BTN FUNCTION TO KNOW WHAT DISTRICT IS SELECTED ~~~~~~~~~~~~~~~~~~~~~~~~~~ 


var btnFindOffice = document.querySelector("#find-office-btn");

btnFindOffice.addEventListener("click", () => {

    var chekedDistricts = [];
    var activeDistricts = document.querySelectorAll(".district-active");
    var activeDistrictsId;

    activeDistricts.forEach((dist, ind) => {
        activeDistrictsId = dist.getAttribute("id");
        chekedDistricts[ind] = activeDistrictsId;
    });

    console.log(`WYBRANE DZIELNICE : ${chekedDistricts}`);

});