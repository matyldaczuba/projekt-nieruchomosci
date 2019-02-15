// ~~~~~~~~~~~~~~~~~~~~~~~~~~ RANGE SLIDERS ~~~~~~~~~~~~~~~~~~~~~~~~~~ 

// var spaceSlider = new Slider("#space-range", {
//     id: "space-slider",
//     min: 0,
//     max: 12000,
//     range: true,
//     value: [100, 10000],
//     focus: true
// });

// var budgetSlider = new Slider("#budget-range", {
//     id: "budget-slider",
//     min: 0,
//     max: 10000,
//     value: 7000,
//     focus: true
// });



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

function selectDistrictValue(){
    // this.setAttribute("selected","");
    changeOnSelect(this.value);
}


districtOptions.forEach( (el) =>{
    el.addEventListener('click', selectDistrictValue);
});

function changeOnSelect(currentSelect){

    svgDistrict.forEach(el => { 
        
        if(el.id === currentSelect){
            el.classList.toggle("district-active");
            document.querySelector(`.${el.id}`).classList.toggle("text-map-active");
        }
    });
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~ FIND OFFICE BUTTON FUNCTION TO KNOW WHAT DISTRICT IS SELECTED ~~~~~~~~~~~~~~~~~~~~~~~~~~ 

// console.log(districtOptions);


var btnFind = document.querySelector("#btn-find");

btnFind.addEventListener("click", () => {


    var chekedDistricts = [];
    var activeDistricts = document.querySelectorAll(".district-active");
    var activeDistrictsId;
    
    activeDistricts.forEach((elem, ind) => {
        activeDistrictsId = elem.getAttribute("id");
        chekedDistricts[ind] = activeDistrictsId;
    });

    console.log(chekedDistricts);

    // return chekedDistricts;
});

//----------ja--////

document.addEventListener(
    "DOMContentLoaded",
    function() {
      let ranges = document.querySelectorAll(".range-input");
      ranges.forEach(range =>
        range.addEventListener("change", function() {
          document.querySelector(`.${range.id}`).innerHTML = range.value;
        })
      );
    },
    false
  );

