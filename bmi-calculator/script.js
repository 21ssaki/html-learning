function getToday() {
    const now = new Date();
    return now.toISOString().split('T')[0];
}

function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight)) {
        alert('身長と体重を入力してください');
        return;
    }

    if (height < 50 || height > 250 || weight < 10 || weight > 300) {
        alert('身長や体重の数値を確認してください');
        return;
    }

    const today = getToday();
    const lastDate = localStorage.getItem('lastDate');
    let streak = parseInt(localStorage.getItem('streak')) || 0;

    if (lastDate !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const ymdYesterday = yesterday.toISOString().split('T')[0];

        if (lastDate === ymdYesterday) {
            streak += 1;
        } else {
            streak = 1;
        }

        localStorage.setItem('streak', streak);
        localStorage.setItem('lastDate', today);
    }

    const heightM = height / 100;
    const bmi = weight / (heightM * heightM);

    document.getElementById('result').innerHTML = `BMI: ${bmi.toFixed(1)}`;
    document.getElementById('result').style.display = 'block';
}
