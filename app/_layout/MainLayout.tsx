import { FC } from "hono/jsx";

export type LayoutProps = {
    // deno-lint-ignore no-explicit-any
    children: any,
    page: string
} 

export const MainLayout:FC = (props) => {
    const indexClass = props.page === "index" ? "current" : "";
    const aboutClass = props.page === "about" ? "current" : "";
    const aocClass = !indexClass && !aboutClass ? " current" : "";

    return (
        <html class="no-js" lang="en">
        <head>
        
            {/* basic page needs
            ================================================== */}
            <meta charset="utf-8" />
            <title>Jay Kimble's Lab: {props.page}</title>
            <meta name="description" content="My little lab site for doing Advent of Code 2024 work" />
            <meta name="author" content="Jay Kimble (The Dev Theologian)" />
        
            {/* mobile specific metas
            ================================================== */}
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        
            {/* CSS
            ================================================== */}
            <link rel="stylesheet" href="/css/base.css"/>
            <link rel="stylesheet" href="/css/main.css"/>
        
            {/* script
            ================================================== */}
            <script src="/js/modernizr.js"></script>
            <script defer src="/js/fontawesome-all.min.js"></script>
            <script defer src="/js/htmx.min.js"></script>
        
            {/* favicons
            ================================================== */}
            <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
        
        </head>
        
        <body id="top">
        
            {/* preloader
            ================================================== */}
            <div id="preloader">
                <div id="loader" class="dots-fade">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        
            {/* Header
            ================================================== */}
            <header class="s-header">
        
                <div class="row">
        
                    <div class="s-header__content column">
                        <h1 class="s-header__logotext">
                            <a href="/app/index" title="">My Lab</a>
                        </h1>
                        <p class="s-header__tagline">Jay Kimble's labs and experimental projects.</p>
                    </div>
        
                </div> {/* end row */}
        
               <nav class="s-header__nav-wrap">
        
                   <div class="row">
        
                        <ul class="s-header__nav">
                            <li class={indexClass}><a href="/app/index">Home</a></li>
                            <li class={`has-children${aocClass}`}><a href="#0">AoC 24</a>
                                <ul>
                                    <li><a href="#" hx-get="/aoc24/day01" hx-target="#app-content">Day 01</a></li>
                                    <li><a href="#">Day 02</a></li>
                                    <li><a href="#">Day 03</a></li>
                                    <li><a href="#">Day 04</a></li>
                                    <li><a href="#">Day 05</a></li>
                                    <li><a href="#">Day 06</a></li>
                                    <li><a href="#">Day 07</a></li>
                                    <li><a href="#">Day 08</a></li>
                                    <li><a href="#">Day 09</a></li>
                                    <li><a href="#">Day 10</a></li>
                                    <li><a href="#">Day 11</a></li>
                                </ul>
                            </li>
                            {/* <li><a href="demo.html">Demo</a></li>	 */}
                            {/* <li><a href="archives.html">Archives</a></li>
                            <li class="has-children"><a href="#0">Blog</a>
                                <ul>
                                    <li><a href="blog.html">Blog Entries</a></li>
                                    <li><a href="single.html">Single Blog</a></li>
                                </ul>
                            </li> */}
                            <li class={aboutClass}><a href="/app/about">Page</a></li>
                        </ul> {/* end #nav */}
        
                   </div> 
        
                </nav> {/* end #nav-wrap */}
        
                <a class="header-menu-toggle" href="#0" title="Menu"><span>Menu</span></a>
        
            </header> {/* Header End */}
        
        
        
            {/* Content
            ================================================== */}
            <div class="s-content" id="app-content">
        
                {props.children}

           </div> {/* end content-wrap */}
        
        
            {/* Footer
            ================================================== */}
            <footer class="s-footer">
        
                <div class="row s-footer__top">
                    {/* <div class="column">
                        <ul class="s-footer__social">
                            <li><a href="#0"><i class="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                            <li><a href="#0"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#0"><i class="fab fa-youtube" aria-hidden="true"></i></a></li>
                            <li><a href="#0"><i class="fab fa-vimeo-v" aria-hidden="true"></i></a></li>
                            <li><a href="#0"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="#0"><i class="fab fa-linkedin" aria-hidden="true"></i></a></li>
                            <li><a href="#0"><i class="fab fa-skype" aria-hidden="true"></i></a></li>
                        </ul> 
                    </div>*/}
                </div> {/* end footer__top */}
        
                <div class="row s-footer__bottom">
        
                    <div class="large-6 tab-full column s-footer__info">
                        <h3 class="h6">Jay Kimble's Lab</h3>
        
                        {/* <p>
                        
                        </p>
        
                        <p>
                        Lorem ipsum Sed nulla deserunt voluptate elit occaecat culpa cupidatat sit irure sint 
                        sint incididunt cupidatat esse in Ut sed commodo tempor consequat culpa fugiat incididunt.
                        </p> */}
                    </div>
        
                    <div class="large-6 tab-full column">
                        <div class="row">
                            {/* <div class="large-8 tab-full column">
        
                                <h3 class="h6">Photostream</h3>
                                
                                <ul class="photostream group">
                                    <li><a href="#0"><img alt="thumbnail" src="images?file=thumb.jpg"/></a></li>
                                    <li><a href="#0"><img alt="thumbnail" src="images?file=thumb.jpg"/></a></li>
                                    <li><a href="#0"><img alt="thumbnail" src="images?file=thumb.jpg"/></a></li>
                                    <li><a href="#0"><img alt="thumbnail" src="images?file=thumb.jpg"/></a></li>
                                    <li><a href="#0"><img alt="thumbnail" src="images?file=thumb.jpg"/></a></li>
                                    <li><a href="#0"><img alt="thumbnail" src="images?file=thumb.jpg"/></a></li>
                                    <li><a href="#0"><img alt="thumbnail" src="images?file=thumb.jpg"/></a></li>
                                    <li><a href="#0"><img alt="thumbnail" src="images?file=thumb.jpg"/></a></li>
                                </ul>
                
                            </div> */}
                
                            <div class="large-4 tab-full column">
                                <h3  class="h6">Navigate</h3>
                
                                <ul class="s-footer__list s-footer-list--nav group">
                                    <li><a href="/app/index">Home</a></li>
                                    {/* <li><a href="#0">Blog</a></li>
                                    <li><a href="#0">Demo</a></li>
                                    <li><a href="#0">Archives</a></li> */}
                                    <li><a href="/app/about">About</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
        
                    <div class="ss-copyright">
                        <span>© Jay Kimble {new Date().getFullYear()}</span> 
                        <span>Keep It Simple Design by <a href="https://www.styleshout.com/">StyleShout</a></span>
                    </div>
        
                </div> {/* end footer__bottom */}
        
        
                <div class="ss-go-top">
                    <a class="smoothscroll" title="Back to Top" href="#top">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0l8 9h-6v15h-4v-15h-6z"/></svg>
                    </a>
                </div> {/* end ss-go-top */}
        
            </footer> {/* end Footer*/}
        
        
            {/* Java Script
            ================================================== */}
            <script src="/js/jquery-3.2.1.min.js"></script>
            <script src="/js/main.js"></script>
        
        </body>
        
        </html>
    );
}