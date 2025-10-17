body {
    font-family: Arial, sans-serif;
    width: 300px;
    padding: 10px;
  }
  
  button {
    width: 100%;
    padding: 8px;
    background-color: #4a90e2;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
  
  #output {
    margin-top: 10px;
    font-size: 14px;
    white-space: pre-wrap;
  }
  
  #loader {
    margin: 0, auto;
    margin-top: 10px;
    width: 30px;
    height: 30px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #4a90e2;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  
