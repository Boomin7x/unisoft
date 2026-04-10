const team = [
  {
    name: "Leslie Alexander",
    role: "President",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Cameron Williamson",
    role: "Web Designer",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Ronald Richards",
    role: "Medical Assistant",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Jacob Jones",
    role: "Medical Assistant",
    img: "https://randomuser.me/api/portraits/men/47.jpg",
  },
];

const OurTeamSection = () => (
  <section className="w-full py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 bg-white">
    <div className="container mx-auto px-4 xs:px-5 sm:px-6 lg:px-8">
      <div className="mb-8 xs:mb-10 sm:mb-12 text-center lg:text-left">
        <span className="uppercase text-[#377dff] font-semibold tracking-wide text-sm xs:text-base mb-2 xs:mb-3 inline-block">
          Our Team Mate
        </span>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 xs:mb-8 leading-tight">
          Experts Ready to Served
        </h2>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-7 sm:gap-8">
        {team.map((member) => (
          <div key={member.name} className="flex flex-col items-center group hover:scale-105 transition-transform duration-300 touch-manipulation">
            <div className="w-full aspect-[3/4] xs:aspect-[4/5] sm:aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-3 xs:mb-4 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src={"/img/bg-slide-1.webp"}
                alt={member.name}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="text-center">
              <h3 className="text-lg xs:text-xl font-bold text-gray-900 mb-1 xs:mb-2 leading-tight">
                {member.name}
              </h3>
              <p className="text-gray-500 text-sm xs:text-base font-medium">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OurTeamSection;
