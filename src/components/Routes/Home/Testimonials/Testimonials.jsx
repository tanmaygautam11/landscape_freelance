import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";

const testimonials = [
  {
    text: "Everyone at Flores was very professional and friendly! I had great interactions with the owner Mr. Flores, project manager Eric, office staff, and the men who did the difficult labour on hot summer days. When I called the first time the staff was nice they booked my first meeting to discuss what we needed straight away.",
    author: "Megan T.",
  },
  {
    text: "If I could give these guys a thousand stars I WOULD. Rumaldo and his guys are amazing! Over the course of the job, they became like family to us. Rumaldo is a great listener. He genuinely cared about executing our vision. He worked with our budget and delivered a flawless landscape! They turned our shabby, ugly, unsustainable yard into a beautifully designed, functional, environmentally sound space for the whole family. Thank you, thank you, thank you!!!",
    author: "Uma S.",
  },
  {
    text: "Flores Landscaping worked with me every step of the way, even though I was on business trips and vacations most of the time. We communicated via phone and photos and once I got back, the yard was absolutely stunning! The team was amazing, no complaints, and very thoughtful and clean. I'm happy and will be enjoying dinners al fresco, movie nights outside my back deck, and just sitting outside watching my kids take advantage of our space!",
    author: "Lynn H.",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section className="testimonials-section">
      <div className="overlay"></div>
      <h2>TESTIMONIALS</h2>
      <h3>Dont take our word for it, read our reviews</h3>

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p>{testimonial.text}</p>
            <i className="author">— {testimonial.author}</i>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
