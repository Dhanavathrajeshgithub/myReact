function CurrencyCard({
  type,
  defaultSelector,
  data,
  amount,
  changeCurrency,
  changeCountry,
}) {
  return (
    <div className="bg-white p-5 m-5 text-black rounded-xl shadow-md border border-gray-200 w-full max-w-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-lg font-semibold text-gray-700">{type}</span>
        <span className="text-sm text-gray-500">Currency Type</span>
      </div>

      {/* Input + Dropdown */}
      <div className="flex items-center space-x-3">
        <input
          type="number"
          placeholder="0"
          step="1"
          min={0}
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={amount}
          onChange={(e) => {
            changeCurrency(Number(e.target.value));
            console.log(e);
          }}
        />

        <select
          id="country"
          name="country"
          value={defaultSelector}
          onChange={(e) => {
            changeCountry(e.target.value);
            //console.log(e.target.value);
          }}
          className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          {data.map((ele) => (
            <option key={ele.code} value={ele.code}>
              {ele.code.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CurrencyCard;
