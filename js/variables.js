const navbar = `                <!-- Text Logo - Use this if you don't have a graphic logo -->
                <!-- <a class="text-gray-800 font-semibold text-3xl leading-4 no-underline page-scroll" href="index.html">Pavo</a> -->

                <!-- Image Logo -->
                <a class="inline-block mr-4 py-0.5 text-xl whitespace-nowrap hover:no-underline focus:no-underline" href="/index.html">
                    <img src="/favicontp.png" alt="alternative" class="h-15" width="40" height="40"/>
                </a>
                <a class="text-white-800 font-semibold text-1xl leading-4 no-underline page-scroll" href="/index.html">(features may change)</a>

                <button class="background-transparent rounded text-xl leading-none hover:no-underline focus:no-underline lg:hidden lg:text-gray-400" type="button" data-toggle="offcanvas">
                    <span class="navbar-toggler-icon inline-block w-8 h-8 align-middle"></span>
                </button>

                &nbsp;&nbsp;&nbsp;

                <select style="color:black" id="langpackbox" onchange="javascript:changeLang()">
                    <option style="color:black" value="en-us">en-us</option>
                    <option style="color:black" value="cs-cz">cs-cz</option>
                </select>

                <div class="navbar-collapse offcanvas-collapse lg:flex lg:flex-grow lg:items-center" id="navbarsExampleDefault">
                    <ul class="pl-0 mt-3 mb-2 ml-auto flex flex-col list-none lg:mt-0 lg:mb-0 lg:flex-row">

                        <li>
                            <a class="nav-link page-scroll active" href="/#header">Home <span class="sr-only"></span></a>
                        </li>
                        <li>
                            <a class="nav-link page-scroll" href="/#pricing">Pricing</a>
                        </li>
                        <li>
                            <a class="nav-link page-scroll" href="/#contact">Contact</a>
                        </li>
                        <li>
                            <a class="nav-link page-scroll" href="/#statistics">Stats</a>
                        </li>
                        <li class="dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Drop&nbsp;</a>
                        <div class="dropdown-menu" aria-labelledby="dropdown01">
                            <a class="nav-link page-scroll dropdown-item" href="/team">Team</a>
                        <div class="dropdown-divider"></div>
                            <a class="nav-link page-scroll dropdown-item" href="/tutorials">Tutorials</a>
                        <div class="dropdown-divider"></div>
                            <a class="nav-link page-scroll dropdown-item" href="/privacy">Privacy Policy</a>
                        <div class="dropdown-divider"></div>
                            <a class="nav-link page-scroll dropdown-item" href="/tools">Tools</a>
                            <!-- a class="nav-link page-scroll dropdown-item" href="/whatis">WhatIs (ALPHA)</a -->
                        <!-- div class="dropdown-divider"></div-->
                        </div>
                        
                        <li>
                            <a class="nav-link page-scroll" href="/discord">Join the Discord</a>
                        </li>
                        &nbsp;
                        &nbsp;
                        <li>
                            <a class="dashb-nav-link" href="https://dash.frdomains.site">Dashboard</a>
                        </li>
                        &nbsp;
                        &nbsp;
                        <li>
                            <a class="get-nav-link page-scroll" href="/#get">Get</a>
                        </li>

                        <!-- iframe src="/navbar"></iframe -->
                        <!-- btn-solid-reg -->

                    </ul>
                </div> <!-- end of navbar-collapse -->`;



    fetch('https://frdomains.site/pages/warning.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('warning').innerHTML = data;
      })
      .catch(error => {
        console.error('Error:', error);
      });




document.getElementById('navbrae').innerHTML = navbar;

document.getElementById('copyright').innerText = '© 2025 FrDomains. All rights reserved.'
