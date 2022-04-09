import React, { useState } from "react";
import LayoutContainer from "../LayoutComponent/LayoutContainer";
import ControlPanel from "../ControlPanelComponent/ControlPanel";
import ResetButtonContainer from "../ResetButtonComponent/ResetButtonContainer";
import './MainContainer.css'

const MainContainer = () => {
  const [childVectorData, setChildVectorData] = useState([]);
  const [toggleState, setToggleState] = useState(false)
  const [isReset, setIsReset] = useState(false)

  const sendVector = (vectorData, changedState) => {
    setChildVectorData(vectorData);
    setToggleState(changedState)
  }

  const resetState = (reset) => {
    setIsReset(reset);
  }

  return (
    <>
      <div className="maincontainer">
        <div className="panel">
          <LayoutContainer isReset={isReset} childVectorData={childVectorData} toggleState={toggleState}/>
          <ControlPanel  sendVector={sendVector}/>
        </div>
        <div>
          <ResetButtonContainer resetState={resetState}/>
        </div>
      </div>
    </>
  );
};

export default MainContainer;
