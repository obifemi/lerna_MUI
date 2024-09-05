import { useState } from "react";
import "./App.css";
import CounterComponent from "../../shared-components/src/components/CounterComponent";
import MyButton from "../../shared-components/src/components/MyButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="read-the-docs">Main App</h1>
      <CounterComponent/>
      <MyButton         sx={{
          backgroundColor: 'secondary.primary', // MUI tema rengini kullanarak stil
          '&:hover': {
            backgroundColor: 'secondary.dark', // Hover rengini belirleme
          },
          color: 'white', // Yazı rengi
          padding: '12px 24px', // Buton padding ayarı
          borderRadius: '120px', // Köşeleri yuvarlatma
        }} label="Click Me from main-app"  />
    </>
   
  );
}

export default App;
