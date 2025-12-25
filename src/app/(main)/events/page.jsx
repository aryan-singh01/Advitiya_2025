"use client";

import React, { useEffect, useState } from "react";
import Background from "@/components/BackgroundEvent";
import { dataContext } from "@/context/dataContext";
import { useContext } from "react";
import { motion } from "framer-motion";
import EventCard from "@/components/EventCard";
import EventRegistrationModal from "@/components/EventRegistrationModal";
import axios from "axios";
import { toast } from "sonner";
import { StarsBackground } from "@/components/StarsBackground";

const eventList = [
  // {
  //   clubName: "Aeromodelling Club",
  //   events: [
  //     {
  //       id: 1,
  //       eventName: "Flight fury - FPV drone racing",
  //       eventImage: "",
  //       isRegistrationOpen: true,
  //       eventDate: "06/02/2026",
  //       eventTime: "03:00 PM",
  //       description: "This is the event we have created",
  //       registrationLink: "https://advitiya-2025.vercel.app/",
  //       minSize: 3,
  //       maxSize: 4,
  //       eventRuleBook: ""
  //     },
  //   ]
  // },
  // {
  //   clubName: "Automotive Club",
  //   events: [
  //     {
  //       id: 1,
  //       eventName: "Full Throttle ",
  //       eventImage: "",
  //       isRegistrationOpen: true,
  //       eventDate: "06/02/2026",
  //       eventTime: "03:00 PM",
  //       description: "This is the event we have created",
  //       registrationLink: "https://advitiya-2025.vercel.app/",
  //       minSize: 3,
  //       maxSize: 4,
  //       eventRuleBook: ""
  //     },
  //   ]
  // },
  // {
  //   clubName: "CIM",
  //   events: [
  //     {
  //       id: 1,
  //       eventName: "CADvergence",
  //       eventImage: "",
  //       isRegistrationOpen: true,
  //       eventDate: "06/02/2026",
  //       eventTime: "03:00 PM",
  //       description: "This is the event we have created",
  //       registrationLink: "https://advitiya-2025.vercel.app/",
  //       minSize: 1,
  //       maxSize: 2,
  //       eventRuleBook: ""
  //     },
  //     {
  //       id: 2,
  //       eventName: "Cyber Forge",
  //       eventImage: "",
  //       isRegistrationOpen: true,
  //       eventDate: "06/02/2026",
  //       eventTime: "03:00 PM",
  //       description: "This is the event we have created",
  //       registrationLink: "https://advitiya-2025.vercel.app/",
  //       minSize: 1,
  //       maxSize: 4,
  //       eventRuleBook: ""
  //     },
  //   ]
  // },
  // {
  //   clubName: "Coding Club",
  //   events: [
  //     {
  //       id: 1,
  //       eventName: "COD-COM",
  //       eventImage: "",
  //       isRegistrationOpen: true,
  //       eventDate: "06/02/2026",
  //       eventTime: "03:00 PM",
  //       description: "This is the event we have created",
  //       registrationLink: "https://advitiya-2025.vercel.app/",
  //       minSize: 2,
  //       maxSize: 3,
  //       eventRuleBook: ""
  //     },
  //     {
  //       id: 2,
  //       eventName: "Codehunt",
  //       eventImage: "",
  //       isRegistrationOpen: true,
  //       eventDate: "06/02/2026",
  //       eventTime: "03:00 PM",
  //       description: "This is the event we have created",
  //       registrationLink: "https://advitiya-2025.vercel.app/",
  //       minSize: 2,
  //       maxSize: 3,
  //       eventRuleBook: ""
  //     },
  //     {
  //       id: 3,
  //       eventName: "Algo -Unlock",
  //       eventImage: "",
  //       isRegistrationOpen: true,
  //       eventDate: "06/02/2026",
  //       eventTime: "03:00 PM",
  //       description: "This is the event we have created",
  //       registrationLink: "https://advitiya-2025.vercel.app/",
  //       minSize: 2,
  //       maxSize: 3,
  //       eventRuleBook: ""
  //     },
  //     {
  //       id: 4,
  //       eventName: "CODECHEF",
  //       eventImage: "",
  //       isRegistrationOpen: true,
  //       eventDate: "06/02/2026",
  //       eventTime: "03:00 PM",
  //       description: "This is the event we have created",
  //       registrationLink: "https://advitiya-2025.vercel.app/",
  //       minSize: 2,
  //       maxSize: 3,
  //       eventRuleBook: ""
  //     },
  //   ]
  // },
  // {
  //   clubName: "ESportZ ",
  //   events: [
  //     {
  //       id: 1,
  //       eventName: "Treasure Hunt",
  //       eventImage: "",
  //       isRegistrationOpen: true,
  //       eventDate: "06/02/2026",
  //       eventTime: "03:00 PM",
  //       description: "This is the event we have created",
  //       registrationLink: "https://advitiya-2025.vercel.app/",
  //       minSize: 2,
  //       maxSize: 3,
  //       eventRuleBook: ""
  //     },
  //     {
  //       id: 2,
  //       eventName: "BGMI",
  //       eventImage: "",
  //       isRegistrationOpen: true,
  //       eventDate: "06/02/2026",
  //       eventTime: "03:00 PM",
  //       description: "This is the event we have created",
  //       registrationLink: "https://advitiya-2025.vercel.app/",
  //       minSize: 4,
  //       maxSize: 4,
  //       eventRuleBook: ""
  //     },
  //     {
  //       id: 3,
  //       eventName: "Clash Royale ",
  //       eventImage: "",
  //       isRegistrationOpen: true,
  //       eventDate: "06/02/2026",
  //       eventTime: "03:00 PM",
  //       description: "This is the event we have created",
  //       registrationLink: "https://advitiya-2025.vercel.app/",
  //       minSize: 1,
  //       maxSize: 1,
  //       eventRuleBook: ""
  //     },
  //   ]
  // },
  // {
  //   clubName: "ESportZ ",
  //   events: [
  //     {
  //       id: 1,
  //       eventName: "Treasure Hunt",
  //       eventImage: "",
  //       isRegistrationOpen: true,
  //       eventDate: "06/02/2026",
  //       eventTime: "03:00 PM",
  //       description: "This is the event we have created",
  //       registrationLink: "https://advitiya-2025.vercel.app/",
  //       minSize: 2,
  //       maxSize: 3,
  //       eventRuleBook: ""
  //     },
  //     {
  //       id: 2,
  //       eventName: "BGMI",
  //       eventImage: "",
  //       isRegistrationOpen: true,
  //       eventDate: "06/02/2026",
  //       eventTime: "03:00 PM",
  //       description: "This is the event we have created",
  //       registrationLink: "https://advitiya-2025.vercel.app/",
  //       minSize: 4,
  //       maxSize: 4,
  //       eventRuleBook: ""
  //     },
  //     {
  //       id: 3,
  //       eventName: "Clash Royale ",
  //       eventImage: "",
  //       isRegistrationOpen: true,
  //       eventDate: "06/02/2026",
  //       eventTime: "03:00 PM",
  //       description: "This is the event we have created",
  //       registrationLink: "https://advitiya-2025.vercel.app/",
  //       minSize: 1,
  //       maxSize: 1,
  //       eventRuleBook: ""
  //     },
  //   ]
  // },
  // {
  //   clubName: "FinCOM",
  //   events: [
  //     {
  //       id: 1,
  //       eventName: "Case Study",
  //       eventImage: "",
  //       isRegistrationOpen: true,
  //       eventDate: "06/02/2026",
  //       eventTime: "03:00 PM",
  //       description: "This is the event we have created",
  //       registrationLink: "https://advitiya-2025.vercel.app/",
  //       minSize: 1,
  //       maxSize: 3,
  //       eventRuleBook: ""
  //     },
  //     {
  //       id: 2,
  //       eventName: "Trader's Arena",
  //       eventImage: "",
  //       isRegistrationOpen: true,
  //       eventDate: "06/02/2026",
  //       eventTime: "03:00 PM",
  //       description: "This is the event we have created",
  //       registrationLink: "https://advitiya-2025.vercel.app/",
  //       minSize: 4,
  //       maxSize: 4,
  //       eventRuleBook: ""
  //     },
  //   ]
  // },
  // {
  //   clubName: "Monochrome",
  //   events: [
  //     {
  //       id: 1,
  //       eventName: "CineCanvas",
  //       eventImage: "",
  //       isRegistrationOpen: true,
  //       eventDate: "06/02/2026",
  //       eventTime: "03:00 PM",
  //       description: "This is the event we have created",
  //       registrationLink: "https://advitiya-2025.vercel.app/",
  //       minSize: 1,
  //       maxSize: 2,
  //       eventRuleBook: ""
  //     },
  //     {
  //       id: 2,
  //       eventName: "Colour pallette ",
  //       eventImage: "",
  //       isRegistrationOpen: true,
  //       eventDate: "06/02/2026",
  //       eventTime: "03:00 PM",
  //       description: "This is the event we have created",
  //       registrationLink: "https://advitiya-2025.vercel.app/",
  //       minSize: 1,
  //       maxSize: 1,
  //       eventRuleBook: ""
  //     },
  //   ]
  // },
  // {
  //   clubName: "Robotics Club",
  //   events: [
  //     {
  //       id: 1,
  //       eventName: "Robosoccer",
  //       eventImage: "",
  //       isRegistrationOpen: true,
  //       eventDate: "06/02/2026",
  //       eventTime: "03:00 PM",
  //       description: "This is the event we have created",
  //       registrationLink: "https://advitiya-2025.vercel.app/",
  //       minSize: 2,
  //       maxSize: 4,
  //       eventRuleBook: ""
  //     },
  //     {
  //       id: 2,
  //       eventName: "Fastest line follower",
  //       eventImage: "",
  //       isRegistrationOpen: true,
  //       eventDate: "06/02/2026",
  //       eventTime: "03:00 PM",
  //       description: "This is the event we have created",
  //       registrationLink: "https://advitiya-2025.vercel.app/",
  //       minSize: 2,
  //       maxSize: 4,
  //       eventRuleBook: ""
  //     },
  //   ]
  // },
  // {
  //   clubName: "Softcom",
  //   events: [
  //     {
  //       id: 1,
  //       eventName: "Hackathon",
  //       eventImage: "",
  //       isRegistrationOpen: true,
  //       eventDate: "06/02/2026",
  //       eventTime: "03:00 PM",
  //       description: "This is the event we have created",
  //       registrationLink: "https://advitiya-2025.vercel.app/",
  //       minSize: 3,
  //       maxSize: 5,
  //       eventRuleBook: ""
  //     },
  //     {
  //       id: 2,
  //       eventName: "GameJam",
  //       eventImage: "",
  //       isRegistrationOpen: true,
  //       eventDate: "06/02/2026",
  //       eventTime: "03:00 PM",
  //       description: "This is the event we have created",
  //       registrationLink: "https://advitiya-2025.vercel.app/",
  //       minSize: 1,
  //       maxSize: 4,
  //       eventRuleBook: ""
  //     },
  //   ]
  // },
  // {
  //   clubName: "Zenith",
  //   events: [
  //     {
  //       id: 1,
  //       eventName: "Beyond Zenith- An E class model rocketry competition",
  //       eventImage: "",
  //       isRegistrationOpen: true,
  //       eventDate: "06/02/2026",
  //       eventTime: "03:00 PM",
  //       description: "This is the event we have created",
  //       registrationLink: "https://advitiya-2025.vercel.app/",
  //       minSize: 4,
  //       maxSize: 6,
  //       eventRuleBook: ""
  //     },
  //     {
  //       id: 2,
  //       eventName: "Cosmoquest- A story based quiz competition with questions related to Astronomy and Astrophysics",
  //       eventImage: "",
  //       isRegistrationOpen: true,
  //       eventDate: "06/02/2026",
  //       eventTime: "03:00 PM",
  //       description: "This is the event we have created",
  //       registrationLink: "https://advitiya-2025.vercel.app/",
  //       minSize: 3,
  //       maxSize: 5,
  //       eventRuleBook: ""
  //     },
  //   ]
  // },
  // {
  //   clubName: "Iota Cluster",
  //   events: [
  //     {
  //       id: 1,
  //       eventName: "PromptForge ",
  //       eventImage: "",
  //       isRegistrationOpen: true,
  //       eventDate: "06/02/2026",
  //       eventTime: "03:00 PM",
  //       description: "This is the event we have created",
  //       registrationLink: "https://advitiya-2025.vercel.app/",
  //       minSize: 1,
  //       maxSize: 3,
  //       eventRuleBook: ""
  //     },
  //   ]
  // },
  // {
  //   clubName: "Chemical Engineering ",
  //   events: [
  //     {
  //       id: 1,
  //       eventName: "Process Wars- Teams engineer solutions and then clash head to head to justify why their process is the smartest and most scalable  ",
  //       eventImage: "",
  //       isRegistrationOpen: true,
  //       eventDate: "06/02/2026",
  //       eventTime: "03:00 PM",
  //       description: "This is the event we have created",
  //       registrationLink: "https://advitiya-2025.vercel.app/",
  //       minSize: 1,
  //       maxSize: 3,
  //       eventRuleBook: ""
  //     },
  //   ]
  // },
  // {
  //   clubName: "Civil Engineering ",
  //   events: [
  //     {
  //       id: 1,
  //       eventName: "The Bridge Off",
  //       eventImage: "",
  //       isRegistrationOpen: true,
  //       eventDate: "06/02/2026",
  //       eventTime: "03:00 PM",
  //       description: "This is the event we have created",
  //       registrationLink: "https://advitiya-2025.vercel.app/",
  //       minSize: 2,
  //       maxSize: 3,
  //       eventRuleBook: ""
  //     },
  //     {
  //       id: 2,
  //       eventName: "Blueprint battle",
  //       eventImage: "",
  //       isRegistrationOpen: true,
  //       eventDate: "06/02/2026",
  //       eventTime: "03:00 PM",
  //       description: "This is the event we have created",
  //       registrationLink: "https://advitiya-2025.vercel.app/",
  //       minSize: 4,
  //       maxSize: 6,
  //       eventRuleBook: ""
  //     },
  //   ]
  // },
  // {
  //   clubName: "Electrical Engineering",
  //   events: [
  //     {
  //       id: 1,
  //       eventName: "Circuit Chase",
  //       eventImage: "",
  //       isRegistrationOpen: true,
  //       eventDate: "06/02/2026",
  //       eventTime: "03:00 PM",
  //       description: "This is the event we have created",
  //       registrationLink: "https://advitiya-2025.vercel.app/",
  //       minSize: 1,
  //       maxSize: 2,
  //       eventRuleBook: ""
  //     },
  //   ]
  // },
  // {
  //   clubName: "Mathematics and Computing",
  //   events: [
  //     {
  //       id: 1,
  //       eventName: "Maths Arena",
  //       eventImage: "",
  //       isRegistrationOpen: true,
  //       eventDate: "06/02/2026",
  //       eventTime: "03:00 PM",
  //       description: "This is the event we have created",
  //       registrationLink: "https://advitiya-2025.vercel.app/",
  //       minSize: 2,
  //       maxSize: 3,
  //       eventRuleBook: ""
  //     },
  //   ]
  // },
  // {
  //   clubName: "CSE",
  //   events: [
  //     {
  //       id: 1,
  //       eventName: "AI Fusion",
  //       eventImage: "",
  //       isRegistrationOpen: true,
  //       eventDate: "06/02/2026",
  //       eventTime: "03:00 PM",
  //       description: "This is the event we have created",
  //       registrationLink: "https://advitiya-2025.vercel.app/",
  //       minSize: 4,
  //       maxSize: 4,
  //       eventRuleBook: ""
  //     },
  //     {
  //       id: 2,
  //       eventName: "AI Magination",
  //       eventImage: "",
  //       isRegistrationOpen: true,
  //       eventDate: "06/02/2026",
  //       eventTime: "03:00 PM",
  //       description: "This is the event we have created",
  //       registrationLink: "https://advitiya-2025.vercel.app/",
  //       minSize: 3,
  //       maxSize: 4,
  //       eventRuleBook: ""
  //     },
  //   ]
  // },
  // {
  //   clubName: "Mechanical",
  //   events: [
  //     {
  //       id: 1,
  //       eventName: "CoasterX",
  //       eventImage: "",
  //       isRegistrationOpen: true,
  //       eventDate: "06/02/2026",
  //       eventTime: "03:00 PM",
  //       description: "This is the event we have created",
  //       registrationLink: "https://advitiya-2025.vercel.app/",
  //       minSize: 2,
  //       maxSize: 4,
  //       eventRuleBook: ""
  //     },
  //   ]
  // },
  // {
  //   clubName: "Meta",
  //   events: [
  //     {
  //       id: 1,
  //       eventName: "Materialize: A materials related quiz based on a short film which will be shown.",
  //       eventImage: "",
  //       isRegistrationOpen: true,
  //       eventDate: "06/02/2026",
  //       eventTime: "03:00 PM",
  //       description: "This is the event we have created",
  //       registrationLink: "https://advitiya-2025.vercel.app/",
  //       minSize: 1,
  //       maxSize: 1,
  //       eventRuleBook: ""
  //     },
  //   ]
  // },
  //   {
  //   clubName: "Enigma",
  //   events: [
  //     {
  //       id: 1,
  //       eventName: "SBT Quiz: sci biz tech quiz",
  //       eventImage: "",
  //       isRegistrationOpen: true,
  //       eventDate: "06/02/2026",
  //       eventTime: "03:00 PM",
  //       description: "This is the event we have created",
  //       registrationLink: "https://advitiya-2025.vercel.app/",
  //       minSize: 1,
  //       maxSize: 3,
  //       eventRuleBook: ""
  //     },
  //   ]
  // },
]


const page = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);


  const handleRegisterClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  const handleFormSubmit = async (formData) => {
    if (!selectedEvent) return;

    try {
      await axios.post('/api/participant/createParticipant', formData)
        .then((response) => {
          toast.success("Registration Created Successfully");
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
      handleCloseModal();
    } catch (error) {
      toast.error(error.message || 'Registration failed. Please try again.');
    }
  };


  // if (loading) {
  //   return (
  //     <main className="relative min-h-screen">
  //       <div className="fixed inset-0 z-0 bg-gradient-to-br from-black via-gray-900 to-blue-950">
  //         <StarsBackground className="w-full h-full" showShootingStars={true} />
  //       </div>
  //       <div className="relative z-10 min-h-screen flex items-center justify-center">
  //         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
  //       </div>
  //     </main>
  //   );
  // }

  return (
    <div className="pt-20">
      <Background />
      {/* Header Section */}
      <div className="text-center flex flex-col items-center justify-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-2"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-2">
            <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text drop-shadow-[0_0_40px_rgba(34,211,238,0.8)]">
              EVENTS
            </span>
          </h1>
        </motion.div>
      </div>
      {
        eventList.length > 0 ? eventList.map((event) => (
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-white font-bold relative text-center text-3xl p-4">{event.clubName}</h1>
            <EventCard events={event.events} />
          </div>
        )) : (
          <h3 className="text-6xl md:text-7xl font-bold mb-6 py-10">
            <span className="bg-linear-to-r from-green-400 via-green-400 to-purple-400 text-transparent bg-clip-text drop-shadow-[0_0_40px_rgba(34,211,238,0.8)] text-center justify-center mx-auto flex">
              Coming Soon...
            </span>
          </h3>
        )
      }
      {/* <EventRegistrationModal
        event={selectedEvent}
        onClose={handleCloseModal}
        onSubmit={handleFormSubmit}
      /> */}
    </div>
  );
};

export default page;
