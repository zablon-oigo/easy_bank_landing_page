import card from './assets/images/icon-online.svg'
import budget from './assets/images/icon-budgeting.svg'
import onboarding from './assets/images/icon-onboarding.svg'
import open from './assets/images/icon-api.svg'

function MainContent(){
    return (
        <div>
           <section className="bg-gray-100 max-w-5xl mx-auto py-6 px-6">
            <div className="grid sm:grid-cols-4 grid-cols-1 place-content-center gap-2 ">
                <div className="flex items-center md:items-start flex-col justify-center ">
                    <img src={card} alt="" className="mb-4" />
                    <div className="text-center md:text-start">
                        <h2 className="text-2xl text-gray-600 mb-4">
                        Online Banking
                        </h2>
                        <p className="md:text-sm text-md text-gray-500 ">
                        Our modern web and mobile applications allow you to keep track of your finances 
                        wherever you are in the world.
                        </p>
                    </div>
                </div>
                <div className="flex items-center md:items-start flex-col justify-center">
                    <img src={budget} alt="" className="mb-4" />
                    <div className="text-center md:text-start">
                        <h2 className="text-2xl text-gray-600 mb-4">
                        Simple Budgeting
                        </h2>
                        <p className="md:text-sm text-md text-gray-500 ">
                        See exactly where your money goes each month. Receive notifications when you’re 
                        close to hitting your limits.
                        </p>
                    </div>
                </div>
                <div className="flex items-center md:items-start flex-col justify-center">
                    <img src={onboarding} alt="" className="mb-4" />
                    <div className="text-center md:text-start">
                        <h2 className="text-2xl text-gray-600 mb-4">
                        Fast Onboarding
                        </h2>
                        <p className="md:text-sm text-md text-gray-500 ">
                        We don’t do branches. Open your account in minutes online and start taking control 
                        of your finances right away.
                        </p>
                    </div>
                </div>
                <div className=" flex items-center md:items-start flex-col justify-center">
                    <img src={open} alt="" className="mb-4" />
                    <div className="text-center md:text-start">
                        <h2 className=" text-2xl text-gray-600 mb-4">
                        Open API
                        </h2>
                        <p className="md:text-sm text-md text-gray-500 ">
                        Manage your savings, investments, pension, and much more from one account. Tracking 
                        your money has never been easier.
                        </p>
                    </div>
                </div>
            </div>
           </section>
        </div>
    );
}
export default MainContent;