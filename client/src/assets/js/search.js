import * as api from './api';


var sindex = 0;
var cycle = false;


// function start() {
//     var query = getParameterByName('q');
//     if (query) search(query.replaceAll("+", "%2B"));

//     document.getElementById('keywords').focus();

//     window.setInterval(function () {
//         updatetime();
//     }, 200);
// }

function handleKeyPress(e, options) {
    var key = e.keyCode || e.which;
    var text = document.getElementById("keywords").value.replaceAll("+", "%2B");
    var option = text.substr(1, text.indexOf(' ') - 1) || text.substr(1);
    var subtext = text.substr(2 + option.length);
    if (key == 13) { // Search functions
        search(text, options);
    }
    if (key == 9) { // Tab Completion Functions
        tabCompletion(e, text, option, subtext);
    }
    if(key == 32){ //Space to go to search
        document.getElementById("keywords").focus();
    }
    sindex = 0;
    cycle = false;
}


function tabCompletion(e, text, option, subtext){
    e.preventDefault();
        e.stopPropagation();
        if (text[0] === ';') {
            switch (option) {
                case 't':
                    var streamers = ['admiralbahroo', 'moonmoon_ow', 'witwix'];
                    if (!subtext || cycle) {
                        cycle = true;
                        if (sindex > streamers.length - 1) sindex = 0;
                        document.getElementById("keywords").value = ';t ' + streamers[sindex++];
                        return;
                    }
                    for (var streamer of streamers) {
                        if (subtext === streamer.substr(0, subtext.length)) {
                            document.getElementById("keywords").value = ';t ' + streamer;
                            return;
                        }
                    }
                    break;
            }
        }
}


function search(text, options) {
    var option = text.substr(1, text.indexOf(' ') - 1) || text.substr(1);
    var subtext = text.substr(2 + option.length);
    if (text[0] === '$') {
        if (text.indexOf(' ') > -1) {
            if(options.hasOwnProperty(option)){
                window.location = options[option] + subtext;
            }
        } 
    } else if (validURL(text)) {
        if (containsProtocol(text))
            window.location = text;
        else
            window.location = "https://" + text;
    } else {
        window.location = "https://www.google.com/search?q=" + text;
    }
}

// Source: https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}

function containsProtocol(str) {
    var pattern = new RegExp('^(https?:\\/\\/){1}.*', 'i');
    return !!pattern.test(str);
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};



// Gets localized bookmarks
async function get(){

    let apiCall = `search/get`

    const search = await api.get(apiCall);
    
    return search;
}

async function getShort(){

    let apiCall = `search/get/short`

    const search = await api.get(apiCall);
    
    return search;
}


async function getProviders(){
    let search = await get()

    let boof=[]

    for (let opt in search['searchOptions']){
        boof.push(
            <tr key={opt}>
                <td><a href={search['searchOptions'][opt]['url']}>{search['searchOptions'][opt]['name']}</a></td>
                <td>${search['searchOptions'][opt]['prefix']}</td>
            </tr>
        )
    }

    return(boof)

}


export { handleKeyPress, get, getShort, getProviders }