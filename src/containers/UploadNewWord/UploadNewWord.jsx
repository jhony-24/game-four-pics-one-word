import React, { Component, Fragment } from 'react';
import style from './style';
import TextField from "src/components/atoms/TextField"
import CircleImageSquare from "src/components/molecules/CircleImageSquare"
import { connect } from "react-redux";
import { wordActions } from "src/ducks/word";
import ButtonUploadImages from './subcomponents/ButtonUploadImages';
import OptionsUploadWord from './subcomponents/OptionsUploadWord';


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
    const { letters, images } = this.state;
    const { dispatch } = this.props;
    dispatch(wordActions.uploadImages(images)).then(() => {

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
              <CircleImageSquare images={[]} styles={style.gridPreviewImages._definition} />
              <OptionsUploadWord onUpload={this.handlerUploadWord} onCancel={this.handlerCancelUploadWord} />
            </Fragment>
        }
      </Fragment>
    )
  }

}


export default connect()(UploadNewWord);
