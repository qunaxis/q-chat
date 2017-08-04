import React, { PropTypes, Component } from 'react'

export default class Page extends Component {
  // onYearBtnClick(e) {
  //   this.props.getPhotos(+e.target.innerText)
  // }
  createMarkup(payload) {
    return {__html: payload};
  }
  componentWillMount() {
    this.props.getProjects()
  }
  render() {
    // const { projects, fetching, error } = this.props
    const { projects, fetching } = this.props
    return <div className='ib page'>
      <h1>Проекты</h1>
      {/* <p>
        { years.map((item,index) =>  <button className='btn' key={index} onClick={::this.onYearBtnClick}>{item}</button> )}
      </p>
      <h3>{year} год [{photos.length}]</h3>
      { error ? <p className='error'> Во время загрузки фото произошла ошибка</p> : '' } */}
      {
        fetching ?
        <p>Загрузка...</p>
        :
        projects.map(project =>
          <div key={project._id}>
            <img src={`//localhost:3001${project.headerImageUrl}`} alt={project.name} />
            <div>
              <h1 dangerouslySetInnerHTML={this.createMarkup(project.name)} />
              <p>{project.startDate} - {project.finishDate}</p>
              <p>
                {
                  project.tags.map(tag => 
                    <span>{tag}</span>
                  )
                }
              </p>
              <div dangerouslySetInnerHTML={this.createMarkup(project.description)}></div>
              <p>{project.likes} ❤</p>
            </div>            
          </div>
        )
      }
    </div>
  }
}

Page.propTypes = {
  projects: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
}
