import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiFramer, SiAdobexd, SiAdobephotoshop } from "react-icons/si";
import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useState } from "react";
//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key={1}/>,
          <FaCss3 key={2}/>,
          <FaJs key={3}/>,
          <FaReact key={4}/>,
          <SiNextdotjs key={5}/>,
          <SiFramer key={6}/>,
          <FaWordpress key={7}/>,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma key={1}/>, <SiAdobexd key={2}/>, <SiAdobephotoshop key={3}/>],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0)
  return <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
    <Circles />
    <motion.div variants={fadeIn("right", 0.2)} initial="hidden" animate="show" exit='hidden' className="hidden xl:flex absolute bottom-0 -left-[370px]">
      <Avatar />
    </motion.div>
    <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
      <div className="flex flex-1 flex-col justify-center">text</div>
      <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
          {aboutData.map((item, i) => {
            return (
              <div key={i} className={`${i == index && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 z-10`} onClick={() => setIndex(i)}>{item.title}</div>
            )
          })}
        </div>
        <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
          {aboutData[index].info.map((item,i)=>{
            return <div key={i}>
              <div>{item.title}</div>
              <div className="hidden md:flex">-</div>
            </div>
          })}
        </div>
      </div>
    </div>
  </div>;
};

export default About;
