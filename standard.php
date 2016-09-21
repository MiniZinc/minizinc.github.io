<?php

function mznheader($title,$section,$relative="",$additionalhdr="") {
  $homeactive = '';
  $softwareactive = '';
  $resourcesactive = '';
  $challengeactive = '';
  switch ($section) {
  case "home":
    $homeactive = 'class="active"';
    break;
  case "software":
    $softwareactive = 'class="active"';
    break;
  case "resources":
    $resourcesactive = 'class="active"';
    break;
  case "challenge":
    $challengeactive = 'class="active"';
    break;
  }
?>
<!DOCTYPE html
	PUBLIC "-//W3C//DTD HTML 4.01//EN"
	"http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
  <link href='http://fonts.googleapis.com/css?family=Droid+Sans:400,700' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" type="text/css" href="<?=$relative?>style.css" />
  <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,400,300' rel='stylesheet' type='text/css'>
  
  <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png">
  <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
  
<title><?php print($title);?></title>
<?php print($additionalhdr); ?>
</head>

<script src="/jquery-1.11.3.min.js"></script>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-63390311-1', 'auto');
  ga('send', 'pageview');
    
</script>

<body>


<div id="container">
  <div id="header">
    <div style="float:left; padding-left:0em; padding-bottom:2em; padding-right:1em;">
    <a href="/">
    <img src="<?=$relative?>../MiniZn_logo.jpg" alt="[MiniZinc]" width="160">
    </a>
    </div>
    <div style="float: right; padding-left:2em; padding-bottom:2em; padding-right:1em;">
    <a class="logo-title-a" href="http://org.nicta.com.au"><span class="logo-title"><span>O</span>ptimisation <span>R</span>esearch <span>G</span>roup</span></a>
    <a href="http://www.nicta.com.au"><img src="<?=$relative?>../nicta-header-logo.png" alt="[Imagined by NICTA]" width="124"></a>
    </div>
    <div style="clear:both;"></div>
  </div>
  <div id="navigation">
    <ul>
      <li><a <?=$homeactive?> href="<?=$relative?>index.html">Home / News</a></li>
      <li><a <?=$softwareactive?> href="<?=$relative?>software.html">Software</a></li>
      <li><a <?=$resourcesactive?> href="<?=$relative?>resources.html">Resources</a></li>
      <li><a <?=$challengeactive?> href="<?=$relative?>challenge.html">Challenge</a></li>
      <li><a href="/forum">Forum</a></li>
      <li><a href="https://github.com/MiniZinc/libminizinc/issues">Bugs</a></li>
    </ul>
  </div>
  <div id="content">

<?php
}

function mznfooter() {
?>
  </div>
  <div id="footer">
    &copy;<a href="http://www.nicta.com.au">NICTA</a>, 2014, 2015
  </div>
</div>
<script>
jQuery('.download').attr("target","_blank");
jQuery('.download').on('click',function() {
  targetHref = $(this).attr('href');
  targetFilename = targetHref.split('/').reverse()[0];
  ga('send','event',targetFilename,'download'); setTimeout(function() { location.href=targetHref }, 200);return false;});
</script>
</body>
</html>
<?php
}
?>