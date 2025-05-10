import { FlipWords } from "../../components/FlipWords";
const Home = () => {
    const words = ["God", "us", "others"]
    return (
        <>
            <div id="home-section-1">
                <h1>ST. THOMAS EPISCOPAL CHURCH</h1>
                <p>You matter to <FlipWords words={words} duration={1500}/></p>
            </div>
            <div id="home-section-2">
                <div id="home-sec-2-div-1">
                    <img src="https://stthomasbushwick.org/uploads/2023/08/DSC07556.jpg"></img>
                </div>
                <div id="home-sec-2-div-2">
                    <h1>Why Our Church?</h1>
                    <p>St. Thomas Episcopal Church is a Christian community called to communicate God’s love to people from all walks of life.  We are committed to being a sign to our city of God’s work, justice, peace, and love. We are a Parish family unified in giving thanks and praise to the Lord for his blessings. We celebrate through prayer, bible study, education, music, and food.</p>
                </div>
            </div>
            <div id="home-section-3">
                <h1>Need Prayer?</h1>
                <p>No matter what you’re facing, we’d love to pray with you!</p>
                <button className="px-4 py-2 rounded-xl border border-neutral-600 text-black bg-white hover:bg-gray-100 transition duration-200">
                    Slide
                </button>
            </div>
        </>
    )
}

export default Home;