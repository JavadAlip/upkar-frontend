import ProjectBtn from '../../assets/Icons/ProjectBtn.png';
import { Link } from 'react-router-dom';

const Map = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 lg:px-10 mt-12 lg:mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <iframe
            title="Upkar Towers Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31109.11610951081!2d77.56036951969323!3d12.939408280942776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae159423739445%3A0x4197a95cbd5e5aaa!2sUPKAR%20TOWERS!5e0!3m2!1sen!2som!4v1733050000000!5m2!1sen!2som"
            className="w-full h-60 sm:h-72 md:h-80 lg:h-[400px] border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <p className="text-[#050F27] text-base sm:text-lg md:text-xl lg:text-[24px] font-[Figtree] font-light leading-snug sm:leading-relaxed">
            Explore our portfolio of exceptional properties and take the first
            step toward a new life.
          </p>

          <div className="mt-4">
            <Link to="/project">
              <img
                src={ProjectBtn}
                alt="Explore Projects"
                className="w-36 sm:w-40 md:w-48 lg:w-56 h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
