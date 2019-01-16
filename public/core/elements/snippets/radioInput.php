<?php
$migxPlaceholder = $modx->getOption('placeholder',$scriptProperties,'');
$name = $modx->getOption('name', $scriptProperties, '');

if(!empty($migxPlaceholder)){

  $tempArr = json_decode($migxPlaceholder, true);

  foreach($tempArr as $key => $value) {
    echo "<label class='form__label'><input type='radio' name='".$name."' value=".$value['option'].">".$value['option']."</label>";
  }

}