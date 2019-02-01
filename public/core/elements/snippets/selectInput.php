<?php
$migxPlaceholder = $modx->getOption('placeholder',$scriptProperties,'');

if(!empty($migxPlaceholder)){

  $tempArr = json_decode($migxPlaceholder, true);

  foreach($tempArr as $key => $value) {
    echo "<option value='{$value['option']}'>".$value['option']."</option>";
  }

}