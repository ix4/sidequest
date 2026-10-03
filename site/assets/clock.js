const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const pad = value => String(value).padStart(2, '0');
function updateTime() {
  const now = new Date();
  document.querySelector('#time').textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  document.querySelector('#date').textContent = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${days[now.getDay()]}`;
}
updateTime();
setInterval(updateTime, 1000);
document.addEventListener('visibilitychange', () => { if (!document.hidden) updateTime(); });
