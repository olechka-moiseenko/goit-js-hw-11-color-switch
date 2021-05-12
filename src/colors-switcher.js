const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
  const btnStart = document.querySelector('button[data-action="start"]');
  const btnStop = document.querySelector('button[data-action="stop"]');
  const body = document.querySelector('body');
  let timerId = null;

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  btnStart.addEventListener('click', () => {
    timerId = setInterval(() => {
      body.style['background-color'] = colors[randomIntegerFromInterval(0, colors.length - 1)];
    },1000)
  });

 btnStop.addEventListener('click', () => {
     clearInterval(timerId);
 });
