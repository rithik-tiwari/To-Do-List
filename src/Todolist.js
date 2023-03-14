import React, { useState } from 'react'
import './App.css'
export default function Todolist() {
    const [activity, setActivity] = useState("");
    const [listData, setlistData] = useState([]);
    function addActivity() {
        // setlistData([...listData, activity])
        // console.log(listData);
        setlistData((listData) => {
            const updatedList = [...listData, activity];
            // console.log(updatedList);
            setActivity('');
            return updatedList;
        })
    }
    function removeActivity(i) {
        const updatedListData = listData.filter((elem, id) => {
            console.log(elem);
            return i!==id;
        })
        setlistData(updatedListData);
    }
    function removeALL(){
        setlistData([]);
    }
  return (
    <div className='body'>
    <div className='container1'>
        <div className='taskmate'>
            <h1>TaskMate</h1>
        </div>    
        <div className='container'>
            <div className='header'>To-Do LIST</div>
            <div><input type="text" id='wage' placeholder='Add Activity' value={activity} onChange = {(e) => setActivity(e.target.value)} /></div>
            <div className='addbtn'><button onClick={addActivity}>ADD</button></div>
            <p className='ListHeader'>Below Is Your List !!</p> 
            {listData!==[] && listData.map((data, i) => {
                return (
                    <div className='list'>
                      <div className='datalist' key={i}>
                          <div className='listData'>{data}</div>
                          <div><button className='removebtn' onClick={() => removeActivity(i)}>Remove 🗑️</button>
                          <label className='checkbox'>Check ME<input type="checkbox" placeholder='check ME'/></label></div>
                          {/* <div><input type="checkbox" /></div> */}
                      </div>
                    </div>
                )
            })}
            {listData.length>=1 && 
            <div className='removeall'><button onClick={removeALL}>ReMove ALL 🗑️</button></div>}
        </div>
      
    </div>
    {/* <footer><p>Made With 💚 <br/> */}
     {/* Gyanendar Tiwari</p></footer> */}
    </div>
  );
}
