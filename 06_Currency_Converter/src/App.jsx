import { useCallback, useEffect, useState } from "react";
import CurrencyCard from "../components/CurrencyCard";
import { currencyList } from "./countrylist";
import apiCall from "./apiCall";
function App() {
  const [amount, setAmount] = useState(0);
  const [reqAmount, setReqAmount] = useState(0);
  const [fromCountry, setFromCountry] = useState("USD");
  const [toCountry, setToCountry] = useState("INR");

  useEffect(() => {
    calculate();
  }, [fromCountry, toCountry]);
  const calculate = useCallback(() => {
    apiCall(fromCountry)
      .then((data) => {
        const tempAmt = amount * data[toCountry];
        setReqAmount(tempAmt);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [amount, fromCountry, toCountry]);
  const swapAMt = () => {
    let tempCntry = toCountry;
    setToCountry(fromCountry);
    setFromCountry(tempCntry);
  };
  const changeFromCountry = (cntry) => {
    setFromCountry(cntry);
  };
  const changeToCountry = (cntry) => {
    setToCountry(cntry);
  };
  const changeAmount = (val) => {
    if (val >= 0) setAmount(val);
  };
  const changeReqAmount = (val) => {
    if (val >= 0) setReqAmount(val);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <div className="relative p-8 bg-gray-900 rounded-2xl shadow-2xl border border-gray-700 w-full max-w-md">
        <h1 className="text-2xl font-bold text-white text-center mb-8 tracking-wide">
          💱 Currency Converter
        </h1>

        {/* Cards container */}
        <div className="relative flex flex-col items-center space-y-10">
          {/* First Card */}
          <CurrencyCard
            type="From"
            defaultSelector={fromCountry}
            data={currencyList}
            amount={amount}
            changeCurrency={changeAmount}
            changeCountry={changeFromCountry}
          />

          {/* Swap Button */}
          <button
            className="absolute bottom-1/7 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center shadow-lg border-2 border-blue-400 transition duration-200 z-10"
            style={{ left: "50%", transform: "translate(-50%, -50%)" }}
            onClick={swapAMt}
          >
            swap
          </button>

          {/* Second Card - moved slightly up */}
          <div className="relative flex flex-col items-center space-y-10 -mt-8">
            <CurrencyCard
              type="To"
              defaultSelector={toCountry}
              data={currencyList}
              amount={reqAmount}
              changeCurrency={changeReqAmount}
              changeCountry={changeToCountry}
            />
          </div>
        </div>

        {/* Convert Button - added padding */}
        <button
          onClick={calculate}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg mt-10 py-3 transition duration-200"
        >
          Convert
        </button>
      </div>
    </div>
  );
}

export default App;
