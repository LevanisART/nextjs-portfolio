<?php
$errors = '';
$myemail = 'levani.qotolashvili@gmail.com';
if(empty($_POST['name'])  ||
   empty($_POST['email'])  ||
   empty($_POST['subject']))
{
    $errors .= "\n Error: all fields are required";
}

$name = $_POST['name'];
$email_address = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
$email_address))
{
    $errors .= "\n Error: E-mail is not correct";
}

if( empty($errors))
{
	$to = $myemail; 
	$email_subject = "Message Levanisart.com: $name";
	$email_body = "You have received new message. ".
	" Full name: $name \n E-mail: $email_address \n Subject: $Subject \n Message: \n $message"; 
	
	$headers = "From: $myemail\n"; 
	$headers .= "Reply-To: $email_address";
	
	mail($to,$email_subject,$email_body,$headers);
	//redirect to the 'thank you' page
	header('Location: thank-you.html');
} 
?>
<!DOCTYPE html>
<html>
<head>
    <title>Contact</title>
</head>

<body>
<!-- This page is displayed only if there is some error -->
<?php
echo nl2br($errors);
?>

</body>
</html>