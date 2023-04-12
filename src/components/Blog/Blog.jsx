import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto py-12'>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    When should you use context API?
                </div>
                <div className="collapse-content">
                    <p>The React Context API is primarily used when some data needs <br />
                         to be accessible by many components at different nesting levels , <br />
                         without having to pass the data through each intermediate component via props.</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is a custom hook?
                </div>
                <div className="collapse-content">
                    <p>In React, a custom hook is a JavaScript function <br />
                        whose name starts with “use”
                        , and it allows developers to extract <br />
                         component logic into reusable functions .The custom hook can call <br />
                         one or multiple built-in hooks and is used to share stateful logic  <br />
                         between multiple components without having to repeatedly rewrite code. </p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is useRef?
                </div>
                <div className="collapse-content">
                    <p>useRef is a Hook in the React library that provides <br />
                         a way to create a mutable reference to a
                          value that persists across component <br /> renders without triggering a re-render.</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is useMemo?
                </div>
                <div className="collapse-content">
                    <p>useMemo is a hook in React that allows you to memoize <br />
                     expensive function computations so that they don't have <br />
                      to be recomputed on every render. Memoization is the process <br />
                       of caching a function's result so that it can be returned <br />
                        directly from cache on subsequent calls, <br />
                         rather than having to redo the expensive calculations.

                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blog;