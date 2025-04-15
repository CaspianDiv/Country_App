import   { getData }  from "/JS/service.js"

// Random Cards Area 
async function useFetch() {
    data = await getData()
    console.log(data);
    printRandData();
    printMainData()
};
useFetch()

const randCard = document.querySelector("#randCard");

let data



function printRandData(){
const randomIndex = Math.floor(Math.random() * data.length);
  const randomCountry = data[randomIndex];

  randCard.innerHTML += `
        <div class="flex justify-center items-center gap-10 shadow-lg rounded mx-auto max-w-[100%]">
        <div class="py-10  text-start px-10 flex flex-wrap gap-5">
            <h2 class="text-[#364153] text-xl leading-10">${randomCountry.alpha3Code}</h2>
            <h1 class="font-bold text-2xl">${randomCountry.name}</h1>
            <p><span class="text-md text-[#364153] font-bold  leading-10">Capital: </span> ${randomCountry.capital}</p>
            <p><span class="text-md text-[#364153] font-bold leading-10">Region: </span>${randomCountry.region}</p>
            <p><span class="text-md text-[#364153] font-bold leading-10">Subregion: </span>${randomCountry.subregion}</p>
            <div class="flex gap-10">
                <p><span class="text-md text-[#364153] font-bold leading-10">Population: </span>${randomCountry.population}</p>
                <p><span class="text-md text-[#364153] font-bold leading-10">Area: </span>${randomCountry.area}</p>
            </div>
        </div>
            <div class=" flex justify-end  border-gray-600 p-5">
                <img src="${randomCountry.flag}" class="rounded object-cover max-w-[100%]" />
            </div>
        </div>
  `
};

// Random Cards Area End

// Country Cards Area 

const countryCards = document.getElementById("countryCards");


function printMainData() {
    data.forEach(item => {
        countryCards.innerHTML += `
         <div class="max-w-xs p-6 cursor-pointer rounded-md shadow dark:bg-gray-50 dark:text-gray-900">
            <img src="${item.flag}" alt="" class="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500">
            <div class="mt-6 mb-2">
         <h2 class="hover:underline"><a href="../detail.htm?name=${item.name}" class="text-2xl font-bold tracking-wide">${item.name}</a> </h2>
            <span class="block text-xs py-2 font-medium tracking-widest uppercase dark:text-indigo-600">Capital: ${item.capital}</span>
            </div>

            <p class="dark:text-gray-800">Population: ${item.population}</p>
        </div>
        `
    });  
};
// Filtering Area

const searchInp = document.getElementById("searchInp");

searchInp.addEventListener("input" ,search)
function search(){
    let card = "";
    data.filter(item => item.name.toLowerCase().includes(searchInp.value.toLowerCase()))
    .map(item => card += `
        <div  class="max-w-xs p-6 cursor-pointer rounded-md shadow dark:bg-gray-50 dark:text-gray-900">
            <img src="${item.flag}" alt="" class="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500">
            <div class="mt-6 mb-2">
            <h2 class="text-2xl font-bold tracking-wide ">${item.name}</h2>
            <span class="block text-xs py-2 font-medium tracking-widest uppercase dark:text-indigo-600">Capital: ${item.capital}</span>
            </div>
            <p class="dark:text-gray-800">Population: ${item.population}</p>
        </div>
        `
    )
    countryCards.innerHTML = card
};


