import React, { PropTypes, Component } from 'react'

export default class Chat extends Component {
  // onYearBtnClick(e) {
  //   this.props.getPhotos(+e.target.innerText)
  // }
  createMarkup(payload) {
    return {__html: payload};
  }
  componentDidMount() {
    this.props.connectToSocket()
  }
  render() {
    const { messages, fetching, error } = this.props
    return <div className=''>
      {/* <p>
        { years.map((item,index) =>  <button className='btn' key={index} onClick={::this.onYearBtnClick}>{item}</button> )}
      </p>
      <h3>{year} год [{photos.length}]</h3>
      { error ? <p className='error'> Во время загрузки фото произошла ошибка</p> : '' }  */}
      { error ? <p className='error'>{ error }</p> : '' }
      {
        fetching ?
        <p>Загрузка...</p>
        :
        messages.map(message =>
          <p key={message._id}>
            {message}
          </p>
        )
      }
    </div>
  }
}

Chat.propTypes = {
  messages: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired
}