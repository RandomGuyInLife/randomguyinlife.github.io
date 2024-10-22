var j=0;
//Function for live Rendering
function update(i) {
    if(i==0){
    let htmlCode=document.getElementById("htmlCode").value;
    let cssCode=document.getElementById("cssCode").value;
    let javascriptCode=document.getElementById("javascriptCode").value;
    let text=htmlCode+"<style>"+cssCode+"</style>"+"<scri"+"pt>"+javascriptCode+"</scri"+"pt>";
    let iframe=document.getElementById('viewer').contentWindow.document;
    let w=document.appendChild(document.createElement('p'));
    w.textContent = "H";
    iframe.open();
    iframe.write(text);
    iframe.close();
    }

    else if(i==1){

        let htmlCode=document.getElementById("htmlCode").value;
        let html=htmlCode.slice(0,htmlCode.length);
        document.getElementById("htmlCode").value=html;
        let w=document.appendChild(document.createElement('p'));
        w.textContent = "W";
        j=1;

    }
}