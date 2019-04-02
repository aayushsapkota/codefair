<?php
class formHandler {

  private $allPostVars;
  private $modx;
  private $newInputsArray = array();

  public function __construct($modx) {
    // $this->allPostVars = $_POST;
    $this->modx = $modx;
    // $this->logFormVars($this->allPostVars);

    $newInputsArray = array();
    if(isset($_POST['formFields'])){

      $newInputsArray = $_POST['formFields'];
      $input = json_decode($newInputsArray);




      $finalInput = "";
      foreach((array)$input as $key => $value){
        $value = json_decode(json_encode($value), True);
        $finalInput .= "<h4>".$value['name']."</h4>"."<p>".$value['value']."</p>";
      }

      $this->emailSend($this->modx, $finalInput);
      unset($_POST['formFields']);
    };


      // $this->writeToExcel($validatedInputs);
  }



  private function emailSend($modx, $inputs){

    require_once MODX_CORE_PATH.'/elements/snippets/EmailManager.php';

    $emailManager = new emailManager($modx, $inputs);
  }

  private function form($key){
    if(!empty($_POST[$key])){
      return $_POST[$key];
    }
    return false;
  }
}

$formHandler = new formHandler($modx);
return true;