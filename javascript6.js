// 要素を取得
const modal = document.getElementById('modal');
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');

// 開くボタンが押されたとき
openBtn.onclick = function() {
  modal.style.display = 'block';
}

// 閉じるボタンが押されたとき
closeBtn.onclick = function() {
  modal.style.display = 'none';
}

// モーダルの外側（背景）をクリックしたとき
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}
