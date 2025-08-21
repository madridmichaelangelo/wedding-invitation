document.getElementById('contactRSVP').addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = {
    completename: e.target.completename.value,
    emailaddress: e.target.emailaddress.value,
    attendance: e.target.attendance.value,
    specialmessage: e.target.specialmessage.value
  };

  fetch("https://script.google.com/macros/s/AKfycbyubk2A3MO2WF1LOc5VlYoBTUidtdQo7weXdTkqrliohxmWn8-qcC4_lYEvDtHfYmwz/exec", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: { "Content-Type": "application/json" }
  })
  .then(() => alert("Response saved successfully!"))
  .catch(err => {
    alert("Error: " + err);
    console.error(err);
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


