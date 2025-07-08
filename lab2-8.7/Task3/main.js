function getDayName(dateString) {
    const date = new Date(dateString);
    const dayNames = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    return dayNames[date.getDay()];
}
function getDayNameAlt(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
}

function showDayName() {
    const dateInput = document.getElementById('dateInput');
    const resultDiv = document.getElementById('result');

    if (dateInput.value.trim() === '') {
        alert('Please enter a date!');
        return;
    }

    try {
        const dayName = getDayName(dateInput.value);
        resultDiv.innerHTML = `<strong>${dateInput.value}</strong> falls on a <strong>${dayName}</strong>`;
        resultDiv.style.display = 'block';
    } catch (error) {
        resultDiv.innerHTML = `<span style="color: red;">Invalid date format. Please try a different format.</span>`;
        resultDiv.style.display = 'block';
    }
}

document.getElementById('dateInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        showDayName();
    }
});