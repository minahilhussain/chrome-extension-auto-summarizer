# Auto Summarizer Chrome Extension

Auto Summarizer is a Chrome extension that allows you to quickly summarize any web page using AI. The extension fetches the main text of the page and sends it to a backend server which communicates with the OpenAI API to generate a concise summary.

---

## **Folder Structure**

```
autoSummarizer/
│
├── backend/ # Node.js backend
│ ├── server.js # Backend server code
│ ├── package.json
│ ├── node_modules/
│ └── .env # Your OpenAI API key
│
├── popup.html # Chrome extension popup
├── popup.js
├── manifest.json
├── styles.css
└── .gitignore
```


---

## **Features**

- Summarizes the main content of any web page.
- Works with local backend to securely handle OpenAI API key.
- Shows a loading indicator while the summary is being generated.
- Eventually Shows the summary that is AI generated.

---

## **Setup Instructions**

### **1. Clone the repository**
```bash
git clone https://github.com/minahilhussain/chrome-extension-auto-summarizer.git
cd autosummarizer
```

### **2. Setup the backend**

1. Navigate to the backend folder:
```
cd backend
```
2. Install dependencies:
```
npm install
```
3. Create a .env file in the backend/ folder and add your OpenAI API key:
```
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxx
```
Replace sk-xxxxxxxxxxxx with your OpenAI API key.

4. Start the backend server:
```
node server.js
```

You should see: Server running on port 4000

### 3. Load the Chrome Extension

1. Open Chrome and navigate to:
```
chrome://extensions
```
2. Enable Developer Mode (toggle in top right).
3. Click Load unpacked and select the main folder autosummarizer (not the backend folder).
4. The extension icon should appear in the toolbar.

### 4. Use the Extension

1. Open any web page.
2. Click the Auto Summarizer icon in the toolbar.
3. Click the Summarize Page button.
4. Wait a few seconds while the summary is generated. A loader will be visible during this time.
5. Your summary will appear in the popup.

### Dependencies
Backend
- Node.js
- Express
- node-fetch
- dotenv
- cors

Chrome Extension
- Chrome (supports Manifest V3)
- popup.html, popup.js, styles.css
