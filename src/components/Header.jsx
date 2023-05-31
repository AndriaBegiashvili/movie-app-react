import React,{useState} from 'react'
const Header = (props) => {
  return (
  
    <>
    <h1 style={{textAlign:'center',fontSize:'60px'}}>MIKURE</h1>
    <div className="search_page_form">
        <form method="get" id="searchformpage" onSubmit={props.submitHandler}>
        <input autoComplete='off' type="text" placeholder="Search Here..." value={props.value} id="s" onChange={(event)=>{props.setSearchValue(event.target.value)}}></input>
        <button type="submit" fdprocessedid="j22xi9"><img src="../src/assets/react.svg"></img></button>
        </form>
        </div>
    </>
  )
}

export default Header


