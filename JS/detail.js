

const params = new URLSearchParams(window.location.search);
const name = decodeURIComponent(params.get("name"));
console.log("URL-dən gələn ad:", name);

fetch("https://raw.githubusercontent.com/TheOksigen/purfect_data/main/country.json")
  .then(res => res.json())
  .then(data => {
    console.log("Data:", data);
    
    const country = data.find(item => item.name.toLowerCase() === name.toLowerCase());
    console.log("Tapılan ölkə:", country);

    if (country) {
      document.querySelector(".detail-img").src = country.flag;
      document.querySelector(".detail-name").textContent = country.name;
      document.querySelector(".detail-capital").textContent = 'Capital : ' +  country.capital;
      document.querySelector(".detail-population").textContent = 'Population : ' +  country.population;
    } else {
      console.log("Ölkə tapılmadı");
    }
  });
