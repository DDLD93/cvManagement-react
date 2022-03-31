import React,{useContext} from 'react'
import { StateContext } from "../../../context/state";

function Completed() {
    const { disable, loading, loadingState, postData,postForm,notification} = useContext(StateContext);

  return (
    <div>Submission pending approval of staff admin</div>
  )
}

export default Completed