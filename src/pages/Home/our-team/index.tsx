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
  <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8 sm:mb-10">
        <span className="uppercase text-[#377dff] font-semibold tracking-wide text-sm sm:text-base mb-2 inline-block">
          Our Team Mate
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 mb-6 sm:mb-8 leading-tight">
          Experts Ready to Served
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {team.map((member) => (
          <div key={member.name} className="flex flex-col items-center">
            <div className="w-full h-48 sm:h-64 lg:h-80 bg-gray-100 rounded overflow-hidden mb-3 sm:mb-4 flex items-center justify-center">
              <img
                src={"/img/bg-slide-1.webp"}
                alt={member.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-gray-500 text-sm sm:text-base">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OurTeamSection;
