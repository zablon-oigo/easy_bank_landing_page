import mockups from './assets/images/image-mockups.png'
import MainContent from './MainContent';
function Hero(){
    return (
        <>
        <section className=" bg-slate-50 max-w-5xl mx-auto">
            <div className="flex items-center justify-between p-4 flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2">
                <h2 className="text-4xl text-gray-600 text-center md:text-start  mb-6">Next generation digital banking</h2>
                <p className="text-gray-500 text-lg text-center md:text-start mb-6">
                    Take your financial life online. Your Easybank account will be a one-stop-shop 
                    for spending, saving, budgeting, investing, and much more.
                </p>
                <div className="flex items-center justify-center md:justify-start">
                    <a href="" className="px-4 py-2   text-white font-semibold bg-gradient-to-r from-green-400  to-cyan-400 rounded-full">Request Invite</a>

                </div>

            </div>
            <div className="w-full sm:w-1/2 bg-clip-border bg-no-repeat bg-cover object-right-bottom bg-image-intro">
                <img src={mockups} alt=""className=""/>
            </div>
        </div>
        <section className="bg-gray-100">
            <div className="py-6 px-4">
            <h2 className=" md:mx-4 text-6xl md:text-4xl md:text-start text-gray-500 text-center mb-4">Why choose Easybank?</h2>
            <p className="text-lg  text-gray-500 md:mx-4 md:text-start text-center font-medium">
            We leverage Open Banking to turn your bank account into your financial hub.
            Control your finances like never before.
            </p>
        </div>
        </section>
    </section>
    <MainContent/>
        </>
    );

}
export default Hero;