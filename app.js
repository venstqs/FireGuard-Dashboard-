// @ts-nocheck

function updateTime() {
  document.getElementById("time").innerText =
    new Date().toLocaleTimeString();
}

function addLog(msg) {
  const li = document.createElement("li");
  li.innerText = `${new Date().toLocaleTimeString()} - ${msg}`;
  document.getElementById("logList").prepend(li);
}

function updateRisk(level) {
  const circle = document.getElementById("riskCircle");
  const severity = document.getElementById("severity");

  circle.innerText = level + "%";

  if (level < 30) {
    circle.style.background = "#22c55e";
    severity.innerText = "Severity: LOW";
  } else if (level < 70) {
    circle.style.background = "#f59e0b";
    severity.innerText = "Severity: MEDIUM";
  } else {
    circle.style.background = "#ef4444";
    severity.innerText = "Severity: CRITICAL";
  }
}

function triggerFire() {
  document.getElementById("statusText").innerText = "🔥 FIRE ALERT!";
  document.getElementById("statusCard").className = "status-card alert";
  document.getElementById("confidence").innerText = "85%";

  document.getElementById("temp").innerText = "68 °C";
  document.getElementById("hum").innerText = "20 %";
  document.getElementById("gas").innerText = "Detected";
  document.getElementById("smoke").innerText = "Detected";
  document.getElementById("ir").innerText = "Detected";

  document.getElementById("aiStatus").innerText = "🔥 FIRE DETECTED";
  document.getElementById("aiStatus").className = "ai-alert";
  document.getElementById("aiConfidence").innerText = "92%";

  document.getElementById("fusionList").innerHTML = `
    <li>MQ-6: TRIGGERED</li>
    <li>MQ-9: TRIGGERED</li>
    <li>LDR: TRIGGERED</li>
    <li>IR Sensor: TRIGGERED</li>
    <li>DHT11: HIGH TEMP</li>
    <li>AI Vision: FIRE CONFIRMED</li>
  `;

  updateRisk(92);
  addLog("Fire detected. Alarm triggered.");
  updateTime();
}

function resetSystem() {
  document.getElementById("statusText").innerText = "SYSTEM NORMAL";
  document.getElementById("statusCard").className = "status-card safe";
  document.getElementById("confidence").innerText = "0%";

  document.getElementById("temp").innerText = "32 °C";
  document.getElementById("hum").innerText = "68 %";
  document.getElementById("gas").innerText = "Normal";
  document.getElementById("smoke").innerText = "Normal";
  document.getElementById("ir").innerText = "Normal";

  document.getElementById("aiStatus").innerText = "NO FIRE DETECTED";
  document.getElementById("aiStatus").className = "ai-safe";
  document.getElementById("aiConfidence").innerText = "0%";

  document.getElementById("fusionList").innerHTML = `
    <li>MQ-6: Normal</li>
    <li>MQ-9: Normal</li>
    <li>LDR: Normal</li>
    <li>IR Sensor: Normal</li>
    <li>DHT11: Normal</li>
    <li>AI Vision: Standby</li>
  `;

  updateRisk(0);
  addLog("System reset.");
  updateTime();
}

function toggleDark() {
  document.body.classList.toggle("dark");
}

updateTime();

