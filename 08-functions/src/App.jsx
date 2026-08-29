import React from 'react'

const App = () => {
  const pageScrolling = (val)=>{
    console.log(`${val}`);
  }
  return (
    <div onWheel={(ele)=>{
      pageScrolling(ele.pageY);
    }}>
      <div className ='page1'></div>
      <div className ='page2'></div>
      <div className ='page3'></div>
      <div className ='page4'></div>
    </div>
  )
}

export default App;
