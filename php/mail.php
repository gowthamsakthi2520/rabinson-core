<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
require_once "../vendor/autoload.php";

session_start();
// $captcha = $_POST["captcha"];
// $captchaUser = filter_var($_POST["captcha"], FILTER_SANITIZE_STRING);
// if($_SESSION['CAPTCHA_CODE'] == $captchaUser){
if($_POST['captcha_valid'] !=""){
$mail = new PHPMailer(true);
//Enable SMTP debugging.
$mail->SMTPDebug = 2;                               
//Set PHPMailer to use SMTP.
$mail->isSMTP();            
//Set SMTP host name                          
$mail->Host = "mail.oceansoftwares.in";
//Set this to true if SMTP host requires authentication to send email
$mail->SMTPAuth = true;                          
//Provide username and password     
$mail->Username = "gowtham@oceansoftwares.in";                 
$mail->Password = "Ocean@123456";                           
//If SMTP requires TLS encryption then set it
$mail->SMTPSecure = "ssl";                           
//Set TCP port to connect to
$mail->Port = 465;                                   
$mail->From = $_POST["email"];
$mail->FromName = $_POST["name"];
$mail->addAddress("gowthamsakthi2520@gmail.com", "ocean softwares");
$mail->isHTML(true);
$mail->Subject = "Robinson homes ".$_POST['type']." Form";

// NAME
    $name = $_POST["name"];
// NUMBER
    $number = $_POST["number"];
// EMAIL
    $email = $_POST["email"];
// CITY
    $city = $_POST["city"];

	if($_POST['type']== "Calculate cost"){
       
		// sqft_1
		$sqft_1 = $_POST["sqft_1"];
		// sqft-_2
			$sqft_2 = $_POST["sqft_2"];
		// sqft_3
			$sqft_3 = $_POST["sqft_3"];
	}
// MESSAGE
    // $message = $_POST["message"];

// prepare email body text
$Body = "";
$Body .= "<table>";
$Body .= "<tr>";
$Body .= "<th>";
$Body .= "Name";
$Body .= "</th>";
$Body .= "<td>";
$Body .= " : ";
$Body .= "</td>";
$Body .= "<td>";
$Body .= $name;
$Body .= "</td>";
$Body .= "</tr>";

$Body .= "<tr>";
$Body .= "<th>";
$Body .= "Number";
$Body .= "</th>";
$Body .= "<td>";
$Body .= " : ";
$Body .= "</td>";
$Body .= "<td>";
$Body .= $number;
$Body .= "</td>";
$Body .= "</tr>";

$Body .= "<tr>";
$Body .= "<th>";
$Body .= "Email";
$Body .= "</th>";
$Body .= "<td>";
$Body .= " : ";
$Body .= "</td>";
$Body .= "<td>";
$Body .= $email;
$Body .= "</td>";
$Body .= "</tr>";
// Calculate cost 

if($_POST['type']== "Calculate cost"){
	$Body .= "<tr>";
	$Body .= "<th>";
	$Body .= "sqft_1";
	$Body .= "</th>";
	$Body .= "<td>";
	$Body .= " : ";
	$Body .= "</td>";
	$Body .= "<td>";
	$Body .= $sqft_1;
	$Body .= "</td>";
	$Body .= "</tr>";

	$Body .= "<tr>";
	$Body .= "<th>";
	$Body .= "sqft_2";
	$Body .= "</th>";
	$Body .= "<td>";
	$Body .= " : ";
	$Body .= "</td>";
	$Body .= "<td>";
	$Body .= $sqft_2;
	$Body .= "</td>";
	$Body .= "</tr>";

	$Body .= "<tr>";
	$Body .= "<th>";
	$Body .= "sqft_3";
	$Body .= "</th>";
	$Body .= "<td>";
	$Body .= " : ";
	$Body .= "</td>";
	$Body .= "<td>";
	$Body .= $sqft_3;
	$Body .= "</td>";
	$Body .= "</tr>";
}

$Body .= "<tr>";
$Body .= "<th>";
$Body .= "Location";
$Body .= "</th>";
$Body .= "<td>";
$Body .= " : ";
$Body .= "</td>";
$Body .= "<td>";
$Body .= $city;
$Body .= "</td>";
$Body .= "</tr>";
// $Body .= "<tr>";
// $Body .= "<th>";
// $Body .= "Message";
// $Body .= "</th>";
// $Body .= "<td>";
// $Body .= " : ";
// $Body .= "</td>";
// $Body .= "<td>";
// $Body .= $message;
// $Body .= "</td>";
// $Body .= "</tr>";



$mail->Body = $Body;
try {
    $mail->send();
    echo "success";
} catch (Exception $e) {
}
}
else{
    echo 'captcha_invalid';
}
