import FlagsComponent from "./components/flagcomponent";
import React,{useState} from "react";

const inputList = [
  {
    imageUrl : "https://cdn-icons-png.flaticon.com/128/197/197375.png",
    country : "China",
    language : "Chinese"

  },

  {
    imageUrl : "https://cdn-icons-png.flaticon.com/128/197/197604.png",
    country : "Japan",
    language : "Japanese"

  },

  {
    imageUrl : "https://cdn-icons-png.flaticon.com/128/10601/10601048.png",
    country : "Spain",
    language : "Spanish"

  },

  {
    imageUrl : "https://cdn-icons-png.flaticon.com/128/3373/3373278.png",
    country : "Italy",
    language : "Italian"

  },

  {
    imageUrl : "https://cdn-icons-png.flaticon.com/128/555/555473.png",
    country : "Canada",
    language : "French"

  },

  {
    imageUrl : "https://cdn-icons-png.flaticon.com/128/197/197602.png",
    country : "Serbia",
    language : "Serbian"

  }
]
function CountryList() {
  const [state, setState] = useState({inputValue : "", languagesList : inputList });


const onGetting =(event) => {
  console.log(state)
  setState({inputValue : event.target.value});
  state.languagesList = state.languagesList.filter(eachObject => eachObject.country.includes(state.inputValue))
}


const onDelete = (language) => {
   const newList = state.languagesList.filter(each => each.language !== language)
   
   setState({languagesList : newList})



}

  return (
    <div>
      <input type = "search" onChange = {onGetting}/>
      <div>
      
      <ul>{state.languagesList.map(each => (<FlagsComponent details = {each} onDelete = {onDelete}/>))}</ul>
      
      </div>


    </div>
  )
}

export default CountryList