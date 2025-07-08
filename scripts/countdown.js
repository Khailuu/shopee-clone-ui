export function startCountdown(targetId, seconds) {
  let remaining = seconds;

  function update() {
    const hours = String(Math.floor(remaining / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((remaining % 3600) / 60)).padStart(2, '0');
    const sec = String(remaining % 60).padStart(2, '0');
    document.getElementById(targetId).textContent = `${hours}:${minutes}:${sec}`;

    if (remaining > 0) {
      remaining--;
    }
  }

  update();
  setInterval(update, 1000);
}
