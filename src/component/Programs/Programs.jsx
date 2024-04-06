import React from 'react';
import './Programs.css';
import program2 from '../../assets/program_2.jpg';
import program1 from '../../assets/program_1.jpg';
import program3 from '../../assets/program_3.jpg';
import programIcon from '../../assets/program_icon1.jpg';
import programIcon2 from '../../assets/program_icon2.jpg';
import programIcon3 from '../../assets/program_icon3.jpg';

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program2} alt="Program 2" />
        <div className="caption">
          <img src={programIcon} alt="Program Icon" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program1} alt="Program 1" />
        <div className="caption">
          <img src={programIcon2} alt="Program Icon 2" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program3} alt="Program 3" />
        <div className="caption">
          <img src={programIcon3} alt="Program Icon 3" />
          <p>Graduation Degree</p>
        </div>
      </div>
    </div>
  );
};

export default Programs