let count = 0;

function sayHello() {
  count++; // カウントするのに必要

  const message = document.getElementById("message");
  message.textContent = `こんにちは！ボタンを ${count} 回 押した！`;

  if (count % 3 === 0) { // 3回に1回だけ色を変える
    const colors = ["red", "blue", "green", "orange", "purple"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    message.style.color = randomColor;
  } else {
    message.style.color = "black"; // それ以外は黒に戻す
  }
}
