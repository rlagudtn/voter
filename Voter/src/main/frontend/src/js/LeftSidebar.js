import "../css/LeftSidebar.css";
import {useState} from 'react';
function LeftSidebar(props){
    let [tabIndex,changeTabIndex]=useState(0);
    let candidatesInfo=props.items;
    // useEffect(()=>{
        
    //     console.log(candidatesInfo);
    // },[])
    return (
        <div className="LeftSidebar">
            <h5 className="title">제 19대<br /> 대통령 선거</h5>
                    {
                        candidatesInfo.map((candidate, i) => {
                            return (
                                <div className={"sidebar-item "} eventKey={i} onClick={()=>{
                                    props.changeContent(candidate);
                                    props.changeTab(i);
                                    props.changeToggle(false);
                                    changeTabIndex(i);
                                }}>
                                    <div className={"candidateName "+ `${tabIndex===i? 'active':''}`}>
                                    기호 {candidate.id + 1}번 {candidate.name}<br /> ({candidate.party})

                                    </div>
                                </div>
                            );
                        })
                    }

        </div>
    );
}

export default LeftSidebar;