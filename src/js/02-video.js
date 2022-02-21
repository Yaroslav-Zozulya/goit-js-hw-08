import Player from '@vimeo/player';
const _ = require('lodash');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on(
  'timeupdate',
  _.throttle(function (event) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(event.seconds));
  }, 1000),
);

if (localStorage.getItem('videoplayer-current-time')) {
  player
    .setCurrentTime(JSON.parse(localStorage.getItem('videoplayer-current-time')))
    .then(function (seconds) {
      console.log(`Значение времени из localeStorage: ${seconds}`);
    })
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          console.log('Вызвано некорректным временем в setCurrentTime и установило время 0');
          break;

        default:
          console.log('ошибки с другими причинами');
          break;
      }
    });
}
