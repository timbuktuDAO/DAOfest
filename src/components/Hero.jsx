import CountdownTimer from "../utils/CountdownTimer";

const Hero = () => {
  const targetDate = new Date(`2025-03-06T23:59:59`);
  return (
    <section className="hero__bg" id="home">
      <div className="absolute top-[13%] md:top-[18%]  w-full ">
        <div className="flex justify-between items-center section pt-10 ">
          <div className="sm:w-[60%] w-full mx-auto pt-4  flex flex-col gap-y-5 text-center justify-center  items-center">
            <div>
              <h4 className="text-[16px] font-Poppins text-Primary font-bold">
                6 March - 8 March 2025
              </h4>
              <h5 className="text-[16px] font-Poppins text-black font-medium">
                Dar es Salaam, Tanzania
              </h5>
            </div>

            <h2 className="text-[44px] font-Lexend text-black font-normal">
              DAO<span className="text-Primary">fest</span> 2025
            </h2>

            <div>
              <h4 className="text-[20px] font-Poppins font-normal text-black">
                Fuelling the future: Unleashing the Power of Decentralized
                Coordination.
              </h4>
            </div>

            <div>
              <h4 className="text-[17px] sm:text-[20px] font-Poppins font-medium text-black">
                Don’t Miss Out!!!
              </h4>
              <div className="sm:w-fit w-max mt-5">
                <CountdownTimer targetDate={targetDate} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
