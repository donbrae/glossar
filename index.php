<!-- <?php

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

$last_updatit_unix = date("U", filemtime("glossar-bundle.min.js"));

?> -->

<!DOCTYPE html>
<html lang="sco">

<head>
    <title>Scots.app (beta)</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="Description" content="Scots dictionary app: translate words between Scots and English.">

    <!-- opengraph url tag -->
    <meta property="og:type" content="website"/>
    <meta property="og:title" content="Scots glossar"/>
    <meta property="og:description" content="Scots glossar (beta): translate atween Scots an English."/>
    <meta property="og:image" content="https://scots.app/social.jpg"/>

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@makforrit" />
    <meta name="twitter:title" content="Scots glossar" />
    <meta name="twitter:description" content="Scots glossar (beta): translate atween Scots an English." />
    <meta name="twitter:image" content="https://scots.app/social.jpg" />

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="./bootstrap.pure.css?_=1594651064">
    <link rel="stylesheet" href="app.css?_=1594926991">

    <script src="./zepto.min.js?v=1.2.0"></script>
    <script src="./fuse.basic.min.js?v=6.4.0"></script>

    <!-- Production JS bundle -->
    <script defer src="glossar-bundle.min.js?_=1594926646" onload="GLOSSAR.init()"></script>

</head>

<body>
    <!-- Begin page content -->
    <main role="main" class="container">
        <header>
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
            <div class="text-muted">Scots glossar (beta). Last updatit: <span class="last-updatit" data-updatit="<?php echo $last_updatit_unix; ?>"><?php echo $last_updatit; ?></span>.<br>Nae trackin cookies.</div>
            <div class="update-link d-none">
                <button class="btn btn-primary get-update">Update available. Refresh noo!</button>
            </div>
        </div>
    </footer>
</body>

</html>
