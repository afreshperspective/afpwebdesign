<?php 
	$errors = '';
	$myemail = 'david@afpwebdesign.com';//email must be created in cpanel email accounts

	$name = $_POST['name']; 
	$email_address = $_POST['email']; 
	$company = $_POST['company']; 
	$message = $_POST['message']; 

	$to = $myemail; 
	$email_subject = "Contact form submission: $name";
	$email_body = "You have received a new message. ".
	" Here are the details:\n Name: $name \n Email: $email_address \n Company: $company \n Message \n $message"; 
		
	$headers = "From: $myemail\n"; 
	$headers .= "Reply-To: $email_address";
		
	mail($to,$email_subject,$email_body,$headers);
	//redirect to the 'thank you' page
?>
