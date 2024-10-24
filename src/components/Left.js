import React from 'react'
const MiniDetails = (props) => {
    return (
        <div className='mini-details'>
            <i class={props.img}></i>
            <span>{props.text}</span>
        </div>
    )
}
const Skill = (props) => {
    return (
        <div className="skill">
            <div className="skill-name">
                {props.name}
            </div>
            <div className="percent">
                <div className="done" style={{width: `${props.donePercentage}%`}}>
                    {props.donePercentage}%
                </div>
            </div>
        </div>
    )
}
const Left = () => {
  return (
    <div className='left' >
        <div className="item">
        <div className="profile">
            <img src="https://www.w3schools.com/w3images/avatar_hat.jpg" alt="" />
            <div>Mary Jane</div>
        </div>
        <ul className='details'>
            <li>< MiniDetails img="fa fa-briefcase" text= 'Designer'/></li>
            <li>< MiniDetails img="fa fa-home" text= 'London, UK'/></li>
            <li>< MiniDetails img="fa fa-envelope" text= 'ex@mail.com'/></li>
            <li>< MiniDetails img="fa fa-phone" text= '1224435534'/></li>
        </ul>
        <hr />
        <div className='bold-skill'>< MiniDetails img='fa fa-asterisk' text='Skills'/></div>
        <Skill name='Adobe Photoshop' donePercentage={90}/>
        <Skill name='Photography' donePercentage={80}/>
        <Skill name='Illustrator' donePercentage={75}/>
        <Skill name='Media' donePercentage={50}/>
        <hr />
        <div className='bold-skill'>< MiniDetails img='fa fa-globe' text='Languages'/></div>
        <div className='language'>
            <Skill name='English' donePercentage={100}/>
        </div>
        <div className='language'>
            <Skill name='Spanish' donePercentage={60}/>
        </div>
        <div className='language'>
            <Skill name='German' donePercentage={30}/>
        </div>
        </div>
    </div>
  )
}

export default Left
