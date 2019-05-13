<?php
    //readfile($_POST['pagina'] . '.html');
    if ($_POST['pagina'] == 'pagina1')
        readfile('pagina1.html');
    else
        readfile('pagina2.html');
?>