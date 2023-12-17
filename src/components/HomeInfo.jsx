import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({text, link, btnText}) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
)

const renderContent = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      Hello! I am <span className='font-semibold'>Wei</span> 👋
      <br/>
      A Data Scientist/Engineer from Boston MA
    </h1>
  ),
  2: (
    <InfoBox
      text="Who am I and how did I got here?"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Never stop learning is my philosophy. Here are some projects I worked on"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a problem solver? I'm a few keystrokes away"
      link="/contact"
      btnText="Let's connect!"
    />
  ),
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
