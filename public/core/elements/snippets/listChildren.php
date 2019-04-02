<?php
$parent = $modx->getOption('parent',$scriptProperties);
$parentObj = $modx->getObject('modResource',$parent);

//if parent is not modResource return
if (!($parentObj instanceof modResource)) {
  return '';
}

$resArray = $parentObj->getMany('Children');
$resources = array();
foreach($resArray as $res) {
  if ($res instanceof modResource) {
    $resources[] = $res->get('pagetitle') . '==' . $res->get('id');
  }
}
$out = implode("||",$resources);
return $out;