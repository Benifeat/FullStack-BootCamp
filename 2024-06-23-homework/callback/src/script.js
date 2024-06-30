function scheduleCarService(carModel, serviceType, callback) {
    showInHTML(`Thank you! Your ${carModel}'s ${serviceType} service has been scheduled.`);
  
    setTimeout(() => {
      showInHTML("We're starting to perform the service ...");
  
      setTimeout(() => {
        const msg = `Your ${serviceType} service for ${carModel} is now complete`;
        callback(msg);
      }, 1000);
    }, 1500);
  }
  

  function showInConsole(message) {
    console.log(message);
  }
  
  function showAlert(message) {
    alert(message);
  }
  
  function showInHTML(message) {
    document.body.innerHTML += `<p>${message}</p>`;
  }
  
  scheduleCarService("Buggati Chiron", "oil change", showInConsole);
  scheduleCarService("Nissan Skyline", "flat tire", showAlert);
  scheduleCarService("Ford Mustang", "change engine", showInHTML);
  