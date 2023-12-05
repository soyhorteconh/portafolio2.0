export const info = {
  baseUrl: "https://astro-portfolio-uzair.vercel.app",
  name: "Horte Ramírez!",
  jobDescription: "Web Developer",
  about: `I’m a Robotics engineering student @Tecnológico de Monterrey.`,
  paragraph: 'My academic path has been fueled by an insatiable curiosity and a constant eagerness to learn about various robotics-related topics.',

  experience: [
    {
      name: "Research and Developer Intern @Inria ",
      location: "Nancy, France",
      startDate: "Sep 2023",
      endDate: "Dec 2023",
      description: [
        "RoboHand Navigator: Enhancing robot hand pose using Azure Kinect SDK sensor and visual markers tracking for object manipulation with Tiago for the EUROBIN project at Larsen Team.",
        "- Using ROS, AprilTag library, and C++.",
      ],
    },

    {
      name: "Designed of a mini Autonomous Vehicle w/Manchester Robotics",
      location: "Nuevo León, México",
      startDate: "Mar 2023",
      endDate: "Jun 2023",
      description: [
        "Developed software using ROS, OpenCV libraries in python, and Yolov5 to create an autonomous vehicle implementing PID controllers, and computer vision for traffic lights and signals detection.",
      ],
    },

    {
      name: "Robotics Developer @Vanttec",
      location: "Nuevo León, México",
      startDate: "Aug 2022",
      endDate: "Aug 2023",
      description: [
        "- Conducted research within the college program to develop a software prototype for object detection in an Unmanned Underwater Vehicle using Roboflow, the YoloV5 library, and ROS (Awarded in software prototype category at Expo Ingenierías 2022). ",
        "- Performed PCB assembly",
      ],
    },

    {
      name: "Social Responsibility Director @College Robotics Association (SAIRS)",
      location: "Nuevo León, México",
      startDate: "Jul 2022",
      endDate: "Jun 2023",
      description: [
        "- Lead and organized the “Sin Miedo a la Corriente” program, enrolling children in science and technology fields, with a total of 75 volunteers and participants for a robotics camp.",
        "-  Spearheaded the “Women2Connect” program, which is an event from women to women, facilitating monthly meetings to create support networks and share experiences among women in engineering, with 30 women participants in the robotics filed. ",
      ],
    },

    {
      name: "Aztech Robotics Coach Program @FIRST Robotics Competition",
      location: "Mexico City, México",
      startDate: "Aug 2019",
      endDate: "Aug 2020",
      description: [
        "- Coach and leader of 32 High School students in the design, construction, and programming of a robot using advanced robotics for the FIRST Tech Challenge competition. ",
        "- Software developer for a First Robotics Competition team, using C++ and LabVIEW programming languages to design autonomous and teleoperated moods for a robot. ",
      ],
    },
  ],

  education: [
    {
      name: "B.S. in Robotics and Digital Systems @Tecnológico de Monterrey",
      location: "Nuevo León, México",
      startDate: "Aug 2020",
      endDate: "Jun 2024",
      description: [
        "Expected graduation date: June 2024.",
        "Member of the 7th generation of Líderes del Mañana scholarship.",
      ],
    },
  ],

  socialMedia: {
    github: "https://github.com/soyhorteconh",
    email: "mailto:ha.ramirezv@outlook.com",
    linkedin: "https://www.linkedin.com/in/hortencia-alejandra-ram%C3%ADrez-v%C3%A1zquez-7739ab220/",
    youtube: "https://www.youtube.com/channel/UCN9pbwRLRuZdgPw4gFtzzvg",
  },

  projects: [
    {
      title: "Visual Servoing using Visual Markers and Azure Kinect sensor: Tracking a dishwasher with Tiago @Inria",
      isFeatured: true,
      thumbnail: "/assets/images/tiago.jpg",
      githubUrl: "https://github.com/soyhorteconh/Visual_Servoing_AprilTags_Tiago",
      liveUrl: "https://youtu.be/yUcmC3FrjIs?si=YCU2Yl-NUBe2RtBn",
    },
    {
      title: "Mini Autonomous Vehicle using ROS w/Manchester Robotics",
      isFeatured: true,
      thumbnail: "/assets/images/puzzlebot.png",
      githubUrl: "https://github.com/soyhorteconh/Complete_design_of_a_hardware_architecture_to_generate_an_arcade_game_using_FPGA",
      liveUrl: "https://youtu.be/77gnFxZoYIk?si=tn5KtEiKdXyQDMPk",
    },
    {
      title: "Ducks detection with traveled distance aproximation",
      isFeatured: true,
      thumbnail: "/assets/images/ducks.png",
      githubUrl: "https://github.com/soyhorteconh/Ducks_distance_detection",
      liveUrl: "https://youtu.be/BHiRZZy_hjA",
    },
    {
      title: "Hardware architecture for an arcade videogame using FPGA's w/Intel",
      isFeatured: true,
      thumbnail: "/assets/images/videogame.png",
      githubUrl: "https://github.com/soyhorteconh/Complete_design_of_a_hardware_architecture_to_generate_an_arcade_game_using_FPGA",
      liveUrl: "https://youtu.be/JP0nYJHBPCY",
    },
    {
      title: "Research Project: Bioinformatic analysis of differentially expressed genes in colon cancer using Rstudio (SMBB 2021, p.403).",
      isFeatured: false,
      thumbnail: "/assets/images/cancer_colon.png",
      githubUrl: "https://github.com/soyhorteconh/Bioinformatic_analysis_of_differentially_expressed_genes_in_the_colon_cancer_development",
      liveUrl: "https://smbb.mx/wp-content/uploads/2022/03/Revista-vol-25_4-MEMORIAS-XIX-Congreso-Nacional.pdf",
    },
  ],

  achievemnts: [
    {
      title: "Hack Mty",
      isFeatured: true,
      thumbnail: "/assets/images/tiago.jpg",
      githubUrl: "https://github.com/soyhorteconh/Visual_Servoing_AprilTags_Tiago",
      liveUrl: "https://youtu.be/yUcmC3FrjIs?si=YCU2Yl-NUBe2RtBn",
    },
  ],
};
