import heroAvatarImg from '@/src/assets/images/hero_student_avatar_1791732490422.jpg';
import projectSolarRoverImg from '@/src/assets/images/project_solar_rover_1791732504233.jpg';
import projectScratchOceanImg from '@/src/assets/images/project_scratch_ocean_1791732515333.jpg';
import projectSchoolGardenImg from '@/src/assets/images/project_school_garden_1791732528415.jpg';
import { Project, SkillCategory, GuestbookCheer, StudentGoal } from '../types';

export const studentProfile = {
  name: 'Maya Lin',
  grade: 'Grade 6',
  school: 'Oakridge Middle School',
  avatarImage: heroAvatarImg,
  tagline: 'Curious inventor, junior coder, and eco-club explorer.',
  introHeading: "Hi, I'm Maya! Welcome to my Grade 6 portfolio.",
  introBio:
    "I'm an eleven-year-old middle school student who loves finding out how things work. Whether it's coding interactive ocean games in Scratch, building solar-powered rovers for the science fair, or growing green beans in our school garden, I enjoy creating hands-on projects that combine science, creativity, and teamwork.",
  quote: "“The best way to understand science is to build it with your own hands.”",
  location: 'Oakridge Middle School · Room 204',
  stats: [
    { label: 'Current Grade', value: 'Grade 6', detail: 'Middle School Explorer' },
    { label: 'Completed Projects', value: '14', detail: 'STEM & School Showcases' },
    { label: 'Science Fair', value: '1st Place', detail: 'Regional Green Energy Ribbon' },
    { label: 'Books Read', value: '142', detail: 'Classroom Reading Challenge' },
  ],
};

export const initialProjects: Project[] = [
  {
    id: 'solar-rover',
    title: 'The Solar Explorer Rover',
    category: 'STEM & Green Engineering',
    metadata: 'Annual Science Fair · Spring 2026 · 1st Place Ribbon',
    shortDescription:
      'A working motorized rover car powered entirely by a mini 6V solar cell and recycled craft materials, designed to demonstrate clean renewable energy in motion.',
    fullStory:
      'For our school science fair, I wanted to discover if a miniature vehicle could travel across uneven gravel surfaces using only natural sunlight instead of disposable AA batteries. I designed the lightweight chassis using lightweight balsa wood and recycled bottle caps for the gear mounts. I soldered the mini DC motor leads to a 6V mini monocrystalline solar panel and tested different wheel diameters to find the best torque-to-speed ratio under midday sun.',
    image: projectSolarRoverImg,
    imageAlt: 'Tabletop view of the handmade solar explorer buggy with blue wheels and solar panel',
    tools: ['6V Monocrystalline Solar Cell', 'DC Hobby Motor', 'Recycled Chassis & Gears', 'Multimeter', 'Digital Scale'],
    keyLearnings: [
      'Discovered how angle-of-incidence affects solar cell voltage output (measuring between 2.8V in shade to 6.1V in full direct sunlight).',
      'Learned that higher gear reduction provides the torque needed to climb a 15-degree ramp without stalling.',
      'Documented 25 test runs in my science logbook to present accurate averages to the judges.',
    ],
    awardOrFeedback: {
      from: 'Mr. Henderson (6th Grade Science Teacher & Lead Judge)',
      note: '“Maya displayed remarkable perseverance in tuning the gear mesh and explained the scientific method with genuine clarity and confidence.”',
    },
    interactiveType: 'solar-rover',
  },
  {
    id: 'scratch-ocean',
    title: 'Deep Sea Adventure! Game',
    category: 'Computer Science & Scratch',
    metadata: 'Scratch 3.0 · 380+ Code Blocks · Interactive Audio',
    shortDescription:
      'An educational ocean conservation adventure game where players guide Shelly the Sea Turtle to clean up ocean debris while discovering real marine biology facts.',
    fullStory:
      'I built this game during our after-school computer science club. Players navigate Shelly through colorful coral reefs, dodging swift underwater currents and collecting discarded plastic bottles. Every time the player collects 5 items, an ocean creature appears and gives an educational fun fact about reef conservation. I drew custom sprite animations for the swimming turtle and coded realistic bubble particle effects using cloned sprites.',
    image: projectScratchOceanImg,
    imageAlt: 'Screenshot of the Scratch game featuring Shelly the sea turtle and colorful coral reefs',
    tools: ['Scratch 3.0', 'Custom Sprite Art', 'Broadcast Messaging', 'Coordinate Math', 'Audio Sequencing'],
    keyLearnings: [
      'Implemented broadcast signals to coordinate seamless transitions between the start menu, gameplay levels, and the game over summary.',
      'Used Cartesian X/Y coordinate variables and velocity acceleration for natural swimming controls.',
      'Conducted play-testing with 12 classmates, refining the speed curve after feedback that Level 3 was too difficult.',
    ],
    awardOrFeedback: {
      from: 'Ms. Alvarez (Tech Club Mentor)',
      note: '“Creative storytelling paired with clean, modular block code. The custom animations show fantastic attention to detail!”',
    },
    interactiveType: 'scratch-game',
  },
  {
    id: 'school-garden',
    title: 'Raised Bed Garden Growth Log',
    category: 'Environmental Science & Math',
    metadata: 'Eco Club Project · 8-Week Data Study · Botanical Graphing',
    shortDescription:
      'A multi-week botanical study comparing the growth rates of pole beans versus bush beans using companion planting, rainwater catchment, and composted soil.',
    fullStory:
      'As a 6th grade Eco-Club ambassador, I led our class raised garden bed trial. We planted four varieties of bean seeds and measured their height, leaf count, and soil moisture every Monday and Thursday morning. I created a hand-drawn science journal log alongside a spreadsheet to calculate average weekly growth spikes following rainfall events.',
    image: projectSchoolGardenImg,
    imageAlt: 'Raised garden bed with thriving green bean plants, colorful wooden tags, and science notebook',
    tools: ['Soil Moisture Meter', 'Rain Gauge', 'Metric Measuring Tape', 'Botanical Field Journal', 'Data Charting'],
    keyLearnings: [
      'Discovered that compost-enriched soil retained 35% more moisture between watering cycles compared to unamended topsoil.',
      'Learned how companion marigolds natural deter common garden pests without any artificial sprays.',
      'Calculated mean, median, and mode growth rates for 24 distinct bean seedlings over an eight-week span.',
    ],
    awardOrFeedback: {
      from: 'Principal Davis (Oakridge Middle School)',
      note: '“A wonderful example of bringing classroom biology and math outdoors to make a positive impact on our school campus.”',
    },
    interactiveType: 'garden-chart',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Technology & Coding',
    description: 'Tools and platforms I use to build games, robots, and interactive stories.',
    items: [
      {
        id: 'scratch',
        name: 'Scratch 3.0 Programming',
        iconName: 'Code',
        description: 'Building multi-level games with broadcast loops, sprite cloning, and score variables.',
        schoolExample: 'Created the "Deep Sea Adventure" interactive game and a class math quiz game.',
        level: 'Confident',
      },
      {
        id: 'microbit',
        name: 'Micro:bit & Robotics',
        iconName: 'Cpu',
        description: 'Wiring basic sensors, servo motors, and programming LED display matrices.',
        schoolExample: 'Built a digital step counter and a temperature warning beacon for the science lab.',
        level: 'Practicing',
      },
      {
        id: 'docs-slides',
        name: 'Google Slides & Docs',
        iconName: 'Presentation',
        description: 'Structuring clear visual presentations, project handouts, and bibliography references.',
        schoolExample: 'Delivered our 10-slide team pitch for the school environmental initiative.',
        level: 'Confident',
      },
      {
        id: 'html-css',
        name: 'Web Basics (HTML/CSS)',
        iconName: 'Globe',
        description: 'Understanding tags, styling layout colors, and structuring webpage headings.',
        schoolExample: 'Designing this personal portfolio layout with clean modern styling.',
        level: 'Exploring',
      },
    ],
  },
  {
    title: 'Science & Investigation',
    description: 'Hands-on methods for observing nature, testing hypotheses, and analyzing data.',
    items: [
      {
        id: 'scientific-method',
        name: 'Scientific Method',
        iconName: 'FlaskConical',
        description: 'Formulating testable hypotheses, controlling variables, and logging results systematically.',
        schoolExample: 'Designed controlled solar rover slope tests with 25 documented trials.',
        level: 'Confident',
      },
      {
        id: 'data-measurement',
        name: 'Data Collection & Graphing',
        iconName: 'BarChart3',
        description: 'Using metric rulers, multimeters, soil meters, and plotting scatter & bar graphs.',
        schoolExample: 'Tracked weekly height growth of 24 bean plants in the eco-garden trial.',
        level: 'Confident',
      },
      {
        id: 'microscopy',
        name: 'Microscopy & Lab Safety',
        iconName: 'Sparkles',
        description: 'Preparing wet mount slides, adjusting focus lenses, and maintaining safety protocols.',
        schoolExample: 'Observed and sketched plant stomata cells under 400x magnification in biology unit.',
        level: 'Practicing',
      },
    ],
  },
  {
    title: 'Creativity & Arts',
    description: 'Expressing ideas through visual design, crafting, and hands-on building.',
    items: [
      {
        id: 'crafting',
        name: 'Maker Crafting & Prototyping',
        iconName: 'Hammer',
        description: 'Constructing sturdy physical models using cardboard, balsa wood, and hot glue.',
        schoolExample: 'Engineered lightweight balsa chassis for the science fair solar buggy.',
        level: 'Confident',
      },
      {
        id: 'digital-art',
        name: 'Digital Illustration',
        iconName: 'Palette',
        description: 'Drawing friendly vector sprites, characters, and decorative icons for projects.',
        schoolExample: 'Illustrated Shelly the turtle and animated swimming costumes in Scratch.',
        level: 'Practicing',
      },
      {
        id: 'poster-layout',
        name: 'Tri-Fold Poster Design',
        iconName: 'Layout',
        description: 'Arranging titles, hypotheses, photos, and conclusion panels for maximum clarity.',
        schoolExample: 'Assembled the 1st Place Science Fair board display seen at regional exhibition.',
        level: 'Confident',
      },
    ],
  },
  {
    title: 'Teamwork & Communication',
    description: 'Working effectively with classmates, sharing findings, and active listening.',
    items: [
      {
        id: 'speaking',
        name: 'Project Demonstrations',
        iconName: 'Mic',
        description: 'Explaining technical concepts in clear, friendly language to judges and younger students.',
        schoolExample: 'Presented my solar rover live to over 100 students during middle school open house.',
        level: 'Confident',
      },
      {
        id: 'collaboration',
        name: 'Team Collaboration',
        iconName: 'Users',
        description: 'Dividing tasks fairly, keeping team logs updated, and celebrating group success.',
        schoolExample: 'Co-led a 4-person Eco-Club crew to manage weekly garden watering duties.',
        level: 'Confident',
      },
      {
        id: 'peer-testing',
        name: 'Peer Feedback & Iteration',
        iconName: 'MessageSquare',
        description: 'Receiving constructive feedback thoughtfully and improving project designs.',
        schoolExample: 'Adjusted game difficulty after collecting 12 written reviews from classmates.',
        level: 'Practicing',
      },
    ],
  },
];

export const initialGoals: StudentGoal[] = [
  { id: 'g1', title: 'Complete Solar Buggy with speed measurement sensor', category: 'Science Fair', completed: true },
  { id: 'g2', title: 'Publish Deep Sea Adventure game with 3 unique levels', category: 'Coding', completed: true },
  { id: 'g3', title: 'Harvest first batch of organic pole beans for the school cafeteria', category: 'Eco Club', completed: true },
  { id: 'g4', title: 'Program a Micro:bit moisture sensor to beep when soil is dry', category: 'Robotics', completed: true },
  { id: 'g5', title: 'Read 150 adventure and science books before the end of 6th grade', category: 'Reading Challenge', completed: false },
  { id: 'g6', title: 'Teach a 20-minute Scratch mini-workshop to Grade 4 students', category: 'Mentorship', completed: false },
];

export const initialCheers: GuestbookCheer[] = [
  {
    id: 'ch-1',
    authorName: 'Mr. Henderson',
    role: 'Teacher',
    message: 'Maya, your solar buggy presentation at the science fair was outstanding! You explained the gear ratios so clearly to the younger kids.',
    sticker: '⭐',
    timestamp: 'Yesterday at 3:15 PM',
  },
  {
    id: 'ch-2',
    authorName: 'Lucas K. (Table Partner)',
    role: 'Classmate',
    message: 'Your Scratch turtle game is so fun! Level 2 with the sea urchins took me 4 tries to beat haha. Great job on the music too!',
    sticker: '🐢',
    timestamp: '2 days ago',
  },
  {
    id: 'ch-3',
    authorName: 'Auntie Sarah',
    role: 'Family & Friends',
    message: 'So proud of your hard work in Grade 6! Keep building and asking wonderful questions about the world.',
    sticker: '🚀',
    timestamp: 'Oct 8, 2026',
  },
];
