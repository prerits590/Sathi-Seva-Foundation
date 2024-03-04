// import {Link} from 'react-router-dom'
import './button.css'

const Showmorebtn = (props) => {
  return (
    <>
       <button className={props.className}>
                {props.name}
        </button>
    </>
  )
}

export default Showmorebtn