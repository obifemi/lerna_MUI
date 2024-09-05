import { useState } from "react";
import "./App.css";
import CounterComponent from "../../shared-components/src/components/CounterComponent";
import MyButton from "../../shared-components/src/components/MyButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-slate-500 text-gray-900	">Main App</h1>
      <CounterComponent />
      <MyButton className="bg-red-700"
        sx={{
          color: "white", // Yazı rengi
          padding: "12px 24px", // Buton padding ayarı
          borderRadius: "120px", // Köşeleri yuvarlatma
        }}
        label="Click Me from main-app"
      />
    </>
  );
}

export default App;
