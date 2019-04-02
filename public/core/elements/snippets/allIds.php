<?php
$row = $modx->getCollection('modResource', array());
$resArray = $row;
$resources = array();
foreach($resArray as $res) {
  if ($res instanceof modResource) {
    $resources[] = $res->get('pagetitle') . '==' . $res->get('id');
  }
}
$out = implode("||",$resources);
return $out;