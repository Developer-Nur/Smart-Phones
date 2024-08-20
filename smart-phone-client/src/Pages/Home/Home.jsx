import BannerImage from "/images/bannerImage.jpg"

const Home = () => {
    return (
        <>
            <div className=" hero lg:min-h-screen flex flex-col lg:flex-row justify-between items-center gap-5 px-5 md:px-10 lg:px-20 my-10 bg-gray-100 rounded-lg">
                <div className="w-full lg:w-2/4">
                    <h1 className="text-5xl font-bold">Get a new smart phone</h1>
                    <p className="py-6">
                        Acquisition of a new smartphone entails embracing cutting-edge technology and enhanced connectivity. Seek to explore innovative features and improved performance that redefine user experience.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
                <div className="w-full lg:w-2/4">
                    <img
                        src={BannerImage}
                        className="w-full mx-auto rounded-lg shadow-2xl" />
                </div>

            </div>


        </>
    );
};

export default Home;