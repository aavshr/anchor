sel = window.getSelection();

// github.com/aavshr/anchor-backend
root = "https://kyofeo.deta.dev/v1";

uuid = () => {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

createAnchor = (id) => {
    var invisibleAnchor = document.createElement("a");
    invisibleAnchor.setAttribute("id", id);
    return invisibleAnchor;
}

createLink = () => {
    var range, node;
    var anchor_id = uuid();
    var anchor = createAnchor(anchor_id);

    range = window.getSelection().getRangeAt(0);
    range.collapse(true);
    range.insertNode(anchor);

    postHtml(anchor_id, document.all[0].outerHTML);

    // only get the url without a hash
    var url = location.href.split("#")[0];
    // anchor deliberately misspelled here
    url = `${url}?anchorrrr_id=${anchor_id}`;
    alert(url);
};

postHtml = (id, html) => {
    var data = {
        anchor_id: id,
        html: html
    };
    var endpoint = `${root}/anchors`;

    fetch(endpoint, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}

createLink();