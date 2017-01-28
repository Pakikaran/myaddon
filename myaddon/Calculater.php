<html>
<head>
<SCRIPT TYPE="text/javascript">
  function popup(mylink, windowname) { 
    if (! window.focus)return true;
    var href;
    if (typeof(mylink) == 'string') href=mylink;
    else href=mylink.href; 
    window.open(href, windowname, 'width=400,height=200,scrollbars=yes'); 
    return false; 
  }
</SCRIPT>
</head>
<body>
<h1>Calculater</h1>
 
<p><a href="default_popup": "scientificCalculater.html">SimpleCalculater</a></p>
<p><a href="JavaScript:popup('scientificCalculater.html',280,300)">Scientific Calculater</a></p>
 </body>
 </html>