// ═════════════════════════════════════════════════════════════════════════════

// ═════════════════════════════════════════════════════════════════════════════
// FUNCTION TO GET BROWSER AND USER INFO AND DISPLAY IT ON THE PAGE
// ═════════════════════════════════════════════════════════════════════════════

function fGetBrowserInfo(id) {
    "use strict";
    let sHtml = ``;
    sHtml += `<ul>`;

    sHtml += `<li><strong>Window Inner Width:</strong> ${window.innerWidth}</li>`;
    sHtml += `<li><strong>Window Inner Height:</strong> ${window.innerHeight}</li>`;

    // get browser info
    let sBrowserAgent = navigator.userAgent + ' ';
    let sBrowserVersion = "";
    let sBrowserApp = "";
    if (sBrowserAgent.includes('Chrome')) {
        sBrowserApp = 'Chrome';
        let regEx = /Chrome\/(.+?) /;
        let aMatches = regEx.exec(sBrowserAgent);
        sBrowserVersion = aMatches[1];
    }
    else if (sBrowserAgent.includes('Chromium')) {
        sBrowserApp = 'Chromium';
        let regEx = /Chromium\/(.+?) /;
        let aMatches = regEx.exec(sBrowserAgent);
        sBrowserVersion = aMatches[1];
    }
    else if (sBrowserAgent.includes('Firefox')) {
        sBrowserApp = 'Firefox';
        let regEx = /Firefox\/(.+?) /;
        let aMatches = regEx.exec(sBrowserAgent);
        sBrowserVersion = aMatches[1];
    }
    else if (sBrowserAgent.includes('Seamonkey')) {
        sBrowserApp = 'Seamonkey';
        let regEx = /Seamonkey\/(.+?) /;
        let aMatches = regEx.exec(sBrowserAgent);
        sBrowserVersion = aMatches[1];
    }
    else if (sBrowserAgent.includes('Safari')) {
        sBrowserApp = 'Safari';
        let regExA = /Safari\/(.+?) /;
        let aMatchesA = regExA.exec(sBrowserAgent);
        let sTechVersion = aMatchesA[1];
        let regExB = /Version\/(.+?) /;
        let aMatchesB = regExB.exec(sBrowserAgent);
        let sUserVersion = aMatchesB[1];
        sBrowserVersion = `${sUserVersion} (${sTechVersion})`;
    }
    else if (sBrowserAgent.includes('OPR')) {
        sBrowserApp = 'OPR';
        let regEx = /OPR\/(.+?) /;
        let aMatches = regEx.exec(sBrowserAgent);
        sBrowserVersion = aMatches[1];
    }
    else if (sBrowserAgent.includes('Opera')) {
        sBrowserApp = 'Opera';
        let regEx = /Opera\/(.+?) /;
        let aMatches = regEx.exec(sBrowserAgent);
        sBrowserVersion = aMatches[1];
    }
    let regExOS = /\((.+?)\)/;
    let aMatchesOS = regExOS.exec(sBrowserAgent);
    let sOS = aMatchesOS[1];
    sHtml += `<li><strong>userAgent:</strong> ${sBrowserAgent}</li>`;
    sHtml += `<li><strong>Browser:</strong> ${sBrowserApp}</li>`;
    sHtml += `<li><strong>Browser Version:</strong> ${sBrowserVersion}</li>`;
    sHtml += `<li><strong>OS:</strong> ${sOS}</li>`;

    sHtml += `</ul>`;

    // write out html string to the div id
    document.getElementById(id).innerHTML = sHtml;
}

window.addEventListener('resize', function(event){
    fGetBrowserInfo('browser_info-id');
});




// ═════════════════════════════════════════════════════════════════════════════
