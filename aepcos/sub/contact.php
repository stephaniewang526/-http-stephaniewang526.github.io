<?php include 'header.php';?>
    <!-- Page Content -->
    <div class="container">

        <!-- Page Heading/Breadcrumbs -->
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Contact Us
                </h1>
                <ol class="breadcrumb">
                    <li><a href="../index.php">Home</a>
                    </li>
                    <li class="active">Contact</li>
                </ol>
            </div>
        </div>
        <!-- /.row -->

        <!-- Content Row -->
        <div class="row">
            <!-- Contact Details Column -->
            <div class="col-md-4">
                <h3>Contact Details</h3>
                <p><i class="fa fa-envelope-o"></i> 
                    <abbr title="Email">E</abbr>: <a href="mailto:info@ae-society.org">info@ae-society.org</a>
                </p>
            </div>
       
            <div class="col-md-8">
                <h3>Send us a Message</h3>
                <form action="send_form_email.php" name="contact" id="contactForm">
                    <div class="form-horizontal">
                        <div class="controls">
                            <label>Full Name:</label>
                            <input name="name" type="text" class="form-control" id="name" required data-validation-required-message="Please enter your name.">
                            <p class="help-block"></p>
                        </div>
                    </div>
                    <div class="form-horizontal">
                        <div class="controls">
                            <label>Phone Number:</label>
                            <input name="telephone" type="tel" class="form-control" id="phone" required data-validation-required-message="Please enter your phone number.">
                        </div>
                    </div>
                    <div class="form-horizontal">
                        <div class="controls">
                            <label>Email Address:</label>
                            <input name="email" type="email" class="form-control" id="email" required data-validation-required-message="Please enter your email address.">
                        </div>
                    </div>
                    <div class="form-horizontal">
                        <div class="controls">
                            <label>Message:</label>
                            <textarea name="comments" rows="10" cols="100" class="form-control" id="message" required data-validation-required-message="Please enter your message" maxlength="999" style="resize:none"></textarea>
                        </div>
                    </div><br>
                    <div id="success">
                    </div>
                    <!-- For success/fail messages -->
                    <input type="hidden" name="save" value="contact">
                    <button type="submit" class="btn btn-default">Send Message</button>
                </form>
            </div>
        </div>
    </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
        <hr>
<?php include 'footer.php';?>