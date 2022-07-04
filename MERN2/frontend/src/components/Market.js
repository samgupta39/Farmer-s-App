import React from 'react'

const Market = () => {
  return (
    <>
    {/* <div class="card"> */}
    <div class="card-body" style={{backgroundColor:'skyblue'}}>
    <label for="exampleInputEmail1" class="form-label" style={{textDecorationColor:'HighlightText'}}>Email address</label>
    <input type="email" class="form-control" name="email" id="exampleInputEmail1"  aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
    {/* </div> */}
    </>
  )
}

export default Market