<?php
class formHandler {

  private $allPostVars;
  private $modx;
  private $newInputsArray = array();

  public function __construct($modx) {
    $this->allPostVars = $_POST;
    $this->modx = $modx;
    // $this->logFormVars($this->allPostVars);

    $newInputsArray = array();
    foreach($this->allPostVars as $key => $value) {
      $value = htmlspecialchars($value);
        $key = htmlspecialchars($key);
      $newInputsArray[$key] = $value;
    }


      $this->emailSend($this->modx, $newInputsArray);
      // $this->writeToExcel($validatedInputs);
  }



  private function emailSend($modx, $inputs){

    require_once MODX_CORE_PATH.'/elements/snippets/EmailManager.php';

    $emailManager = new emailManager($modx, $inputs);
    if($emailManager == true) {
      return true;
    }
  }

  private function writeToExcel($vars) {

  }

  private function logFormVars($var) {
    if(!empty($var)){
      $outputToLog = print_r($var, true);

      $this->modx->log(modX::LOG_LEVEL_ERROR, $outputToLog);
    } else {
      return 'variable is empty or not valid';
    }

  }

  private function form($key){
    if(!empty($_POST[$key])){
      return $_POST[$key];
    }
    return false;
  }
}

$formHandler = new formHandler($modx);

// $pageIdToRidirect = $modx->getOption('redirectTo', $scriptProperties);
//
// $modx->log(modX::LOG_LEVEL_ERROR, $pageIdToRidirect);

// header('location', )


//testing modx log
// $modx->log(modX::LOG_LEVEL_ERROR, print_r($_POST, true));