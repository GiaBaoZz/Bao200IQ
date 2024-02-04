let cnt = 0;

let imageList = [
    "url('https://zalo-api.zadn.vn/api/emoticon/sprite?eid=45342&size=130&checksum=13c9c347f10df1be7a6a01050727d619')",
    "url('https://zalo-api.zadn.vn/api/emoticon/sprite?eid=45347&size=130&checksum=c7736341c83626517a2d13423a9d266b')",
    "url('https://zalo-api.zadn.vn/api/emoticon/sprite?eid=42427&size=130&checksum=189e71604f14a3d8807a5506dd64ad8e')",
    "url('https://zalo-api.zadn.vn/api/emoticon/sprite?eid=42423&size=130&checksum=47f9675f44c66f7a2fd0ece1de385568')",
    "url('https://zalo-api.zadn.vn/api/emoticon/sticker/webpc?eid=20075&size=130')",
    "url('https://zalo-api.zadn.vn/api/emoticon/sticker/webpc?eid=21273&size=130')",
    "url('https://zalo-api.zadn.vn/api/emoticon/sprite?eid=1112&size=130&checksum=cc79d536f5a30a5e8084c493360017f8')",
]

let happyList = [
    "url('https://zalo-api.zadn.vn/api/emoticon/sprite?eid=45353&size=130&checksum=0adc2be5d6bfd643b1707f67351c7126')",
    "url('https://zalo-api.zadn.vn/api/emoticon/sprite?eid=42419&size=130&checksum=25381530f3688f0fbdcacd8125777aee')",
    "url('https://zalo-api.zadn.vn/api/emoticon/sprite?eid=43549&size=130&checksum=cd8b82174ff24dff81c38db9410e1035')",
    "url('https://zalo-api.zadn.vn/api/emoticon/sprite?eid=43553&size=130&checksum=ea804f3a7eb6c8540cca60ff5120464e')",
]



function shuffleimageList(imageList) {
    for (let i = imageList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [imageList[i], imageList[j]] = [imageList[j], imageList[i]]; // Swap elements
    }
}

shuffleimageList(imageList);
shuffleimageList(happyList);


function clickNo() {

    let yes = document.getElementById("button-yes");
    let currentFontSize = getComputedStyle(yes).fontSize;
    let currentWidth = getComputedStyle(yes).width;
    let currentHeight = getComputedStyle(yes).height;
    let newFontSize = parseFloat(currentFontSize) + 10;
    let newWidth = parseFloat(currentWidth) + 10;
    let newHeight = parseFloat(currentHeight) + 10;
    yes.style.fontSize = newFontSize + "px";
    yes.style.width = newWidth + "px";
    yes.style.height = newHeight + "px";
    

    let no = document.getElementById("button-no");
    currentFontSize = getComputedStyle(no).fontSize;
    currentWidth = getComputedStyle(no).width;
    currentHeight = getComputedStyle(no).height;
    newFontSize = parseFloat(currentFontSize)/2;
    newWidth = parseFloat(currentWidth) - 10;
    newHeight = parseFloat(currentHeight) - 10;
    no.style.fontSize = newFontSize + "px";
    no.style.width = newWidth + "px";
    no.style.height = newHeight + "px";

    let gif = document.getElementById("gif");

    
    if (cnt >= imageList.length) {
        cnt = 0;
    }

    let getGif = imageList[cnt++];

    gif.style.backgroundImage = getGif;
}

function clickYes() {
    
    let gif = document.getElementById("gif");

    let getGif = happyList[0];

    gif.style.backgroundImage = getGif;

}