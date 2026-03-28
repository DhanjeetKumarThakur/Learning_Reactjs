const App = () => {
  return (
    <>
      <div className="h-screen bg-black">
        <div className="w-full max-w-md mx-auto shadow-md bg-gray-700 rounded-lg px-4 py-3 text-orange-600">
          <h1 className="text-white text-center my-2">Password Generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              className="outline-none w-full px-3 py-1 bg-white"
              placeholder="Password"
              readOnly
            />
            <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
              copy
            </button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex item-center gap-x-1">
              <input
                type="range"
                min={8}
                max={100}
                className="cursor-pointer"
              />
              <label htmlFor="Length">Length</label>
            </div>
            <div className="flex item-center gap-x-1">
              <input type="checkbox" id="nuberInput" />
              <label htmlFor="numberInput">Number</label>
            </div>
            <div className="flex item-center gap-x-1">
              <input type="checkbox" id="characterInput" />
              <label htmlFor="characterInput">Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
