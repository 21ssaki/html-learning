let count = 0; //ボタンが押された回数を数えるカウンターとして使う
let catHP = 100; //猫の体力(HP)を表す変数であり、初期値が100の意味
let dogHP = 100; //犬の体力
const actions = ["たたかう", "ねむる", "たべる"];

function updateHP() {
  document.getElementById("cat-hp").style.width = catHP + "%"; //猫のHPゲージ
  document.getElementById("dog-hp").style.width = dogHP + "%"; //犬
}

function sayHello(){
  count++;
  const message = document.getElementById("message");

  const isSpecial = (count % 3 === 0); // 3回に1回の特別演出フラグ
  const action = actions[Math.floor(Math.random() * actions.length)];

  if (action === "たたかう") {
    let damage = 20;
    if (isSpecial) {
      damage *= 3; // 攻撃力3倍
      message.textContent = "🔥スーパー攻撃！犬が猫を強烈に攻撃！🔥";
    } else {
      message.textContent = "犬が猫を攻撃！";
    }
    catHP -= damage;
    if (catHP < 0) catHP = 0;
} else if (action === "ねむる") {
    let heal = 10;
    if (isSpecial) {
      heal *= 3; // 回復力3倍
      message.textContent = "🌙スーパー回復！猫がぐっすり眠って大回復！🌙";
    } else {
      message.textContent = "猫が眠って回復した。";
    }
    catHP += heal;
    if (catHP > 100) catHP = 100;

  } else if (action === "たべる") {
    let heal = 15;
    if (isSpecial) {
      heal *= 3; // 回復力3倍
      message.textContent = "🍖スーパー元気回復！犬が豪快に食べて元気満タン！🍖";
    } else {
      message.textContent = "犬が食べて元気になった。";
    }
    dogHP += heal;
    if (dogHP > 100) dogHP = 100;
  }

  updateHP();
}
window.onload = function() {
  updateHP();
};
