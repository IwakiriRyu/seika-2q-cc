import JustValidate from 'just-validate';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper1 = new Swiper('.swiper1', {
  direction: 'horizontal',
  loop: true,
  pagination: { el: '.swiper1 .swiper-pagination' },
  navigation: {
    nextEl: '.swiper1 .swiper-button-next',
    prevEl: '.swiper1 .swiper-button-prev',
  },
  on: {
    init: function () {
      document.getElementById('swiper1-title').textContent =
        `Swiper1: スライド${this.realIndex + 1}を表示しています。`;
    },
  },
});

swiper1.on('slideChange', function () {
  document.getElementById('swiper1-title').textContent =
    `Swiper1: スライド${swiper1.realIndex + 1}を表示しています。`;
});

const swiper2 = new Swiper('.swiper2', {
  direction: 'horizontal',
  loop: true,
  pagination: { el: '.swiper2 .swiper-pagination' },
  navigation: {
    nextEl: '.swiper2 .swiper-button-next',
    prevEl: '.swiper2 .swiper-button-prev',
  },
  on: {
    init: function () {
      document.getElementById('swiper2-title').textContent =
        `Swiper2: スライド${this.realIndex + 1}を表示しています。`;
    },
  },
});

swiper2.on('slideChange', function () {
  document.getElementById('swiper2-title').textContent =
    `Swiper2: スライド${swiper2.realIndex + 1}を表示しています。`;
});

const validator = new JustValidate('#basic_form');

validator
  .addField('#basic_name', [
    { rule: 'required', errorMessage: '必須入力項目です。' },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: '3文字以上入力してください。',
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: '最大入力文字数は15文字です。',
    },
  ])
  .addField('#basic_email', [
    { rule: 'required', errorMessage: '必須入力項目です。' },
    { rule: 'email', errorMessage: '形式が正しくありません。' },
  ])
  .addField('#basic_password', [
    { rule: 'required', errorMessage: '必須入力項目です。' },
    {
      rule: 'password',
      errorMessage: 'パスワードは8文字以上で、数字を1つ以上含めてください。',
    },
  ])
  .addField('#basic_age', [
    { rule: 'required', errorMessage: '必須入力項目です。' },
    { rule: 'number', errorMessage: '数字で入力してください。' },
    {
      rule: 'minNumber',
      value: 18,
      errorMessage: '18歳以上で入力してください。',
    },
    {
      rule: 'maxNumber',
      value: 150,
      errorMessage: '150歳以下で入力してください。',
    },
  ])
  .addField('#basic_address', [
    { rule: 'required', errorMessage: '必須入力項目です。' },
  ])
  .onSuccess((event) => {
    const formData = new FormData(event.target);
    console.log(formData.get('name'));
    console.log(formData.get('email'));
    console.log(formData.get('password'));
    console.log(formData.get('age'));
    console.log(formData.get('address'));
  });
