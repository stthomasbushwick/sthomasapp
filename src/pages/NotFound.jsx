import {Link} from 'react-router-dom'
const NotFound = () => {
    return (
        <div id="not-found-div">
            <h1>404</h1>
            <p>
                "In all your ways acknowledge Him, and He will make your paths straight." <br />
                — Proverbs 3:6
            </p>
            <Link to="/"> 
                <button className="px-4 py-2 rounded-xl border border-neutral-600 text-white bg-black hover:bg-[#2e2e2e] transition duration-200 cursor-pointer">
                    Take Me Home
                </button>
            </Link>
        </div>
    )
}

export default NotFound;