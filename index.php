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
  date("d F Y", filemtime("glossar-bundle.min.js"))
);

?>

<!DOCTYPE html>
<html lang="sco">

<head>
    <title>Glossar</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- opengraph url tag -->
    <meta property="og:type" content="website"/>
    <meta property="og:title" content="Scots Glossar"/>
    <meta property="og:description" content="Mak Forrit Scots glossar. Translate atween Scots an English."/>
    <meta property="og:image" content="https://glossar.makforrit.scot/social_image.jpg"/>

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@makforrit" />
    <meta name="twitter:title" content="Scots Glossar" />
    <meta name="twitter:description" content="Mak Forrit Scots glossar. Translate atween Scots an English." />
    <meta name="twitter:image" content="https://glossar.makforrit.scot/social_image.jpg" />

    <link rel="icon" href="https://www.makforrit.scot/wp-content/uploads/2017/08/FAK_FORRIT_logo_full_small-100x100.png" sizes="32x32" />
    <link rel="icon" href="https://www.makforrit.scot/wp-content/uploads/2017/08/FAK_FORRIT_logo_full_small.png" sizes="192x192" />
    <link rel="apple-touch-icon-precomposed" href="https://www.makforrit.scot/wp-content/uploads/2017/08/FAK_FORRIT_logo_full_small.png" />
    <meta name="msapplication-TileImage" content="https://www.makforrit.scot/wp-content/uploads/2017/08/FAK_FORRIT_logo_full_small.png" />

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="app.css?ts=200426071229">

    <script src="zepto.min.js"></script>
    <script src="fuse.min.js"></script>

    <!-- Production JS bundle -->
    <script defer src="glossar-bundle.min.js?ts=1587928834" onload="GLOSSAR.init()"></script>

</head>

<body>
    <!-- Begin page content -->
    <main role="main" class="container">
        <h1 class="mt-5 text-center"><label for="searchTextbox">Scots glossar</label></h1>
        <section id="search">
            <div class="form-group form-inline justify-content-center">
                <div class="input-group w-75">
                    <input type="text" class="form-control mx-auto" id="searchTextbox" placeholder="Inpit Scots or English…" spellcheck="false">
                    <button class="btn bg-transparent fade" id="clear-value">
                        <i class="demo-icon icon-cancel"></i>
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
            <span class="text-muted"><a href="https://makforrit.scot">Mak Forrit</a> glossar tuil (prototype). <?php echo "Last updatit: $last_updatit"; ?>. Nae cookies.</span>
        </div>
    </footer>
</body>

</html>
