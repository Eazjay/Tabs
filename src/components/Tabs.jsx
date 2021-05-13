import React, { useState } from 'react';
import DisplayTabs from './DisplayTabs';

const Tabs = (props) => {
    const [tabs, setTabs] = useState([
        {
            label: "Tab 1",
            content: "Tab 1 content is showing here."
        },
        {
            label: "Tab 2",
            content: "Tab 2 content is showing here."
        },
        {
            label: "Tab 3",
            content: "Tab 3 content is showing here."
        },
    ])
    const [sTab, setSTab] = useState(0);
    const clickHandler = (e, i) => {
        setSTab(i);
    }

    return(
        <div className="container mt-5">
            <div className="text-center">
                {tabs.map((tab, i) =>{
                    return <button key={i} onClick={(e) => {
                        clickHandler(e, i)
                    }}
                    className="btn btn-outline-primary m-3 btn-lg">{tab.label}</button>
                })}
            </div>
            <hr/>
            <div className="mt-5">
                <DisplayTabs fromTabs={tabs[sTab].content}/>
            </div>
        </div>
    )
}
export default Tabs;