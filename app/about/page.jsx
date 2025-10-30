"use client"
import { useEffect, useRef } from "react"
import { useSpring, animated } from "react-spring"
import OurServices from "@/components/about/OurServices"
import MeetTheTeam from "@/components/team/MeetTheTeam"
import employees from "@/public/data/employees"
import servicesData from "@/public/data/servicesData"

const About = () => {
  const servicesRef = useRef(null)
  const teamRef = useRef(null)
  const headerRef = useRef(null)
  const introRef = useRef(null)

  // Define spring properties for sections
  const [servicesProps, setServicesProps] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(20px)",
  }))
  const [teamProps, setTeamProps] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(20px)",
  }))
  const [headerProps, setHeaderProps] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(20px)",
  }))
  const [introProps, setIntroProps] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(20px)",
  }))

  // Set up Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderProps({
            opacity: 1,
            transform: "translateY(0)",
            config: { tension: 200, friction: 20 },
          })
          observer.unobserve(headerRef.current)
        }
      },
      { threshold: 0.1 },
    )

    const introObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntroProps({
            opacity: 1,
            transform: "translateY(0)",
            config: { tension: 200, friction: 20 },
          })
          introObserver.unobserve(introRef.current)
        }
      },
      { threshold: 0.1 },
    )

    const servicesObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setServicesProps({
            opacity: 1,
            transform: "translateY(0)",
            config: { tension: 200, friction: 20 },
          })
          servicesObserver.unobserve(servicesRef.current)
        }
      },
      { threshold: 0.1 },
    )

    const teamObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTeamProps({
            opacity: 1,
            transform: "translateY(0)",
            config: { tension: 200, friction: 20 },
          })
          teamObserver.unobserve(teamRef.current)
        }
      },
      { threshold: 0.1 },
    )

    if (headerRef.current) observer.observe(headerRef.current)
    if (introRef.current) introObserver.observe(introRef.current)
    if (servicesRef.current) servicesObserver.observe(servicesRef.current)
    if (teamRef.current) teamObserver.observe(teamRef.current)

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current)
      if (introRef.current) introObserver.unobserve(introRef.current)
      if (servicesRef.current) servicesObserver.unobserve(servicesRef.current)
      if (teamRef.current) teamObserver.unobserve(teamRef.current)
    }
  }, [setHeaderProps, setIntroProps, setServicesProps, setTeamProps])

  return (
    <div className="flex flex-col items-center justify-center pt-24 pb-16 w-full overflow-hidden">
      {/* Header Section */}
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Animated Header */}
        <animated.h1
          ref={headerRef}
          style={headerProps}
          className="font-serif text-4xl md:text-5xl font-bold text-center mb-8"
        >
          About Us
        </animated.h1>

        {/* Animated Introductory Text */}
        <animated.div ref={introRef} style={introProps} className="text-center mb-16">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Tekkd Solutions is a comprehensive IT & Digital services company catering to a diverse clientele across
            various industries. We provide a wide range of services to help you with your projects, from start to
            finish.
          </p>
        </animated.div>

        {/* Services Section */}
        <animated.div ref={servicesRef} style={servicesProps} className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Our Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {servicesData.map((service, index) => (
              <OurServices key={index} {...service} />
            ))}
          </div>
        </animated.div>

        {/* Team Section */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Meet The Team</h2>

          <animated.div
            ref={teamRef}
            style={teamProps}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center"
          >
            {employees.map((employee, index) => (
              <MeetTheTeam key={index} {...employee} />
            ))}
          </animated.div>
        </div>
      </div>
    </div>
  )
}

export default About

