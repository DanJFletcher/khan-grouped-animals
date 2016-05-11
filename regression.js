[{
    code: "<style> h1, h2 { font-family: cursive; border-bottom: 1px solid red; padding: 3px; }  h1, h2:hover { background-color: orange }</style>",
    steps: ["Remember: when you're grouping selectors with ':hover', make sure that you put ':hover' after each selector that you group."]
}, {
    code: "<style> h1, h2 { font-family: cursive; border-bottom: 1px solid red; padding: 3px; }  h1:hover, h2 { background-color: orange }</style>",
    steps: ["Remember: when you're grouping selectors with ':hover', make sure that you put ':hover' after each selector that you group."]
}, {
    code: "<style> h1 , h2 { font-family: cursive; border-bottom: 1px solid red; padding: 3px; }  h1:hover, h2:hover { background-color: orange }</style>",
    steps: ["pass"]
}, {
    code: "<style> h1, h2 { font-family: cursive; border-bottom: 1px solid red; padding: 3px; }  h1:hover, h2:hover { background-color: orange }</style>",
    steps: ["pass"]
}]