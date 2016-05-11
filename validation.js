staticTest($._("Group the selectors"), function() {
    var result = null;
    var descrip = $._("This is a webpage about animal group names, with a few headings and images as examples.\n\n There are already 2 CSS rules to style the `<h1>`s - one with a pseudo selector, and one without. Add another selector to each of the rules, so that they also style `<h2>`s.");
    
    var displayP = "h1, _ {\n  ...\n}\n\nh1:hover, _ {\n  ...\n}"

    
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
        if ((cssMatches(missingHover1P) || cssMatches(missingHover2P))) {
            result = fail($._("Remember: when you're grouping selectors with ':hover', make sure that you put ':hover' after each selector that you group."));
        }
    }
    assertMatch(result, descrip, displayP);
});