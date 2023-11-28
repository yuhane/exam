document.getElementById('calculateButton').addEventListener('click', calculateDays);

function calculateDays() {
    const datePicker = document.getElementById('datePicker');
    const selectedDate = new Date(datePicker.value);
    const currentDate = new Date();
    
    const eventName = document.getElementById('eventName').value;
    
    const timeDifference = selectedDate - currentDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    
    if (daysDifference === 0) {
        document.getElementById('result').textContent = `今日は${eventName}です！`;
    } else if (daysDifference < 0) {
        document.getElementById('result').textContent = `過去の日付です。`;
    } else {
        document.getElementById('result').textContent = `${eventName}まであと${daysDifference}日`;
    }
}
