let spotlight = document.getElementById("spotlight");

document.addEventListener("mousemove", moveSpotlight);
document.addEventListener("scroll", scrollSpotlight);

function moveSpotlight(e) {
    var eventDoc, doc, body;
    
    e = e || window.e; // IE-ism
    
    // If pageX/Y aren't available and clientX/Y are,
    // calculate pageX/Y - logic taken from jQuery.
    // (This is to support old IE)
    if (e.pageX == null && e.clientX != null) {
        eventDoc = (e.target && e.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;
        
        e.pageX = e.clientX +
        (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
        (doc && doc.clientLeft || body && body.clientLeft || 0);
        e.pageY = e.clientY +
        (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
        (doc && doc.clientTop  || body && body.clientTop  || 0 );
    }
    
    spotlight.style.left = e.pageX-200 + 'px';
    spotlight.style.top = e.pageY-200 + 'px';
}

function scrollSpotlight(e) {
    spotlight.style.top = document.documentElement.scrollTop+200 + 'px';
}