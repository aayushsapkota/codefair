<?php
require_once('./vendor/autoload.php');
use Postmark\PostmarkClient;

class emailManager {
  private $inputsArray;
  private $config;
  private $modx;
  private $body;

  public function __construct($modx, $inputs) {
    $this->$inputsArray = $inputs;
    $this->modx = $modx;
    $this->body = $inputs;

    $this->configureEmail();
  }

  public function configureEmail() {
    $token = $this->modx->getOption('postmark_api_token');
    $sendToEmail = $this->modx->getOption('enquiry_email');


    $this->sendEmail($token, $sendToEmail);

  }

  // public function getEmailTemplate($email) {
  //
  // }

  public function sendEmail($token, $sendToEmail) {
    try {
      $client = new PostmarkClient($token);

      $sitename = $this->modx->getOption('site_name');
      if(!empty($this->body)) {
        $this->body = print_r($this->body, true);

      }
      $properties = array('site_name' => $sitename,
                          'message' => $this->body);
      $emailTpl = $this->modx->getChunk('emailTpl', $properties);
      // Send an email:
      $sendResult = $client->sendEmail(
        "no-reply@activeinc.com.au",
        $sendToEmail,
        "Codefair Form Details",
        $emailTpl
      );
      return true;
    } catch(Exception $e){
        $this->modx->log(modX::LOG_LEVEL_ERROR, $e->message);
      return false;
    }
  }
}