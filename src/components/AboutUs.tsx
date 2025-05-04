import { Mail, Award, BookOpen } from "lucide-react";

const teamMembers = [
  {
    name: "Lakshan Sasanka IT21292040",
    photo: "/assets/lakshan.jpg",
    role: "Machine Learning Specialist",
    email: "it21292040@my.sliit.lk",
    achievements: ["Best Paper Award at ICML 2023", "ML Research Fellowship"],
  },
  {
    name: "Dhanuka Lakshan IT21184994",
    photo: "/assets/dhanuka.jpg",
    role: "Blockchain Developer",
    email: "it21184994@my.sliit.lk",
    achievements: ["Cybersecurity Excellence Award", "2 Patents in Cryptography"],
  },
  {
    name: "Dilshara Munasinghe IT21164576",
    photo: "/assets/dilsha.jpg",
    role: "Cryptography Expert ",
    email: "it21164576@my.sliit.lk",
    achievements: ["Blockchain Hackathon Winner", "IEEE Blockchain Paper"],
  },
  {
    name: "Shalini Muthumali IT21169076",
    photo: "/assets/shalini.jpg",
    role: "Machine Learning Specialist",
    email: "it21169076@my.sliit.lk",
    achievements: ["Privacy Research Grant", "DEFCON Speaker"],
  },
];

const supervisors = [
  {
    name: "Prof. Anuradha Jayakody",
    photo: "/assets/anuradha.jpg", // Replace with actual photo of supervisor
    role: "Supervisor",
    email: "anuradha.j@sliit.lk",
    achievements: ["Head | Department of Computer Systems Engineering, Faculty of Computing","SLIIT | Sri Lanka Institute of Information Technology", "Research Leadership in Cybersecurity"],
  },
  {
    name: "Mr. Amila Senarathne", // Replace with the actual name
    photo: "/assets/amila.jpg", // Replace with actual photo of co-supervisor
    role: "Co-Supervisor",
    email: "amila.n@sliit.lk",
    achievements: ["Head | Industry Engagement Unit / Senior Lecturer , Faculty of Computing" ,"SLIIT | Sri Lanka Institute of Information Technology" , "Expert in Forensic Cybersecurity Research"],
  },
];

const AboutUs = () => {
  return (
    <section id="about-us" className="bg-white py-20">
      <div className="container-section">
        <h2 className="section-title">About Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-navy-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-60 overflow-hidden">
                <img 
                  src={member.photo} 
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-navy-800">{member.name}</h3>
                <p className="text-navy-600 mb-3">{member.role}</p>
                
                <div className="flex items-center mb-2 text-navy-600">
                  <Mail size={16} className="mr-2" />
                  <a href={`mailto:${member.email}`} className="text-sm hover:text-navy-800">
                    {member.email}
                  </a>
                </div>
                
                <div className="pt-3 mt-3 border-t border-navy-100">
                  <div className="flex items-start">
                    <Award size={16} className="mr-2 mt-0.5 text-navy-600 flex-shrink-0" />
                    <ul className="text-sm text-navy-600">
                      {member.achievements.map((achievement, i) => (
                        <li key={i} className="mb-1">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Research Supervision Section */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center gap-3 mb-4 text-navy-800">
            <BookOpen size={24} />
            <h3 className="text-xl font-semibold">Research Supervision</h3>
          </div>
          <p className="text-navy-700">
            This research is conducted under the supervision of <strong>Prof. Anuradha Jayakody</strong>, 
            Head | Department of Computer Systems Engineering, University of SLIIT | Sri Lanka Institute of Information Technology.
          </p>
        </div>

        {/* Supervisor and Co-Supervisor Details */}
        <div className="mt-8 max-w-3xl mx-auto">
          <h4 className="text-xl font-semibold text-navy-800 mb-4 text-center">Our Supervisors</h4>
          
          <div className="flex justify-between gap-8">
            {supervisors.map((supervisor, index) => (
              <div key={index} className="bg-navy-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow p-6 w-full sm:w-1/2">
                <div className="flex justify-center mb-4">
                  <img
                    src={supervisor.photo}
                    alt={supervisor.name}
                    className="w-24 h-24 rounded-full object-cover object-center"
                  />
                </div>
                <h5 className="text-lg font-semibold text-navy-800">{supervisor.name}</h5>
                <p className="text-navy-600 mb-3">{supervisor.role}</p>
                <div className="flex items-center mb-2 text-navy-600">
                  <Mail size={16} className="mr-2" />
                  <a href={`mailto:${supervisor.email}`} className="text-sm hover:text-navy-800">
                    {supervisor.email}
                  </a>
                </div>
                <div className="pt-3 mt-3 border-t border-navy-100">
                  <ul className="text-sm text-navy-600">
                    {supervisor.achievements.map((achievement, i) => (
                      <li key={i} className="mb-1">{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
