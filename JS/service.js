const BASE_URL = "https://raw.githubusercontent.com";


async function getData() {
    try {
        const res = await fetch(`${BASE_URL}/TheOksigen/purfect_data/refs/heads/main/country.json`);
        
        if(!res.ok){
            throw new Error("Sorğu ilə bağlı problem var")
        }
        const  data = await res.json();
        return data
    } catch (error) {
        console.log(error);
    }
};



export {
    getData,
}