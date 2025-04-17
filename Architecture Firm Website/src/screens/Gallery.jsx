import Header from "../components/Header"
import styles from "./css/Gallery.module.css"
import GalleryFrame from "../components/GalleryFrame"
import Footer from "../components/Footer"


function Gallery(){
    
    const imageList = Array.from({ length: 6 }, (_, i) => `/Projects/Project${i + 1}.png`);




    return(
    <>
        <Header/>
        <div className={styles.HeaderBG}>
             <h1>THE GALLERY</h1>
        </div>
        <p className={styles.intropara}>
        Welcome to MWM Spaces' Gallery, where luxury interior experiences come alive through our stunning designs.
        </p>


        <div className={styles.grid}>
            {imageList.map((src, index) => (
            <GalleryFrame key={index} src={src} />
            ))}
            {imageList.map((src, index) => (
            <GalleryFrame key={index} src={src} />
            ))}
            {imageList.map((src, index) => (
            <GalleryFrame key={index} src={src} />
            ))}
            {imageList.map((src, index) => (
            <GalleryFrame key={index} src={src} />
            ))}
        </div>

        <Footer/>


    </>
    )
}
export default Gallery