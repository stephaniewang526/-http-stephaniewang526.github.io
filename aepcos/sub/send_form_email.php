<?php
include 'header.php';

if(isset($_POST['email'])) {
    $email_to = "qw79@cornell.edu"; /*info@ae-society.org*/
    $email_subject = "Androgen Excess and PCOS Society Inquiry";
    function died($error) {
       ?> 
        <div class="box">
        <div class="col-lg-12">
          <?php echo "We are very sorry, but there were error(s) found with the form you submitted. ";
          echo "These errors appear below.<br /><br />";
          echo $error."<br />";
          echo "Please go back and fix the errors.<br/>";
          die();
          ?>
        </div>
        </div>
        <?php
    }
    // validation expected data exists
    if(!isset($_POST['name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['telephone']) ||
        !isset($_POST['comments'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }
    $name = $_POST['name']; // required
    $email_from = $_POST['email']; // required
    $telephone = $_POST['telephone']; // not required
    $comments = $_POST['comments']; // required
    $error_message = "";
 
  if(!filter_var($email,FILTER_VALIDATE_EMAIL)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
    $string_exp = "/^[A-Za-z .'-]+$/";
  if(!preg_match($string_exp,$name)) {
    $error_message .= 'The Name you entered does not appear to be valid.<br />';
  }
  if(strlen($comments) < 2) {
    $error_message .= 'The Message you entered do not appear to be valid.<br />';
  }
  if(strlen($error_message) > 0) {
    died($error_message);
  }
    
    $email_message = "Form details below.\n\n";
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Telephone: ".clean_string($telephone)."\n";
    $email_message .= "Message: ".clean_string($comments)."\n";
    // create email headers
    $headers = 'From: '.$email_from."\r\n".
    'Reply-To: '.$email_from."\r\n" .
    'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);
?>
<div class="row">
    <div class="box">
        <div class="col-lg-12">
                <p>Thank you for contacting us. We will be in touch with you very soon.</p>
        </div>
    </div>
</div>
<?php
}
include 'footer.php';
?>