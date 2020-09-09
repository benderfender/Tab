import React, { useState } from "react";

const Tab = props => {
  const [show, setShow] = useState({
    selectedTab: 1
  });
  const tabOnClick = (event, value) => {
    setShow({
      selectedTab: value
    });
  };
  return (
    <div>
      <h1>Tabs</h1>
      {[1, 2, 3].map((val, index) => (
        <ul class="nav nav-pills nav-justified">
          <button type="button" class="btn btn-secondary" 
            key={index}
            onClick={e => tabOnClick(e, val)}
            selected={show.selectedTab === val}>
            Tab {val}
            </button>
        </ul>
      ))}
      <div>Tab {show.selectedTab} is currently showing.</div>
    </div>
  );
};
export default Tab;

