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

    <style type="text/css">
        /*!
        * Bootstrap v4.0.0 (https://getbootstrap.com)
        * Copyright 2011-2018 The Bootstrap Authors
        * Copyright 2011-2018 Twitter, Inc.
        * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
        * Run through https://purifycss.online on 13 July 2020
        */:root{--blue:#007bff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#dc3545;--orange:#fd7e14;--yellow:#ffc107;--green:#28a745;--teal:#20c997;--cyan:#17a2b8;--white:#fff;--gray:#6c757d;--gray-dark:#343a40;--primary:#007bff;--secondary:#6c757d;--success:#28a745;--info:#17a2b8;--warning:#ffc107;--danger:#dc3545;--light:#f8f9fa;--dark:#343a40;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}*,::after,::before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-ms-overflow-style:scrollbar;-webkit-tap-highlight-color:transparent}footer,header,main,section{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}[tabindex="-1"]:focus{outline:0!important}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}ul{margin-top:0;margin-bottom:1rem}ul ul{margin-bottom:0}small{font-size:80%}sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sup{top:-.5em}a{color:#007bff;text-decoration:none;background-color:transparent;-webkit-text-decoration-skip:objects}a:hover{color:#0066c7;text-decoration:underline}a:not([href]):not([tabindex]){color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover{color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus{outline:0}img{vertical-align:middle;border-style:none}label{display:inline-block;margin-bottom:0}button{border-radius:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}button,input{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}summary{display:list-item;cursor:pointer}[hidden]{display:none!important}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;font-family:inherit;font-weight:500;line-height:1.2;color:inherit}.h1,h1{font-size:2.5rem}.h2,h2{font-size:2rem}.h3,h3{font-size:1.75rem}.h4,h4{font-size:1.5rem}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}.small,small{font-size:80%;font-weight:400}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #c6cacd;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.form-control::-ms-expand{background-color:transparent;border:0}.form-control:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.form-control::-webkit-input-placeholder{color:#6c757d;opacity:1}.form-control::-moz-placeholder{color:#6c757d;opacity:1}.form-control:-ms-input-placeholder{color:#6c757d;opacity:1}.form-control::-ms-input-placeholder{color:#6c757d;opacity:1}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}.form-group{margin-bottom:1rem}.form-text{display:block;margin-top:.25rem}.form-inline{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media (min-width:576px){.form-inline label{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:0}.form-inline .form-group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:0}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .input-group{width:auto}}.btn{display:inline-block;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}.btn:focus,.btn:hover{text-decoration:none}.btn:focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.btn:disabled{opacity:.65}.btn:not(:disabled):not(.disabled){cursor:pointer}.btn:not(:disabled):not(.disabled).active,.btn:not(:disabled):not(.disabled):active{background-image:none}.btn-primary{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:hover{color:#fff;background-color:#0069d9;border-color:#0062cc}.btn-primary:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-primary:disabled{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:not(:disabled):not(.disabled).active,.btn-primary:not(:disabled):not(.disabled):active{color:#fff;background-color:#0062cc;border-color:#005cbf}.btn-primary:not(:disabled):not(.disabled).active:focus,.btn-primary:not(:disabled):not(.disabled):active:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-link{font-weight:400;color:#007bff;background-color:transparent}.btn-link:hover{color:#0066c7;text-decoration:underline;background-color:transparent;border-color:transparent}.btn-link:focus{text-decoration:underline;border-color:transparent;box-shadow:none}.btn-link:disabled{color:#6c757d}.fade{opacity:0;transition:opacity .15s linear}.btn-group{position:relative;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}.btn-group>.btn{position:relative;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto}.btn-group>.btn:hover{z-index:1}.btn-group>.btn:active,.btn-group>.btn:focus{z-index:1}.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group{margin-left:-1px}.btn-group>.btn:first-child{margin-left:0}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;width:100%}.input-group>.form-control{position:relative;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;width:1%;margin-bottom:0}.input-group>.form-control:focus{z-index:3}.input-group>.form-control+.form-control{margin-left:-1px}.input-group>.form-control:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.form-control:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group-text{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:.375rem .75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem}.input-group-text input[type=checkbox],.input-group-text input[type=radio]{margin-top:0}.card{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.card-body{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;padding:1.25rem}.card-title{margin-bottom:.75rem}.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1.25rem}.card-header{padding:.75rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-footer{padding:.75rem 1.25rem;background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125)}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-img{width:100%;border-radius:calc(.25rem - 1px)}.card-group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.card-group>.card{margin-bottom:15px}@media (min-width:576px){.card-group{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap}.card-group>.card{-webkit-box-flex:1;-ms-flex:1 0 0%;flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:first-child{border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:first-child .card-header{border-top-right-radius:0}.card-group>.card:first-child .card-footer{border-bottom-right-radius:0}.card-group>.card:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:last-child .card-header{border-top-left-radius:0}.card-group>.card:last-child .card-footer{border-bottom-left-radius:0}.card-group>.card:only-child{border-radius:.25rem}.card-group>.card:only-child .card-header{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card-group>.card:only-child .card-footer{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card-group>.card:not(:first-child):not(:last-child):not(:only-child){border-radius:0}.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-footer,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-header{border-radius:0}}.page-link{position:relative;display:block;padding:.5rem .75rem;margin-left:-1px;line-height:1.25;color:#007bff;background-color:#fff;border:1px solid #dee2e6}.page-link:hover{color:#0066c7;text-decoration:none;background-color:#e9ecef;border-color:#dee2e6}.page-link:focus{z-index:2;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.page-link:not(:disabled):not(.disabled){cursor:pointer}@-webkit-keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}@supports ((-webkit-transform-style:preserve-3d) or (transform-style:preserve-3d)){.carousel-item-next.carousel-item-left,.carousel-item-prev.carousel-item-right{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@supports ((-webkit-transform-style:preserve-3d) or (transform-style:preserve-3d)){.active.carousel-item-right,.carousel-item-next{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@supports ((-webkit-transform-style:preserve-3d) or (transform-style:preserve-3d)){.active.carousel-item-left,.carousel-item-prev{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}.bg-primary{background-color:#007bff!important}a.bg-primary:focus,a.bg-primary:hover,button.bg-primary:focus,button.bg-primary:hover{background-color:#0062cc!important}.bg-transparent{background-color:transparent!important}.d-none{display:none!important}.d-inline{display:inline!important}.justify-content-center{-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important}.justify-content-between{-webkit-box-pack:justify!important;-ms-flex-pack:justify!important;justify-content:space-between!important}@supports ((position:-webkit-sticky) or (position:sticky)){.sticky-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}.sr-only{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;-webkit-clip-path:inset(50%);clip-path:inset(50%);border:0}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.mt-0{margin-top:0!important}.mx-0{margin-right:0!important}.mx-0{margin-left:0!important}.mt-1{margin-top:.25rem!important}.mx-1{margin-right:.25rem!important}.mx-1{margin-left:.25rem!important}.mt-2{margin-top:.5rem!important}.mx-2{margin-right:.5rem!important}.mx-2{margin-left:.5rem!important}.mt-3{margin-top:1rem!important}.mx-3{margin-right:1rem!important}.mx-3{margin-left:1rem!important}.mt-4{margin-top:1.5rem!important}.mx-4{margin-right:1.5rem!important}.mx-4{margin-left:1.5rem!important}.mt-5{margin-top:3rem!important}.mx-5{margin-right:3rem!important}.mx-5{margin-left:3rem!important}.mt-auto{margin-top:auto!important}.mx-auto{margin-right:auto!important}.mx-auto{margin-left:auto!important}.text-justify{text-align:justify!important}.text-center{text-align:center!important}.text-primary{color:#007bff!important}a.text-primary:focus,a.text-primary:hover{color:#0062cc!important}.text-muted{color:#6c757d!important}@media print{*,::after,::before{text-shadow:none!important;box-shadow:none!important}a:not(.btn){text-decoration:underline}img{page-break-inside:avoid}h2,h3{orphans:3;widows:3}h2,h3{page-break-after:avoid}@page{size:a3}body{min-width:992px!important}.container{min-width:992px!important}}
    </style>

    <link rel="stylesheet" href="app.css?_=1597520971">

    <script defer src="./zepto.min.js?v=1.2.0"></script>
    <script defer src="./fuse.min.js?v=6.4.0"></script>

    <!-- Production JS bundle -->
    <script defer src="glossar-bundle.min.js?_={{ TIMESTAMP JS }}" onload="GLOSSAR.init()"></script>

</head>

<body>
    <!-- Begin page content -->
    <header>
        <h1><label for="searchTextbox">Scots glossar<sup>beta</sup></label></h1>
    </header>

    <main role="main" class="container">
        <section id="search">
            <div class="form-group form-inline justify-content-center">
                <div class="input-group">
                    <input type="text" class="form-control mx-auto" id="searchTextbox" placeholder="Inpit Scots or English…" spellcheck="false">
                    <button class="btn bg-transparent fade" id="clear-value" disabled>
                        <i class="demo-icon icon-cancel"></i>
                        <span class="sr-only">Clear value of field</span>
                    </button>
                </div>
            </div>
            <div class="text-center">
                <button id="random" class="btn-link-gray">…or wale oot a wird allevolie</button>
            </div>

            <div id="results" class="fade"></div>

        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <div class="text-muted">Last updatit: <span class="last-updatit" data-updatit="<?php echo $last_updatit_unix; ?>"><?php echo $last_updatit; ?></span>. <a href="./aboot">Aboot this app</a>.<br>Nae trackin cookies.</div>
            <div class="update-link d-none">
                <button class="btn btn-primary get-update">Update available. Refresh noo!</button>
            </div>
        </div>
    </footer>
</body>

</html>
