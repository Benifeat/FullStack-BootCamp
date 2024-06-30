function orderBook(author, bookName, callback) {
    addMessage(`Thanks, we've got your order of ${bookName} by ${author}`);
  
    setTimeout(() => {
      addMessage("We're starting to prepare your order ...");
  
      setTimeout(() => {
        let msg = `The order of ${bookName} by ${author} is ready`;
        callback(msg);
      }, 2000);
    }, 1000);
  }
  
  function showInConsole(message) {
    console.log(message);
    addMessage(message);
  }
  
  function showAlert(message) {
    alert(message);
    addMessage(message);
  }
  
  function addMessage(message) {
    const messagesDiv = document.getElementById("messages");
    const messageSpan = document.createElement("span");
    messageSpan.textContent = message;
    messagesDiv.appendChild(messageSpan);
    messagesDiv.appendChild(document.createElement("br"));
  }
  
  orderBook("Marry Loo", "Warcross", showInConsole);
  orderBook("Marry Loo", "Wildcard", showAlert);