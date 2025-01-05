import "./Content.css";
import { UilArrowDown } from "@iconscout/react-unicons";
export default function Content() {
  const toggleDropdown1 = () => {
    const dropdown = document.querySelector(".dropdown-content-first");
   
    if (dropdown.style.display === "none" || !dropdown.style.display) {
      dropdown.style.display = "block";
    } else {
      dropdown.style.display = "none";
    }
  };

  const toggleDropdown2 = () => {
    const dropdown = document.querySelector(".dropdown-content-second");

    if (dropdown.style.display === "none" || !dropdown.style.display) {
      dropdown.style.display = "block";
    } else {
      dropdown.style.display = "none";
    }
  };
  const toggleDropdown3 = () => {
    const dropdown = document.querySelector(".dropdown-content-third");

    if (dropdown.style.display === "none" || !dropdown.style.display) {
      dropdown.style.display = "block";
    } else {
      dropdown.style.display = "none";
    }
  };
  const toggleDropdown4 = () => {
    const dropdown = document.querySelector(".dropdown-content-fourth");

    if (dropdown.style.display === "none" || !dropdown.style.display) {
      dropdown.style.display = "block";
    } else {
      dropdown.style.display = "none";
    }
  };
  return (
    <div className="bg-black p-4">
      <h1 className="text-3xl text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent font-poppins md:font-semibold">
        Frequently asked questions
      </h1>
      <div className="text-white  gap-11 flex flex-col mt-24">
        <div  onClick={toggleDropdown1}  className="bg-customDropdown hover:bg-neutral-500 text-xl md:text-3xl p-4 rounded-xl flex justify-between">
          <h1>What is Movie Mania?</h1>
          <UilArrowDown
            className="h-8 w-8 text-white hover:text-blue-700 cursor-pointer transition-colors"
          />
        </div>
        <div className="dropdown-content-first bg-customDropdown text-xl md:text-3xl p-4 rounded-xl  ">
        Movie Mania is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. Theres always something new to discover, and new TV shows and movies are added every week!
        </div>

        <div  onClick={toggleDropdown2} className="bg-customDropdown hover:bg-neutral-500 text-xl md:text-3xl p-4 rounded-xl flex justify-between">
          <h1>How much Movie Mania cost?</h1>
          <UilArrowDown 
    
          className="h-8 w-8 text-white hover:text-blue-700 cursor-pointer transition-colors" />
        </div>
        <div className="dropdown-content-second bg-customDropdown text-xl md:text-3xl p-4 rounded-xl  ">
        Movie Mania is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. Theres always something new to discover, and new TV shows and movies are added every week!
        </div>
    
        
        <div  onClick={toggleDropdown3} className="bg-customDropdown hover:bg-neutral-500 text-xl md:text-3xl p-4 rounded-xl flex justify-between">
          <h1>What can I watch on Movie Mania?</h1>
          <UilArrowDown 
       
          className="h-8 w-8 text-white hover:text-blue-700 cursor-pointer transition-colors" />
        </div>
        <div className="dropdown-content-third bg-customDropdown text-xl md:text-3xl p-4 rounded-xl  ">
        Movie Mania is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. Theres always something new to discover, and new TV shows and movies are added every week!
        </div>
        <div   onClick={toggleDropdown4} className="bg-customDropdown hover:bg-neutral-500 text-xl md:text-3xl p-4 rounded-xl flex justify-between">
          <h1>Is this good for kids?</h1>
          <UilArrowDown 
          
          className="h-8 w-8 text-white hover:text-blue-700 cursor-pointer transition-colors" />
        </div>
        <div className="dropdown-content-fourth bg-customDropdown text-xl md:text-3xl p-4 rounded-xl  ">
        Movie Mania is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. Theres always something new to discover, and new TV shows and movies are added every week!
        </div>
      </div>
    </div>
  );
}
