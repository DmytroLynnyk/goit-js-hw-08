import _ from 'lodash';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on(
  'timeupdate',
  _.throttle(function (time) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
  }, 1000)
);

player.on('loaded', function () {
  const timeCode = JSON.parse(localStorage.getItem('videoplayer-current-time'));
  player.setCurrentTime(timeCode.seconds);
});
