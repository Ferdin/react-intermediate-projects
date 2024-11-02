import { useEffect, useState } from "react";

function App() {
  // `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("EUR");
  const [to, setTo] = useState("USD");
  const [output, setOutput] = useState(0);

  useEffect(
    function () {
      async function fetchCurrency() {
        if (to !== from && input != null) {
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${input}&from=${from}&to=${to}`
          );
          if (!res.ok)
            throw new Error(
              "Something went wrong with fetching currency values...."
            );

          const data = await res.json();
          const rateValue = Object.values(data.rates)[0];
          setOutput(rateValue);
        } else {
          setOutput(input);
        }

        // if(data.Response === "False") throw new Error("Invalid Response");
        // setOutput(data.Sea)
      }

      fetchCurrency();
    },
    [input, from, to]
  );

  return (
    <div>
      <Input input={input} setInput={setInput} />
      <ConverterComponentFrom from={from} setFrom={setFrom} />
      <ConverterComponentTo to={to} setTo={setTo} />
      <Output output={output} />
    </div>
  );
}

function Input({ input, setInput }) {
  return (
    <input
      type="number"
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
}

function ConverterComponentFrom({ from, setFrom }) {
  return (
    <select value={from} onChange={(e) => setFrom(e.target.value)}>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="CAD">CAD</option>
      <option value="INR">INR</option>
    </select>
  );
}

function ConverterComponentTo({ to, setTo }) {
  return (
    <select value={to} onChange={(e) => setTo(e.target.value)}>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="CAD">CAD</option>
      <option value="INR">INR</option>
    </select>
  );
}

function Output({ output }) {
  return <p>{output}</p>;
}

export default App;
