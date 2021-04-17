chrome.tabs.query({currentWindow:true},(tabs)=>{
    let result = "";
    let httpmatch = /https?:.*/;
    tabs.forEach(t => {
        if(t.url.match(httpmatch)){
            result += "<p>"+t.url+"</p>";
        }
    });
    document.getElementById("result").insertAdjacentHTML("afterbegin",result)
})