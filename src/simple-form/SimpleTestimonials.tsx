import type { FC } from 'react';
import { useMemo } from 'react';

type Testimonial = {
  name: string;
  location: string;
  text: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'John D.',
    location: 'France',
    text: 'Got my quote in 18h, very professional',
  },
  {
    name: 'Sarah M.',
    location: 'Germany',
    text: 'Clear communication and fast response time',
  },
  {
    name: 'Michael K.',
    location: 'UK',
    text: 'Excellent service, helped me understand the process',
  },
];

type SimpleTestimonialsProps = {
  t: (key: string, fallback: string) => string;
  count?: number;
};

const SimpleTestimonials: FC<SimpleTestimonialsProps> = ({ t, count = 2 }) => {
  // Randomly select testimonials on mount
  const selectedTestimonials = useMemo(() => {
    const shuffled = [...TESTIMONIALS].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, TESTIMONIALS.length));
  }, [count]);

  if (selectedTestimonials.length === 0) {
    return null;
  }

  return (
    <div
      className="sino-simple-form__testimonials"
      role="complementary"
      aria-label={t('testimonialsAriaLabel', 'Customer testimonials')}
    >
      {selectedTestimonials.map((testimonial, index) => (
        <div key={`${testimonial.name}-${index}`} className="sino-simple-form__testimonial">
          <div className="sino-simple-form__testimonial-content">
            <p className="sino-simple-form__testimonial-text">"{testimonial.text}"</p>
            <p className="sino-simple-form__testimonial-author">
              {testimonial.name} — {testimonial.location}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SimpleTestimonials;
