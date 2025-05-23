// import {assets} from "../assets/assets";
import hero_img1 from "../assets/hero_img1.jpg"

const Hero = () => {
  return (
    <div className="mt-10 flex flex-col sm:flex-row border border-gray-400">
      {/* hero left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
      <div className="text-[#414141] ">
        <div className="flex items-center gap-2">
          <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          <p className="font-medium text-sm md:text-base">Our BestSellers</p>
        </div>
        <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed">Latest Arrivals</h1>
        <div className="flex items-center gap-2">
          <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
          <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
        </div>
      </div>
      </div>
      {/* hero right side */}
      <img src={hero_img1} className="w-full h-[300px] object-cover sm:w-1/2 sm:h-[500px] " alt="" />
    </div>
  )
}

export default Hero;
