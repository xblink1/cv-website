import React from 'react'
const Heading = (props) => {
  return (
    <div className='heading'>
      <i className={props.img} ></i>
      <span>{props.title}</span>
    </div>
  )
}
const Block = (props) => {
  return (
    <div className='block'>
      <div className="title">
        {props.title}
      </div>
      <div className="date">
        <i className='fa fa-calendar' ></i>
        <span className="date-time">
          <span className="start-date">
            {props.startDate}
          </span>
          <span className= {`end-date ${props.ex}`}>
            {props.endDate}
          </span>
        </span>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, sint! Aperiam aliquam porro repellat voluptatem quasi excepturi a impedit deserunt?</p>
    </div>
  )
}
const Right = () => {
  return (
    <div className='right'>
      <div className="top">
        <Heading img='fa fa-suitcase' title='Work Experience'/>
        <Block title='Front End Developer / w3schools.com'
          startDate='Jan 2015 - '
          endDate='Current'
          ex='current'
        />
        <hr />
        <Block title='Web Developer / something.com'
          startDate='Mar 2012'
          endDate=' - Dec 2014'
        />
        <hr />
        <Block title='Graphic Designer / designsomething.com'
          startDate='Jun 2010'
          endDate=' - Mar 2012'
        />
      </div>
      <div className="bottom">
        <Heading img='fa fa-certificate' title='Education' />
        <Block title='W3Schools.com'
          startDate='Forever'
          endDate=''
        />
        <hr />
        <Block title='London Business School'
          startDate='2013'
          endDate=' - 2015'
        />
        <hr />
        <Block title='School of Coding'
          startDate='2010'
          endDate=' - 2013'
        />
      </div>
    </div>
  )
}

export default Right
