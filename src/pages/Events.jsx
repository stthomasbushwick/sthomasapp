import { Carousel } from "../components/Carousel";
import mothersday23 from "../assets/mothersday23.jpg";
import mothersday2025 from "../assets/mothersday2025.jpeg";

const slides = [
  {
    src: "src/assets/Mothersday24.jpg",
    title: "Mother's Day Luncheon 2024",
    // button: "Sign Up",
    description:
      "A heartfelt afternoon honoring the strength, grace, and love of all mothers. Guests enjoyed delicious food, warm fellowship, and uplifting tributes that made the day truly unforgettable.",
    url: "https://stthomas.pixieset.com/mothersday2024/",
  },
  {
    src: "src/assets/christmasholiday.jpg",
    title: "2023 Christmas Holiday",
    // button: "Learn More",
    description:
      "A warm and festive celebration filled with laughter, music, and the spirit of giving. Families gathered to share joy, exchange gifts, and reflect on the true meaning of Christmas together.",
    url: "https://stthomas.pixieset.com/2023christmasholiday/",
  },
  {
    src: "src/assets/Dinner2.jpg",
    title: "Father Sully Appreciation Dinner",
    // button: "RSVP Now",
    description:
      "An evening of gratitude and celebration dedicated to Father Sully’s unwavering service and spiritual leadership. The community came together to honor his impact with heartfelt words, joyful memories, and a shared meal filled with love.",
    url: "https://stthomas.pixieset.com/fathersullydinner/",
  },
  {
    src: "src/assets/Mothersday23.jpg",
    title: "Mother's Day Luncheon 2023",
    // button: "Sign Up",
    description:
      "A beautiful gathering filled with heartfelt moments, meaningful connections, and genuine appreciation for every mother in attendance. The event featured flavorful dishes, joyful conversations, and touching expressions of love that left a lasting impression.",
    url: "https://stthomas.pixieset.com/mothersday2023/",
  },
];

const Events = () => {
  const handleClick = (slide) => {
    if (slide.url) {
      window.open(slide.url, "_blank");
    }
  };

  return (
    <>
      <h1 className="text-4xl text-center font-bold mt-6">
        Church Held Events
      </h1>
      <div className="overflow-hidden">
        <Carousel slides={slides} onSlideClick={handleClick} />
      </div>
      <div className="bg-[#031E29]">
        <h1 className="text-4xl text-center font-bold text-white pt-15 mt-5">
          Upcoming Events
        </h1>
        <div className="text-white py-16 px-6 flex flex-col lg:flex-row items-center justify-center">
          <div className="flex-1 w-full text-center lg:text-center">
            <h1 className="text-2xl md:text-5xl font-semibold mb-6">
              Mother’s Day Luncheon 2025
            </h1>
            <p className="text-lg md:text-2xl leading-relaxed text-gray-300 mb-8 max-w-xl lg:text-center mx-auto">
              Join us as we celebrate the incredible women who nurture, lead,
              and inspire us every day. This special luncheon is dedicated to
              honoring all mothers and mother figures with a joyful afternoon of
              fellowship, delicious food, and heartfelt appreciation.
            </p>
          </div>

          <div className="flex-1 w-full flex justify-center">
            <img className="event-img" src={mothersday2025} alt="mothersday" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
