import React from 'react';
import foto1 from '../images/photos/1.jpeg'
import foto2 from '../images/photos/2.jpeg'
import foto3 from '../images/photos/3.jpeg'
import foto4 from '../images/photos/4.jpeg'
import foto5 from '../images/photos/5.jpeg'
import foto6 from '../images/photos/6.jpg'

class Suites extends React.Component {
  render() {
    const photos = [foto1,foto2,foto3,foto4,foto5,foto6];
    const menu = photos.map((photo) => <img className="main-photos" src={photo} alt="" />)
    return (
      <section className='main-suites'>
        {menu}
      </section>
    );
  }
}

export default Suites;