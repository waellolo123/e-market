import { assets } from "../assets/assets"
import NewsLetterBox from "../components/NewsLetterBox"
import Title from "../components/Title"


const About = () => {
  return (
    <div className="">
     <div className="text-2xl text-center pt-8 border-t ">
      <Title text1={"About"} text2={"Us"} />
     </div>
     <div className="my-10 flex flex-col md:flex-row gap-16 ">
      <img src={assets.about_img} className="w-full md:max-w-[450px] " alt="" />
      <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
       <p>E-Market was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily Discover, explore and purchase a wide range of products from the comfort of their homes.</p>
       <p>Since Our inception, we've worked tirelessly to curate a diverse selection Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laudantium ratione perferendis impedit similique animi illo in eius sed. Eius!</p>
       <b className="text-gray-600">Our Mission</b>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odio nemo necessitatibus nam ducimus, totam sit nulla consequuntur officia maxime aliquam cumque laborum sapiente fugit eaque labore, cupiditate numquam suscipit mollitia sint?</p>
      </div>
     </div>
     <div className="text-2xl py-4 ">
      <Title text1={"Why"} text2={"Choose us"}/>
     </div>
     <div className="flex flex-col md:flex-row text-sm mb-20">
      <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Quality Assurance</b>
        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati nemo ipsum impedit debitis exercitationem vitae voluptas accusantium! Repellat, delectus sint.</p>
      </div>
      <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Convenience</b>
        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati nemo ipsum impedit debitis exercitationem vitae voluptas accusantium! Repellat, delectus sint.</p>
      </div>
      <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Exceptional Customer Service</b>
        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati nemo ipsum impedit debitis exercitationem vitae voluptas accusantium! Repellat, delectus sint.</p>
      </div>
     </div>
     <NewsLetterBox />
    </div>
  )
}

export default About