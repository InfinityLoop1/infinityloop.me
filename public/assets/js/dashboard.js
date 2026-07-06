document.addEventListener("DOMContentLoaded", () => {
  const savedKey = localStorage.getItem("statusKey");
  if (savedKey) {
    document.getElementById("key").value = savedKey;
  }

  document.getElementById("statusForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const status = document.getElementById("status").value;
    const key = document.getElementById("key").value;
    const responseMsg = document.getElementById("responseMsg");

    localStorage.setItem("statusKey", key);

    try {
      const response = await fetch(`https://status.api.infinityloop.me/status?key=${encodeURIComponent(key)}`, {
        method: "POST",
        body: status,
      });

      const text = await response.text();
      responseMsg.textContent = response.ok ? "✅ " + text : "❌ " + text;
    } catch (err) {
      responseMsg.textContent = "❌ Error: " + err.message;
    }
  });
});
