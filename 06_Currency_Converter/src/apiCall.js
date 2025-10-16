function apiCall(countryCode) {
  return fetch(`https://open.er-api.com/v6/latest/${countryCode}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.rates;
    })
    .catch((err) => {
      console.error("Error fetching data:", err);
    });
}

export default apiCall;
