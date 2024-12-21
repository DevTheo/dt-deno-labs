
export const Index = () => {
    return (    
            <div class="row">
                <div id="main" class="s-content__main large-8 column">
    
                    <article class="entry" id="hx-content">
    
                        <header class="entry__header">
                            <h2 class="entry__title h1">
                                Welcome to my lab
                            </h2>
                        </header>
                        
                        <div class="entry__content">
                            <p>
                                I created this site initially to house my Advent of Code 2024 activity. 
                                I planned on using Deno. Along the way (as usual), I decided that I wanted
                                to do something different.. as a result I created a little framework built 
                                on top of Deno, Hono, and Htmx (using JSX server side). 
                            </p>
                        </div> 
    
                    </article> {/* end entry */}
               </div> {/* end main */}
           </div>); {/* end row */}

}