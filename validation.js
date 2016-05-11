staticTest($._("Group the selectors"), function() {
    var result = null;
    var descrip = $._("This is a webpage about animal group names, with a few headings and images as examples. There are 2 CSS rules already used to style the `<*h1*>`'s - change those selectors so they also select the `<*h2*>`'s and apply the same properties.");
    
    var displayP = "_, _ {\n  ...\n}\n\n_, _ {\n  ...\n}"

    
    var groupedNormalP = "h1, h2 { font-family: $ff; border-bottom: $bb; padding: $p;}";
    var groupedNormal2P = "h1 , h2 { font-family: $ff; border-bottom: $bb; padding: $p;}";
    var groupedHoverP  = "h1:hover, h2:hover { background-color: $bc}";
    var groupedHover2P  = "h1:hover , h2:hover { background-color: $bc}";
    var missingHover1P  = "h1, h2:hover { background-color: $bc}";
    var missingHover2P  = "h1:hover, h2 { background-color: $bc}";
    
    var groupedNormalM = anyPass(cssMatch(groupedNormalP), cssMatch(groupedNormal2P));
    var groupedHoverM  = anyPass(cssMatch(groupedHoverP), cssMatch(groupedHover2P));
    result = allPass(groupedNormalM, groupedHoverM);
    if (fails(result)) {
        if (passes(groupedNormalM) && (cssMatch(missingHover1P) || cssMatch(missingHover2P))) {
            result = fail($._("Remember: when you're grouping selectors with ':hover', make sure that you put ':hover' after each selector that you group."));
        }
    }
    assertMatch(result, descrip, displayP);
});