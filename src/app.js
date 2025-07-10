import anime from 'animejs/lib/anime.es.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('ページが読み込まれました');

  const form = document.getElementById('basic_form');

  // アニメーション用ボタンを追加
  const animBtn = document.createElement('button');
  animBtn.textContent = 'フォームをアニメーション表示';
  animBtn.style.display = 'block';
  animBtn.style.margin = '20px auto';
  document.body.insertBefore(animBtn, form);

  // ボタンをクリックしたときにアニメーション
  animBtn.addEventListener('click', () => {
    anime({
      targets: '#basic_form',
      scale: [0.8, 1],
      opacity: [0, 1],
      duration: 1200,
      easing: 'easeOutElastic(1, .6)',
    });
  });
});
