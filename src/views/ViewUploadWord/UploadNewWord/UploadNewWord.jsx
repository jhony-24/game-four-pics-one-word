import React, { Component, Fragment, createRef } from 'react';
import style from './style';
import TextField from "src/components/atoms/TextField"
import CircleImageSquare from "src/components/molecules/CircleImageSquare"
import { connect } from "react-redux";
import { wordActions } from "src/redux/word";
import ButtonUploadImages from './subcomponents/ButtonUploadImages';
import OptionsUploadWord from './subcomponents/OptionsUploadWord';
import Loading from 'src/components/atoms/Loading/Loading';

class UploadNewWord extends Component {
  constructor() {
    super();
    this.word = createRef();
    this.state = {
      images: null,
      stateUploaded: false
    }
  }

  handlerSelectImages = event => {
    this.setState({ images: event.target.files, stateUploaded: true });
  }

  handlerCancelUploadWord = () => {
    this.setState({
      images: null,
      stateUploaded: false
    });
  }

  handlerUploadWord = () => {
    const { images } = this.state;
    const letters = this.word.current.value;
    const { dispatch } = this.props;
    dispatch(wordActions.uploadNewWord({ letters, images }));
  }

  getPreviewImages = () => {
    let allImages = [...this.state.images];
    let allUrls = allImages.map(currentFileImage => {
      return URL.createObjectURL(currentFileImage);
    });
    return allUrls;
  }

  render() {
    const { stateUploaded } = this.state;
    const { loadingUpload } = this.props;
    return (
      <Fragment>
        {
          loadingUpload ?
            <Loading size={60} text="subiendo..." /> :
            <Fragment>
              <TextField placeholder="escribe una palabra..." styles={style.input._definition} ref={this.word} />
              {
                !stateUploaded ?
                  <ButtonUploadImages onChange={this.handlerSelectImages} />
                  :
                  <Fragment>
                    <CircleImageSquare images={this.getPreviewImages()} styles={style.gridPreviewImages._definition} />
                    <OptionsUploadWord onUpload={this.handlerUploadWord} onCancel={this.handlerCancelUploadWord} />
                  </Fragment>
              }
            </Fragment>
        }
      </Fragment>
    )
  }
}

const mapStateToProps = ({ word }) => ({
  loadingUpload: word.loadingUpload,
})

export default connect(mapStateToProps)(UploadNewWord);
