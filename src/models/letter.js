class Letter {
  
  
  /**
   * transform a text original to array with messy letters
   * @param requestLetter text input
   * @returns an array with messy letters
   */
  messUpLettersInArray = requestletter => {
    let arrayLetter = requestletter.split("")
    let mess = arrayLetter
    while (requestletter === mess.join("")) {
      mess = arrayLetter.sort(() => Math.random() - 0.5)
    }
    return mess
  }



  /**
   * @param totalLetters total letters to generate
   * @returns array of random letters
   */
  getRandomLettersInArray = (totalLetters = 3) => {
    const [a, z] = ["a".charCodeAt(0), "z".charCodeAt(0)]
    let i = 0
    let newLetters = []
    let letterCode
    while (i < totalLetters) {
      letterCode = Math.floor(Math.random() * (z - a)) + a
      newLetters[i] = String.fromCharCode(letterCode)
      i++
    }
    return newLetters
  }



  /**
   * create new letter random
   * @returns array of random letters
   */
  createNewTextArray = (text, totalLetters = 0) => {
    let a, b, newArray, requestArray
    a = this.messUpLettersInArray(text)
    b = totalLetters ? this.getRandomLettersInArray(totalLetters) : []
    newArray = [...a, ...b]
    requestArray = this.messUpLettersInArray(newArray.join(""))
    return requestArray
  }



  /**
   * move values from a to b ( a , b ) = Array
   * @param from values ​​where they come from
   * @param to values ​​where they will enter
   * @returns object { from : Array , to : Array }
   */
  moveValueBetween = ( from , to , payload ) => {
    let { letter : value , index } = payload;
    let defaultValue = 0;
    let len = to.length;
    for ( let i = 0 ; i < len ; i++ ) {
      if ( to[i] === defaultValue ) {
        to[i] = value;
        from[index] = defaultValue;
        break;
      }
    }
    return {
      from : [...from] ,
      to : [...to]
    }
  }
  

}



export default Letter;
