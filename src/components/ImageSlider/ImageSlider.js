import { me } from '../../constants/constants';
import { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { Wrapper } from './ImageSliderStyles';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

  return (
    slides &&
    slides.length > 0 && (
      <Wrapper>
        <FaArrowAltCircleLeft className="arrow left" onClick={prevSlide} />
        {slides.map(({ src, alt }, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <img className="image" src={src} alt={alt} title={alt} />
              )}
            </div>
          );
        })}
        <FaArrowAltCircleRight className="arrow right" onClick={nextSlide} />
      </Wrapper>
    )
  );
};

export default ImageSlider;
