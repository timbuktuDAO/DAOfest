import CountdownTimer from "../utils/CountdownTimer";

const Hero = () => {
  const currentYear = new Date().getFullYear();
  const targetDate = new Date(`${currentYear}-04-19T23:59:59`);
  return (
    <section className="hero__bg" id="home">
      <div className="absolute top-[10%] md:top-[11%]  w-full ">
        <div className="flex justify-between items-center section pt-10 ">
          <div className="sm:w-[60%] w-full mx-auto pt-4  flex flex-col gap-y-5 text-center justify-center  items-center">
            <div>
              <h4 className="text-[16px] font-Poppins text-Primary font-bold">
                12th-13th April 2024
              </h4>
              <h5 className="text-[16px] font-Poppins text-black font-normal">
                Lagos, Nigeria
              </h5>
            </div>

            <h2 className="text-[44px] font-Lexend text-black font-normal">
              DAO<span className="text-Primary">fest</span> 2024
            </h2>

            <div>
              <h4 className="text-[20px] font-Poppins font-normal text-black">
                Unleashing Decentralized Coordination, <br /> Empowering
                Tomorrow
              </h4>
            </div>

            <div>
              <h4 className="text-[17px] sm:text-[20px] font-Poppins font-medium text-black">
                Don’t Miss!!!
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
