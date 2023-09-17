import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const particlesInit = async (main: any) => {
  console.log(main);
  await loadFull(main);
};

root.render(
  <React.StrictMode>
    <Particles
        className='particles'
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: "rgb(10,10,25)",
          },
          fpsLimit: 60,
          particles: {
            shape: {
              type: "circle",
            },
            size: {
              random: {
                enable: true,
                minimumValue: .5,
              },
              value: 3,
            },
            number: {
              density: {
                enable: true,
                area: 1080,
              },
              limit: 0,
              value: 800,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.5,
                speed: 1,
                sync: false,
              },
              random: {
                enable: true,
                minimumValue: 0,
              },
              value: 1,
            },
          },
        }}
      />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
