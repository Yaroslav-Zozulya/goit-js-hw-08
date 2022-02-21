const modalFromInfo = {
  name: 'Валентин',
  phone: 06700000000,
  email: 'test@mail.ru',
};
localStorage.setItem('videoPlayer', 'какое-то значение');
localStorage.setItem('какое-то барахло', 'ылораилофвиаылвиа');
localStorage.setItem('feedback-form', JSON.stringify(modalFromInfo));

// if (localStorage.getItem('video-player')) {
//   console.log(localStorage.getItem('video-player'));
// }

// if (localStorage.getItem('какое-то барахло')) {
//   console.log(localStorage.getItem('какое-то барахло'));
// }

// if (localStorage.getItem('feedback-form')) {
//   console.log(localStorage.getItem('feedback-form'));
// }

for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  if (key === 'feedback-form') {
    console.log(JSON.parse(localStorage.getItem('feedback-form')));
  }
}
