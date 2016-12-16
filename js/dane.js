(function ($) {

    var targetNodes = $("#nav");
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    var myObserver = new MutationObserver(mutationHandler);
    var obsConfig = { childList: true, characterData: true, attributes: true, subtree: true };

    //--- Add a target node to the observer. Can only add one node at a time.
    targetNodes.each(function () {
        myObserver.observe(this, obsConfig);
    });

    updateMargin();

    function mutationHandler(mutationRecords) {
        updateMargin();
    }

    function updateMargin() {
        $("#body").attr('margin-top', $("#nav").attr('height'));
    }

}(jQuery));