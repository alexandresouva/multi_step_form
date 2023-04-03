'use strict';

const $openCameraBtn = document.querySelector('[data-video-botao]');
const $camera = document.querySelector('[data-camera]');
const $video = document.querySelector('[data-video]');
const $takeAPhotoBtn = document.querySelector('[data-tirar-foto]');
const $canvas = document.querySelector('[data-video-canvas]');
const $message = document.querySelector('[data-mensagem]');
const $sendPhotoBtn = document.querySelector('[data-enviar]');
let imageURL = '';

$openCameraBtn.addEventListener('click', async function () {
  const startVideo = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });

  $openCameraBtn.style.display = 'none';
  $camera.style.display = 'block';

  $video.srcObject = startVideo;
});

$takeAPhotoBtn.addEventListener('click', () => {
  $canvas
    .getContext('2d')
    .drawImage($video, 0, 0, $canvas.width, $canvas.height);

  imageURL = $canvas.toDataURL('image/jpeg');

  $camera.style.display = 'none';
  $message.style.display = 'block';
});

$sendPhotoBtn.addEventListener('click', () => {
  const registerLocalData = localStorage.getItem('register');
  const convertData = JSON.parse(registerLocalData);

  convertData.imagem = imageURL;
  localStorage.setItem('register', JSON.stringify(convertData));

  window.location.href = './abrir-conta-form-3.html';
});
