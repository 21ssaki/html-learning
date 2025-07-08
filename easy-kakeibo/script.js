let totalIn = 0;
let totalOut = 0;
let records = [];

window.onload = function () {
  const data = localStorage.getItem("kakeibo-records");
  if (data) {
    records = JSON.parse(data);
    document.getElementById("list").innerHTML = "";
    records.forEach(record => displayItem(record));
    updateTotals();
  }
}

function add() {
  const name = document.getElementById("name").value.trim();
  const money = parseInt(document.getElementById("money").value);
  const type = document.getElementById("type").value;
  const date = new Date().toLocaleDateString();

  if (!name || isNaN(money) || money <= 0) {
    alert("内容と正しい金額を入力してください。");
    return;
  }

  const record = { name, money, type, date };
  records.push(record);

  saveToLocalStorage();
  displayItem(record);
  updateTotals();

  document.getElementById("name").value = "";
  document.getElementById("money").value = "";
}

function displayItem(record) {
  const list = document.getElementById("list");
  const div = document.createElement("div");
  div.className = "item";
  div.textContent = `${record.date} - ${record.name}：¥${record.money}（${record.type === "in" ? "収入" : "支出"}）`;
  list.appendChild(div);
}

function updateTotals() {
  totalIn = 0;
  totalOut = 0;
  records.forEach(r => {
    if (r.type === "in") {
      totalIn += r.money;
    } else {
      totalOut += r.money;
    }
  });
  document.getElementById("total-in").textContent = totalIn;
  document.getElementById("total-out").textContent = totalOut;
}

function saveToLocalStorage() {
  localStorage.setItem("kakeibo-records", JSON.stringify(records));
}
