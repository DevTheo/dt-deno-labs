
export type IAocUiProps = {
    dayString: string,
    testAnswer1: string,
    realAnswer1: string,
    testAnswer2: string,
    realAnswer2: string
}

export function AocUi({dayString, testAnswer1, realAnswer1, testAnswer2, realAnswer2}: IAocUiProps) {

    return(
        <div class="row">
            <div id="main" class="s-content__main large-8 column">

                <article class="entry" id="hx-content">

                    <header class="entry__header">
                        <h2 class="entry__title h1">
                            Advent of Code Day {dayString}
                        </h2>
                    </header>
                    
                    <div class="entry__content">
                        <h5>First Puzzle</h5>
                        <ul>
                            <li>Test Answer: {testAnswer1}</li>
                            <li>Real Answer: {realAnswer1}</li>
                        </ul>
                        <h5>Second Puzzle</h5>
                        <ul>
                            <li>Test Answer: {testAnswer2}</li>
                            <li>Real Answer: {realAnswer2}</li>
                        </ul>
                    </div>

                </article> {/* end entry */}

            </div> {/* end main */}
        </div>);
}

