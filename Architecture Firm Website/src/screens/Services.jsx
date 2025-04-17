import Header from "../components/Header"
import styles from "./css/Services.module.css"
import ServicesGrid from "../components/ServiceGrid"
import ServicesBox from "../components/ServiceManagement"
import { FaFileContract, FaDraftingCompass, FaCubes, FaIndustry, FaClipboardCheck, FaTools } from 'react-icons/fa';
import Footer from "../components/Footer"
import InhouseServiceBox from "../components/InhouseServiceBox";


// React icons
import { GiCube, GiPaintRoller} from 'react-icons/gi';
// Use this one instead of the missing GiLamp
import { MdOutlineLight } from 'react-icons/md';

import { LuRuler, LuHammer } from 'react-icons/lu';
import { FaHome, FaLightbulb, FaToilet, FaChair } from 'react-icons/fa';
import { TbLamp } from 'react-icons/tb';
import { MdOutlineWindow } from 'react-icons/md';
import { BsFillDoorOpenFill } from 'react-icons/bs';


function Services(){

    const boxData = [
        {
          icon: <FaFileContract size={40} />,
          title: 'Contract',
          subtitle: 'Management',
        },
        {
          icon: <FaDraftingCompass size={40} />,
          title: 'Design &',
          subtitle: 'Drafting',
        },
        {
          icon: <FaCubes size={40} />,
          title: 'Material',
          subtitle: 'Sourcing',
        },
        {
          icon: <FaIndustry size={40} />,
          title: 'Manufacturing &',
          subtitle: 'Execution',
        },
        {
          icon: <FaClipboardCheck size={40} />,
          title: 'Quality',
          subtitle: 'Check',
        },
        {
          icon: <FaTools size={40} />,
          title: 'Installation',
          subtitle: '',
        },
      ];




      const serviceData = [
        { icon: GiCube, title: '3D DESIGN', subtitle: 'VISUALISATION' },
        { icon: LuRuler, title: 'TECHNICAL', subtitle: 'DRAWINGS' },
        { icon: FaHome, title: 'CIVIL WORK', subtitle: '' },
        { icon: FaTools, title: 'METAL', subtitle: 'WORKSHOP' },
        { icon: MdOutlineLight, title: 'ELECTRICAL &', subtitle: 'LIGHTING'},
        { icon: TbLamp, title: 'FLOORING &', subtitle: 'TILING' },
        { icon: LuHammer, title: 'FALSE', subtitle: 'CEILING' },
        { icon: BsFillDoorOpenFill, title: 'WOODWORK', subtitle: '' },
        { icon: GiPaintRoller, title: 'PAINTING', subtitle: '' },
        { icon: FaChair, title: 'FURNITURE', subtitle: '' },
        { icon: FaToilet, title: 'PLUMBING &', subtitle: 'SANITARY' },
        { icon: MdOutlineWindow, title: 'DOORS &', subtitle: 'WINDOWS' },
      ];


    return(
    <>
        <Header />
        <div className={styles.HeaderBG}>
            <h1>OUR SERVICES</h1>
        </div>
        <ServicesGrid/>

        
        <section className={styles.servicesSection}>
            <h5 className={styles.subheading}>OUR EXPERTISE</h5>
            <h2 className={styles.heading}>INHOUSE SERVICES</h2>
            <div className={styles.grid}>
                {serviceData.map((item, i) => (
                <InhouseServiceBox key={i} {...item} />
                ))}
            </div>
        </section>

        <div className={styles.quoteBox}>
            <p>MAKING YOUR WORLD MAGNIFICENT</p>
            <h2>"A well-designed space can change the way you feel and interact with the world."</h2>
        </div>


        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>
                <span className={styles.italic}>Project</span> <br />
                MANAGEMENT <br /> FRAMEWORK
                </h2>
                <p className={styles.description}>
                Discover our project management excellence. From planning to delivery, we prioritise
                clear communication, resource optimisation, and quality control for exceptional results.
                Our streamlined approach ensures efficiency and exceeds expectations every step of the
                way.
                </p>
            </div>
            <div className={styles.boxGrid}>
                {boxData.map((box, index) => (
                <ServicesBox key={index} {...box} />
                ))}
            </div>
        </section>




        <Footer/>
    </>
)
}
export default Services