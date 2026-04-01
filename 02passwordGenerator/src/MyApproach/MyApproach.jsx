import { useEffect, useState } from "react";

const MyApproach = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = () => {
    console.log("Password Generator");

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pwd = "";

    if (numberAllowed) {
      str += "0123456789";
    }

    if (charAllowed) {
      str += "@#$%^&*()+_-";
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pwd += str.charAt(char);
    }

    setPassword(pwd);
  };

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(password);
  };

  useEffect(() => {
    passwordGenerator(); //It is labeling as error --> As per React 👉 That’s an extra render cycle.
  }, [length, numberAllowed, charAllowed]);

  return (
    <>
      <div className="h-screen bg-black py-50">
        <div className="w-full max-w-md mx-auto shadow-md bg-gray-700 rounded-lg px-4 py-3 text-orange-600">
          <h1 className="text-white text-center my-2">Password Generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              className="outline-none w-full px-3 py-1 bg-white"
              placeholder="Password"
              value={password}
              readOnly
            />
            <button
              className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 "
              onClick={() => copyToClipboard()}
            >
              copy
            </button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex item-center gap-x-1">
              <input
                type="range"
                value={length}
                min={8}
                max={30}
                onChange={(e) => setLength(Number(e.target.value))}
                className="cursor-pointer"
              />
              <label htmlFor="Length">Length : {length} </label>
            </div>
            <div className="flex item-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="nuberInput"
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              <label htmlFor="numberInput">Number</label>
            </div>
            <div className="flex item-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                onChange={() => setCharAllowed((prev) => !prev)}
              />
              <label htmlFor="characterInput">Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyApproach;
