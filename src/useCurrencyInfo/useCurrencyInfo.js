import { useState, useEffect } from "react";



function useCurrencyInfo(currency){
    const [data, setdata] = useState({})

    useEffect(() => {
         fetch('https://api.fastforex.io/currencies?api_key=8f5c6e6a1f-9dce363ee7-sk9bts')
        .then(response => response.json())
        .then(data => {
    const currencies = Object.keys(data.currencies).join(','); // Get all currency codes and join them with commas
  
    // Convert from USD to all other currencies
       fetch(`https://api.fastforex.io/fetch-multi?from=${currency}&to=${currencies}&api_key=8f5c6e6a1f-9dce363ee7-sk9bts`)
      .then(response => response.json())
      .then(conversionData => {
        console.log(conversionData); // Contains conversion rates for all currencies
        setdata(conversionData[currency])
      })
    })
    }, [currency])
    console.log(data);
    return data;  
}

export default useCurrencyInfo;
