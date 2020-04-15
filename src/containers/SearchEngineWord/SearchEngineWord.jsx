import React from 'react';
import Flex from "src/components/dom/Flex"
import TextField from "src/components/atoms/TextField"
import { PRIMARY_COLOR } from "src/tools/constants"
import { IoIosSearch } from "react-icons/io"
import { Component } from 'react';



class SearchEngineWord extends Component {

  render() {
    return(
      <Flex styles={{background:PRIMARY_COLOR,padding:10}}>
          <TextField placeholder="buscar por imagen..." styles={{background:"white",flexDirection:""}} icon={<IoIosSearch/>}/>
      </Flex>
    )
  }

}



export default SearchEngineWord;
