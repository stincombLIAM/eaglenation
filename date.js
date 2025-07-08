function updateDateTime() {
    const now = new Date();
    
    const year = now.getFullYear();
    const month = now.toLocaleString('default', { month: 'long' });
    const day = now.getDate();
    let hour = now.getHours();
    const minute = String(now.getMinutes()).padStart(2, '0');
    const second = String(now.getSeconds()).padStart(2, '0');
    const milliseconds = String(Math.floor(now.getMilliseconds() / 10)).padStart(2, '0');
    
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? String(hour).padStart(2, '0') : '12';
    
    const formattedDateTime = `${month} ${day}, ${year} ${hour}:${minute}:${second}.${milliseconds} ${ampm}`;
    
    document.getElementById('datetime').textContent = formattedDateTime;
}

updateDateTime();

setInterval(updateDateTime, 10);