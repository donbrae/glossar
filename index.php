<?php

$years = array(
  'January' => 'Januar',
  'February' => 'Februar',
  'March' => 'Mairch',
  'April' => 'Aprile',
  'May' => 'Mey',
  'June' => 'Juin',
  'July' => 'Julie'
);

$last_updatit = str_replace(
  array_keys($years),
  array_values($years),
  date("j F Y", filemtime("glossar-bundle.min.js"))
);

?>

<!DOCTYPE html>
<html lang="sco">

<head>
    <title>Scots glossar (beta)</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="Description" content="Scots dictionary app: translate words between Scots and English.">

    <!-- opengraph url tag -->
    <meta property="og:type" content="website"/>
    <meta property="og:title" content="Scots glossar"/>
    <meta property="og:description" content="Scots glossar (beta): translate atween Scots an English."/>
    <meta property="og:image" content=""/>

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@makforrit" />
    <meta name="twitter:title" content="Scots glossar" />
    <meta name="twitter:description" content="Scots glossar (beta): translate atween Scots an English." />
    <meta name="twitter:image" content="" />

    <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png">
    <link rel="manifest" href="./site.webmanifest">

    <link rel="icon" href="https://www.makforrit.scot/wp-content/uploads/2017/08/FAK_FORRIT_logo_full_small-100x100.png" sizes="32x32" />
    <link rel="icon" href="https://www.makforrit.scot/wp-content/uploads/2017/08/FAK_FORRIT_logo_full_small.png" sizes="192x192" />
    <link rel="apple-touch-icon-precomposed" href="https://www.makforrit.scot/wp-content/uploads/2017/08/FAK_FORRIT_logo_full_small.png" />
    <meta name="msapplication-TileImage" content="https://www.makforrit.scot/wp-content/uploads/2017/08/FAK_FORRIT_logo_full_small.png" />

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="app.css?_=1594064612">

    <script src="zepto.min.js"></script>
    <script src="fuse.basic.min.js"></script>

    <!-- Production JS bundle -->
    <script defer src="glossar-bundle.min.js?_=1594066180" onload="GLOSSAR.init()"></script>

</head>

<body>
    <!-- Begin page content -->
    <main role="main" class="container">
        <header>
            <img src="favicon-ui.png" alt="Robot icon with speech bubbles">
            <h1 class="mt-5"><label for="searchTextbox">Scots glossar<sup>beta</sup></label></h1>
        </header>
        <section id="search">
            <div class="form-group form-inline justify-content-center">
                <div class="input-group w-75">
                    <input type="text" class="form-control mx-auto" id="searchTextbox" placeholder="Inpit Scots or English…" spellcheck="false">
                    <button class="btn bg-transparent fade" id="clear-value">
                        <i class="demo-icon icon-cancel"></i>
                        <span class="sr-only">Clear value of field</span>
                    </button>
                </div>
            </div>
            <div class="text-center">
                <button id="random" class="btn-link-gray">…or wale oot a wird allevolie</button>
            </div>

            <ul id="result" class="result fade"></ul>

        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <span class="text-muted">Scots glossar (beta). <?php echo "Last updatit: $last_updatit"; ?>. Nae cookies.</span>
        </div>
    </footer>
</body>

</html>
