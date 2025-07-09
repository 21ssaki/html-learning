let count = 0;
const actions = ["たたかう", "ねむる", "たべる"];

function sayHello() {
  count++; // カウントするのに必要

  const message = document.getElementById("message");

  const randomIndex = Math.floor(Math.random() * actions.length);
  const action = actions[randomIndex];
  
  message.textContent = action;

  if (count % 3 === 0) { // 3回に1回だけ色を変える
    const colors = ["red", "blue", "green", "orange", "purple"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    message.style.color = randomColor;
  } else {
    message.style.color = "black"; // それ以外は黒に戻す
  }
}
