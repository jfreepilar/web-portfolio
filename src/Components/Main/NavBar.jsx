import {useEffect, useState} from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import menuDots from '/assets/menuDots.svg'

export default function NavBar() {
  const navItems = [
    { id: '#about-me', label: 'About Me' },
    { id: '#certificate', label: 'Certificate' },
    { id: '#skills', label: 'Skills' },
    { id: '#project', label: 'Project' },
  ];
  
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY >= 640) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
  }, [isFixed]);

  return (
    <>
        <nav className={`${isFixed ? 'fixed top-0 w-[80%] h-16 mb-5' 
                        : 'relative'}
                      bg-gray-100`}>
            <ul className={`${isFixed ? 'gap-24 py-2 transition-g duration-300 ease-out max-lg:gap-20'
                        : 'gap-36 py-5 transition-g duration-300 ease-out max-lg:gap-24' } 
                            flex justify-center max-md:transition-none`}>
                          
                {navItems.map((item, index) =>
                      <li className={`${isFixed ? 'text-xl max-lg:text-[18px]' : 'text-2xl max-lg:text-[22px]'} p-2 
                          hover:cursor-pointer hover:bg-white hover:rounded
                          max-md:hidden`} key={index}>
                        <AnchorLink href={`${item.id}`}>
                          {item.label}
                        </AnchorLink>
                    </li>
                    
                )}

                {/* Dropdown */}
                <div className='relative hidden max-md:block text-center group'>
                <img src={menuDots} alt='Menu Dropdown' 
                     className={`${isFixed ? 'w-14 h-14 mt-[-5px]' : 'w-16 h-16'}`}/>
                  <ul className='hidden group-hover:block absolute left-[-42px] mt-[2px] bg-white rounded shadow-lg w-[150px]
                                 transition-all duration-900 ease-in'>
                    {navItems.map((item, index) => (
                      <li key={index} className="px-4 py-2 hover:bg-gray-100">
                        <AnchorLink href={`${item.id}`}>
                          {item.label}
                        </AnchorLink>
                      </li>
                    ))}
                  </ul>
                </div>
            </ul>
        </nav>
    </>
  )
}