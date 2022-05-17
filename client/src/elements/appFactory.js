import { Icon } from '@iconify/react';

function App(props){
    return (
        <div class="apps_item">
            <div class="apps_icon">
                <Icon className="icon" icon={"mdi-" + props.app.icon} />
                {/* <span class="iconify icon" data-icon={"mdi-" + props.app.icon}></span> */}
            </div>
            <div class="apps_text">
                <a href={"http://" + props.app.url }>{props.app.name}</a>
                <span id="app-address">{props.app.url}</span>
            </div>
        </div>
    );
}

// Function to build apps
export async function buildApps(apps){

    // Create a list to store elements in
    let appList = [];

    // Iterate through JSON, calling App(props)
    for (const app in apps['apps']){
        appList.push(<App app={apps['apps'][app]}/>)
    }

    return appList;
}