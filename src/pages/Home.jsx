import { FlipWords } from "../components/FlipWords";
import { Link } from "react-router-dom";
const Home = () => {
    const words = ["God", "us", "others"];
    const verses = {
        "John 3:16": "For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life.",
        "Jeremiah 29:11": "For I know the thoughts that I think toward you, says the Lord, thoughts of peace and not of evil, to give you a future and a hope.",
        "Philippians 4:13": "I can do all things through Christ who strengthens me.",
        "Isaiah 40:31": "But those who wait on the Lord shall renew their strength; they shall mount up with wings like eagles, they shall run and not be weary, they shall walk and not faint.",
        "Romans 8:28": "And we know that all things work together for good to those who love God, to those who are the called according to His purpose.",
        "Proverbs 3:5-6": "Trust in the Lord with all your heart, and lean not on your own understanding; in all your ways acknowledge Him, and He shall direct your paths.",
        "2 Timothy 1:7": "For God has not given us a spirit of fear, but of power and of love and of a sound mind.",
        "Psalm 23:1": "The Lord is my shepherd; I shall not want.",
        "Matthew 11:28": "Come to Me, all you who labor and are heavy laden, and I will give you rest.",
        "Romans 15:13": "Now may the God of hope fill you with all joy and peace in believing, that you may abound in hope by the power of the Holy Spirit."
      };
      
    const RandomVerse = () => {
        const keys = Object.keys(verses);
        const randomKey = keys[Math.floor(keys.length * Math.random())]
        const verseText = verses[randomKey];
        return (
            <>
                <h1 id="verse-text">"{verseText}"</h1>
                <p id="verse-number">{randomKey}</p>
            </>
        )
    }

    return (
        <>
            <div id="home-title-section">
                <h1>ST. THOMAS EPISCOPAL CHURCH</h1>
                <p>You matter to <FlipWords words={words} duration={1500}/></p>
            </div>
            <div id="home-why-section">
                <div id="home-why-sec-div-1">
                    <img src="https://stthomasbushwick.org/uploads/2023/08/DSC07556.jpg"></img>
                </div>
                <div id="home-why-sec-div-2">
                    <h1>Why Our Church?</h1>
                    <p>St. Thomas Episcopal Church is a Christian community called to communicate God’s love to people from all walks of life.  We are committed to being a sign to our city of God’s work, justice, peace, and love. We are a Parish family unified in giving thanks and praise to the Lord for his blessings. We celebrate through prayer, bible study, education, music, and food.</p>
                </div>
            </div>
            <div id="home-prayer-section">
                <h1>Need Prayer?</h1>
                <p>No matter what you’re facing, we’d love to pray with you!</p>
                <Link to="/prayer">
                    <button className="px-4 py-2 rounded-xl border border-neutral-600 text-black bg-white hover:bg-gray-100 transition duration-200">
                        Slide
                    </button>
                </Link>
            </div>
            <div id="home-verse-section">
                <h1 id="verse-title">A Glimpse Of Scripture</h1>
                <RandomVerse />
            </div>
        </>
    )
}

export default Home;