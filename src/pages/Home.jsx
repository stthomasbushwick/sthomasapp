import { FlipWords } from "../components/FlipWords";
import { Link } from "react-router-dom";
import { Parallax, useParallax, ParallaxBanner } from "react-scroll-parallax";
import church from "../assets/church.jpg";
import handsup from "../assets/handsup.jpg";
const Home = () => {
  const words = ["God", "us", "others"];
  const verses = {
    "James 1:6":
      "But when you ask, you must believe and not doubt, because the one who doubts is like a wave of the sea, blown and tossed by the wind",
    "John 20:29":
      "Jesus said to him, 'Because you have seen me, you have believed; blessed are those who have not seen and yet have believed",
    "Proverbs 3:5–6":
      "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight",
    "Romans 8:31":
      "What then shall we say to these things? If God is for us, who can be against us?",
    "Psalm 46:10": "Be still, and know that I am God.",
    "Romans 8:18":
      "For I consider that the sufferings of this present time are not worth comparing with the glory that is to be revealed to us",
    "Philippians 4:13": "I can do all things through him who strengthens me",
    "Psalm 23:4":
      "Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me",
    "Matthew 24:6":
      "And you will hear of wars and rumors of wars. See that you are not troubled; for all these things must come to pass, but the end is not yet",
    "Joshua 1:9":
      "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God is with you wherever you go",
    "Jeremiah 29:11":
      "For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future",
    "Proverbs 16:9":
      "The heart of man plans his way, but the Lord establishes his steps",
    "Job 22:28":
      "You will also decree a thing, and it shall be established for you; And light shall shine on your ways",
    "Isaiah 41:10":
      "Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand",
    "Romans 8:11":
      "And if the Spirit of him who raised Jesus from the dead is living in you, he who raised Christ from the dead will also give life to your mortal bodies because of his Spirit who lives in you",
    "Luke 23:24":
      "Then Jesus said, 'Father, forgive them, for they do not know what they are doing",
    "Ecclesiastes 32:19":
      "Do nothing without advice; and when thou hast once done, repent not",
    "Ecclesiastes 3:11":
      "He has made everything beautiful in its time. He has also set eternity in the human heart; yet no one can fathom what God has done from beginning to end",
    "Mark 11:24":
      "Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours",
    "Romans 14:13":
      "Therefore let us stop passing judgment on one another. Instead, make up your mind not to put any stumbling block or obstacle in the way of a brother or sister",
    "John 3:16":
      "For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life.",
    "Isaiah 40:31":
      "But those who wait on the Lord shall renew their strength; they shall mount up with wings like eagles, they shall run and not be weary, they shall walk and not faint.",
    "Romans 8:28":
      "And we know that all things work together for good to those who love God, to those who are the called according to His purpose.",
    "2 Timothy 1:7":
      "For God has not given us a spirit of fear, but of power and of love and of a sound mind.",
    "Psalm 23:1": "The Lord is my shepherd; I shall not want.",
    "Matthew 11:28":
      "Come to Me, all you who labor and are heavy laden, and I will give you rest.",
    "Romans 15:13":
      "Now may the God of hope fill you with all joy and peace in believing, that you may abound in hope by the power of the Holy Spirit.",
  };

  const whyParallaxImg = useParallax({ y: [-10, 10], speed: 10 });
  const whyParallaxText = useParallax({ y: [-15, 15], speed: 15 });

  const RandomVerse = () => {
    const keys = Object.keys(verses);
    const randomKey = keys[Math.floor(keys.length * Math.random())];
    const verseText = verses[randomKey];
    return (
      <>
        <h1 id="verse-text">"{verseText}"</h1>
        <p id="verse-number">{randomKey}</p>
      </>
    );
  };

  return (
    <>
      <ParallaxBanner
        layers={[
          {
            image: church,
            speed: -15,
          },
        ]}
        style={{ height: `calc(100vh - 64px)` }}>
        <Parallax speed={8}>
          <div id="home-title-section">
            <h1>ST. THOMAS EPISCOPAL CHURCH</h1>
            <p>
              You matter to <FlipWords words={words} duration={1500} />
            </p>
          </div>
        </Parallax>
      </ParallaxBanner>

      <div id="home-why-section">
        <div id="home-why-sec-div-1" ref={whyParallaxImg.ref}>
          <img src="https://stthomasbushwick.org/uploads/2023/08/DSC07556.jpg"></img>
        </div>
        <div id="home-why-sec-div-2" ref={whyParallaxText.ref}>
          <h1>Why Our Church?</h1>
          <p>
            St. Thomas Episcopal Church is a Christian community called to
            communicate God’s love to people from all walks of life.  We are
            committed to being a sign to our city of God’s work, justice, peace,
            and love. We are a Parish family unified in giving thanks and praise
            to the Lord for his blessings. We celebrate through prayer, bible
            study, education, music, and food.
          </p>
        </div>
      </div>

      <Parallax speed={10} id="home-why-section-mobile">
        <h1>Why Our Church?</h1>
        <img src="https://stthomasbushwick.org/uploads/2023/08/DSC07556.jpg"></img>
        <p>
          St. Thomas Episcopal Church is a Christian community called to
          communicate God’s love to people from all walks of life.  We are
          committed to being a sign to our city of God’s work, justice, peace,
          and love. We are a Parish family unified in giving thanks and praise
          to the Lord for his blessings. We celebrate through prayer, bible
          study, education, music, and food.
        </p>
      </Parallax>

      <ParallaxBanner
        layers={[
          {
            image: handsup,
            speed: -15,
          },
        ]}
        style={{ height: `calc(100vh - 100px)` }}>
        <Parallax speed={5}>
          <div id="home-prayer-section">
            <h1>Need Prayer?</h1>
            <p>No matter what you’re facing, we’d love to pray with you!</p>
            <Link to="/prayer">
              <button className="px-4 py-2 rounded-xl border border-neutral-600 text-black bg-white hover:bg-gray-100 transition duration-200 cursor-pointer">
                Pray With Us
              </button>
            </Link>
          </div>
        </Parallax>
      </ParallaxBanner>
      <Parallax id="home-verse-section" speed={15}>
        <h1 id="verse-title">A Glimpse Of Scripture</h1>
        <RandomVerse />
      </Parallax>
    </>
  );
};

export default Home;
