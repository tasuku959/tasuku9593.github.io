const correctPassword = "goudousyuwa"; // 任意のパスワードに変更可能

function checkPassword() {
  const input = document.getElementById("passwordInput").value;

  if (input === correctPassword) {
    window.location.href = "index.html"; // トップページに遷移
  } else {
    alert("パスワードが違います。");
  }
}
