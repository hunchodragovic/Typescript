/* eslint-disable react/prop-types */

const Button = ({text}) => {
 
  
  return (
  <button 
  onClick={() => {
    console.log(text);
  }}
  type="button" style={{backgroundColor:'black',color:'white'}}>{text}</button>
  )
}

export default Button
