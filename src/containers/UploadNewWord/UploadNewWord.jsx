import React, { Component, Fragment } from 'react';
import style from './style';
import TextField from "src/components/atoms/TextField"
import CircleImageSquare from "src/components/molecules/CircleImageSquare"
import { connect } from "react-redux";
import { wordActions } from "src/ducks/word";
import ButtonUploadImages from './subcomponents/ButtonUploadImages';
import OptionsUploadWord from './subcomponents/OptionsUploadWord';

const imagesArray = [
  "https://cdn.pixabay.com/photo/2019/09/23/01/47/space-4497348__340.jpg",
  "https://cdn.pixabay.com/photo/2017/07/27/02/23/space-2543838__340.jpg",
  "https://cdn.pixabay.com/photo/2016/07/02/12/21/eclipse-1492818__340.jpg",
  "https://cdn.pixabay.com/photo/2011/12/14/12/21/orion-nebula-11107__340.jpg",
]



class UploadNewWord extends Component {

  state = {
    letters: '',
    images: null,
    stateUploaded: false
  }


  handlerSelectImages = event => {
    this.setState({ images: event.target.files, stateUploaded: true });
  }


  handlerTextWordChange = event => {
    this.setState({ letters: event.target.value });
  }


  handlerCancelUploadWord = () => {
    this.setState({
      letters: '',
      images: null,
      stateUploaded: false
    });
  }


  handlerUploadWord = () => {
    const { letters, images, stateUploaded } = this.state;
    this.props.dispatch(wordActions.uploadImages(images)).then(() => {
      const dataUploadNewWord = {
        letters,
        images: []
      }
      this.props.dispatch(wordActions.uploadNewWord(dataUploadNewWord));
    });
  }



  render() {
    const { stateUploaded } = this.state;
    return (
      <Fragment>
        <TextField placeholder="escribe una palabra..." styles={style.input._definition} onChange={this.handlerTextWordChange} />
        {
          !stateUploaded ?
            <ButtonUploadImages onChange={this.handlerSelectImages} />
            :
            <Fragment>
              <CircleImageSquare images={imagesArray} styles={style.gridPreviewImages._definition} />
              <OptionsUploadWord onUpload={this.handlerUploadWord} onCancel={this.handlerCancelUploadWord} />
            </Fragment>
        }
      </Fragment>
    )
  }

}



export default connect()(UploadNewWord);
