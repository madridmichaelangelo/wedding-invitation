const scriptURL = 'https://script.google.com/macros/s/AKfycbz-V6jbWtChK6mIz91lAIaWymyz7UWiedhR6AV7HZe-v8RE5KwZ2KVnt7Sbz7bCQc3O/exec';
const form = document.forms['rsvpform'];
const loadingOverlay = document.getElementById('loadingOverlay');

form.addEventListener('submit', e => {
  e.preventDefault();

  // Show loader
  loadingOverlay.style.display = "flex";

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      alert("Submitted, thank you!");
      form.reset();
    })
    .catch(error => {
      console.error('Error!', error.message);
      alert("Error submitting response. Please try again.");
    })
    .finally(() => {
      // Hide loader
      loadingOverlay.style.display = "none";
      window.location.href = "index.html";
    });
});

 /*	let output = "";

	output += (formData.get('completename') || 'Not provided') + "\n";
	output += (formData.get('emailaddress') || 'Not provided') + "\n";
	output +=  (formData.get('attendance') || 'Not selected') + "\n";
	output +=  (formData.get('specialmessage') || 'Not Provided') + "\n";
	
	alert("Thank you for your response!");
	//for downloading the content to notepad
  const blob = new Blob([output], { type: "text/plain" });
      const link = document.createElement("a");
	link.href = URL.createObjectURL(blob);
	link.download = "reservation_confirmed.txt";
	link.click();

URL.revokeObjectURL(link.href); */

//this will be stored to GoogleSheet for manual confirmation

