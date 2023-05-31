import React from 'react'
import classes from '../modules/Header.module.css'
const Header = () => {
  return (
    <>
    <header class={classes.container+' mt-32 '}>
      <div class="row space-between align-center">
        <div>
          <h2>MIKURE</h2>
        </div>
        <div className={classes.form__group}>
          <input placeholder='yea' className={classes.form__field}></input>
          <label for="name" className={classes.form__label}>Search</label>

        </div>
        <div class="btn_container pc_h1">
          <button className={classes.button_86}>Search</button>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header


