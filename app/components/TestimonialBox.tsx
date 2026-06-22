import { themeImages } from '../lib/assets';

type TestimonialBoxProps = {
  text: string;
  name: string;
};

export default function TestimonialBox({ text, name }: TestimonialBoxProps) {
  return (
    <div className="testimonial-item">
      <div className="testimonial-box">
        <div className="testimonial-box-item">
          <img
            className="testimonial-star"
            src={themeImages.testimonialStar}
            alt=""
          />
          <span className="testimonial-text">{text}</span>
          <span className="testimonial-name">{name}</span>
        </div>
      </div>
    </div>
  );
}
