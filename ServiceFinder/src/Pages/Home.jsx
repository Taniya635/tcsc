import React from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import FeedbackCard from "../components/FeedbackCard";
import { Link } from "react-router-dom";

function Home() {
  const servicesData = [
    {
      id: 1,
      name: "Vishal Electrical Services",
      category: "Electrician",
      description: "Home wiring and electrical repairs.",
      location: "Kandivali, Mumbai",
      availability: "online",
      rating: 4.5,
      reviews: 120,
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Rahul Plumbing Works",
      category: "Plumber",
      description: "Reliable plumbing solutions.",
      location: "Borivali, Mumbai",
      availability: "busy",
      rating: 4.2,
      reviews: 85,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Neha Home Tutoring",
      category: "Tutor",
      description: "Personalized tutoring for students.",
      location: "Thane, Mumbai",
      availability: "online",
      rating: 4.8,
      reviews: 150,
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Rahul Plumbing Works",
      category: "Plumber",
      description: "Reliable plumbing solutions.",
      location: "Borivali, Mumbai",
      availability: "busy",
      rating: 4.2,
      reviews: 85,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Amit AC Repair & Services",
      category: "AC Repair",
      description: "AC servicing and maintenance.",
      location: "Andheri, Mumbai",
      availability: "offline",
      rating: 4.3,
      reviews: 60,
      image:
        "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Suresh Home Cleaning",
      category: "Cleaning",
      description: "Professional home cleaning services.",
      location: "Malad, Mumbai",
      availability: "online",
      rating: 4.6,
      reviews: 95,
      image:
        "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const feedbackData = [
    {
      id: 1,
      name: "Vishal Yadav",
      location: "Kandivali, Mumbai",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
      feedback:
        "The service was smooth and reliable. I found a professional within minutes."
    },
    {
      id: 2,
      name: "Neha Sharma",
      location: "Andheri, Mumbai",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9",
      feedback:
        "Very user-friendly platform. Booking and communication were seamless."
    },
    {
      id: 3,
      name: "Rahul Mehta",
      location: "Borivali, Mumbai",
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
      feedback:
        "Quick response and verified professionals. Highly recommended."
    },
    {
      id: 4,
      name: "Anjali Verma",
      location: "Thane, Mumbai",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
      feedback:
        "Loved the experience. The reviews really helped me choose the right service."
    },
    {
      id: 5,
      name: "Amit Kulkarni",
      location: "Mulund, Mumbai",
      image: "https://images.unsplash.com/photo-1603415526960-f7e0328f7b0a",
      feedback:
        "Simple UI and fast results. Saved me a lot of time."
    },
    {
      id: 6,
      name: "Pooja Nair",
      location: "Ghatkopar, Mumbai",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      feedback:
        "Customer support was very helpful. Great platform overall."
    },
    {
      id: 7,
      name: "Karan Malhotra",
      location: "Malad, Mumbai",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      feedback:
        "Professional services at affordable prices. Will use again."
    },
    {
      id: 8,
      name: "Sneha Patil",
      location: "Powai, Mumbai",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
      feedback:
        "Easy booking process and genuine reviews. Very satisfied."
    }
  ];

  function numIncrement () {

  }


  return (
    <div className=" w-full bg-white">

    {/* top */}
      <div className="h-[70vh]  bg-blue-400 flex items-center justify-center gap-5 overflow-hidden">
        <div className="  flex items-start justify-center flex-col w-[50vw]">
          <h1 className="text-6xl text-white">
            Find Trusted Local Services, Instantly.
          </h1>
          <p className="text-white mt-5 ">
            Discover verified professionals near you for electrical, plumbing,
            cleaning, tutoring, and more.
          </p>
          <div className="flex gap-5 mt-10">
            <button className="text-2xl bg-[#F25704] px-9 py-2 rounded-xl text-white border">
              Sign Up
            </button>
            <button className="text-2xl  px-3 py-2 rounded-xl text-white border">
              Our Services
            </button>
          </div>
        </div>

        <div className="h-[60vh] mt-15 ">
          <img
            className="h-full object-cover"
            src="public/images/worker.png"
            alt=""
          />
        </div>
      </div>


      {/* card */}
      <div className="w-full flex items-center flex-col mt-10">
        <h1 className="text-6xl text-black font-bold mt-5 text-center">
          Explore Our Services
        </h1>
        <p className="text-center text-black mt-5">
          Find skilled and trusted professionals for all your daily needs.
        </p>

        <div className="flex items-center justify-center flex-wrap gap-5 w-[70vw]  my-20 ">
          {servicesData.map((elem, idx) => {
            return <Card data={elem} key={idx} idx={idx} />;
          })}
        </div>

        <Link to='/service' onClick={() => window.scrollTo({top: 0, left: 0,behavior: "smooth" })}>
        <div className=" px-5 py-3 border-gray-500 border-3 rounded-3xl font-semibold hover:scale-105 transition cursor-pointer"> Browse More Services</div>
      </Link>

    </div>
    
        

      {/* <div className=" w-full p-5 flex items-center justify-center flex-col">
        <h1 className="text-6xl text-black font-bold  text-center mt-10">
          Our Review and Feedback
        </h1>
        <p className="text-center text-black mt-5">
          See how findservice has transformed user's experiences through their
          own words
        </p>

        <div className="h-full w-[80vw] p-5 flex justify-center gap-5 mt-10  card-wrapper flex-nowrap ">
          <div className="card-trackLeft">
            {feedbackData.map((elem, idx) => {
              return <FeedbackCard key={idx} data={elem} />;
            })}
          </div>
        </div>

        <div className="h-full w-[80vw] p-5 flex justify-center gap-5 card-wrapper flex-nowrap">
          <div className="card-trackRight">
            {feedbackData.map((elem, idx) => {
              return <FeedbackCard key={idx} data={elem} />;
            })}
          </div>
        </div>

      </div> */}

  <Footer />
    </div >
  );
}

export default Home;
