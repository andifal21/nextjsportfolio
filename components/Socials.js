// links
import Link from 'next/link';

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiTelegramFill,
  RiLinkedinBoxFill,
  RiWhatsappFill,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={'https://youtube.com/andinaufal'}
        className="hover:text-accent transition-all duration-300"
      >
        <RiYoutubeLine />
      </Link>
      <Link
        href={'https://instagram.com/and.fal'}
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={'https://telegram.me/andnaufal'}
        className="hover:text-accent transition-all duration-300"
      >
        <RiTelegramFill />
      </Link>
      <Link
        href={'https://linkedin.com/in/andinaufal'}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinBoxFill />
      </Link>
      <Link
        href={'https://wa.me/+6288247057791'}
        className="hover:text-accent transition-all duration-300"
      >
        <RiWhatsappFill />
      </Link>
    </div>
  );
};

export default Socials;
