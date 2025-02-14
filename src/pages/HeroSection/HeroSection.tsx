import ReactPlayer from "react-player";
const HeroSection = () => {
  return (
    <>
        <section className="video-section position-relative text-white">
        <div className="video-wrapper">
          <ReactPlayer
            url="https://supreme-group.vercel.app/static/media/automotive.224e7418884105595114.mp4"
            playing
            muted
            loop
            width="100%"
            height="100%"
            className="video-player"
          />
        </div>
        <div className="overlay-text position-absolute top-50 start-50 translate-middle text-center z-3">
          <p className="small super-group-uppr-title">Driven by performance</p>
          <h2 className="sg-translate text-white font-light leading-tight pb-2 super-group-title-banner">
            <abbr className="font-semibold">Soft trims and <span className="text-blue">NVH solutions</span></abbr>
            <div className='super-group-same-lines-title'> for seamless rides</div>  </h2>
        </div>
      </section>
    </>
  )
}

export default HeroSection
