import { component$ } from '@builder.io/qwik';


export const vibrate = () => {
  
  navigator.vibrate(0); //Stop last vibration
  const qty = randomIntFromInterval(1, 10)
  const config = []
  for (let index = 1; index < qty; index++) {
    config.push(randomIntFromInterval(100, 2000))
  }

  window.navigator.vibrate(config);
};

function randomIntFromInterval(min:number, max:number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const Vibration = component$(() => {
  return (
    <>
      <button onClick$={() => vibrate()} class='button'>
        Click me 😍
      </button>
    </>
  );
});