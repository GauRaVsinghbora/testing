import heroVideo from '/src/assets/hero2.mp4'
const Home = () => {
    return (
        <div className="home-container">
            <video
                autoPlay
                muted
                loop
                className="background-video"
            >
                <source src={heroVideo} type="video/mp4" />
            </video>
            <div className="home-content">
                <h1>Unlock the Power of Every Minute</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat sit quo ex in quod.</p>
                <div>
                    <button className=''>plane a flight</button>
                    <button className=''>set a flight</button>
                </div>
            </div>
        </div>
    );
};

export default Home;