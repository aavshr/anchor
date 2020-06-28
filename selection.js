sel = window.getSelection();

createAnchor = (id) => {
    var invisibleAnchor = document.createElement("a");
    invisibleAnchor.setAttribute("id", id);
    return invisibleAnchor;
}

createLink = (sel, html) => {
    var range, node;
    range = window.getSelection().getRangeAt(0);
    range.collapse(true);

    var anchor = createAnchor("testid")
    range.insertNode(anchor);
    document.getElementById("testid").scrollIntoView();
};

createLink(sel)