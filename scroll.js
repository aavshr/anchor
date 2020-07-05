// github.com/aavshr/anchor-backend
root = "https://anchor.deta.dev/v1";

scrollToAnchor = () => {
    u = new URL(location.href);
    urlParams = new URLSearchParams(u.search); 
    anchor_id = urlParams.get('anchorrrr_id');
    if (!anchor_id){
        return; 
    }

    let endpoint = `${root}/anchors/${anchor_id}`; 

    fetch(endpoint).then((response) => {
           if (response.status !==200){
               return;
           }
           response.text().then((data) => {
               if (data){
                   document.getElementsByTagName("html")[0].innerHTML = data;
                   anchor = document.getElementById(anchor_id);
                   anchor.setAttribute("style", "color:red");
                   anchor.innerHTML = "!";
                   location.hash = '#' + anchor_id;
               };
           });
     }); 
}

scrollToAnchor();
