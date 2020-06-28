sel = window.getSelection();
root = "https://kyofeo.deta.dev/v1"

createAnchor = (id) => {
    var invisibleAnchor = document.createElement("a");
    invisibleAnchor.setAttribute("id", id);
    return invisibleAnchor;
}

createLink = (sel, html) => {
    var range, node;
    range = window.getSelection().getRangeAt(0);
    range.collapse(true);

    var anchor_id = uuidv4()
    var anchor = createAnchor(anchor_id);
    range.insertNode(anchor);
    postHtml(anchor_id, document.documentElement.innerHtml)
};

postHtml = (id, html) => {
    var data = {
        anchor_id = id,
        html = html
    } 
    var endpoint = `${root}/anchors`

    fetch(endpoint, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
}

createLink(sel)