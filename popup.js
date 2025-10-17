document.getElementById("summarizeBtn").addEventListener("click", async () => {
    const loader = document.getElementById("loader");
    const output = document.getElementById("output");
  
    loader.style.display = "block"; 
    output.innerText = "";     
  
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => document.body.innerText
    }, async (results) => {
      const text = results[0].result.slice(0, 4000);
  
      try {
        const response = await fetch("http://localhost:4000/summarize", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text })
        });
  
        const data = await response.json();
        const summary = data.choices[0].message.content;
  
        output.innerText = summary;
      } catch (err) {
        console.error(err);
        output.innerText = "Error: " + err.message;
      } finally {
        loader.style.display = "none";
      }
    });
  });
  
