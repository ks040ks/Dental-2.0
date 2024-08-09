import React, { useContext, useState } from 'react'
import { NavLink,Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import {BiMenu} from "react-icons/bi"
import { authContext } from '../../context/AuthContext.jsx'
import {HashLoader} from 'react-spinners'

const navLinks = [
  {
    path:'/',
    display:'Home'
  },
  {
    path:'/doctor',
    display:'About Doctor'
  },
  {
    path:'/service',
    display:'Service'
  },
  {
    path:'/contact',
    display:'Contact'
  },
]
function Header(){

  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const {user,role,token}= useContext(authContext)

  const handleStickyHeader = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      if (headerRef.current) {
        headerRef.current.classList.add('sticky_header');
      }
    } else {
      if (headerRef.current) {
        headerRef.current.classList.remove('sticky_header');
      }
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleStickyHeader);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleStickyHeader);
    };
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  const toggleMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.toggle('show_menu');
    }
  };

  // const handleStickyHeader = () =>{
  //   // window.addEventListener('scroll', () => {
  //     if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
  //       headerRef.current.classList.add('sticky_header')
  //     }else{
  //       headerRef.current.classList.remove('sticky_header')
  //     }
  //   }
  // }

  // useEffect(()=>{
  //   handleStickyHeader();

  //   return () => window.removeEventListener('scroll', handleStickyHeader)  
  // });

  // const toogleMenu = () => menuRef.current.classList.toggle('show_menu')

  return (
<header className='header flex items-center ' ref={headerRef}>
    <div className=" max-w-full w-[1440px] px-5 mx-auto">
      <div className='flex items-center justify-between'>
    {/* ========== Logo ===========  */}

    <div className="  flex">
           
      <h1 className='text-2xl font-bold mr-14'>Jagdish Dental Clinic</h1>
      {/* <img src={logo} alt='' /> */}
    </div>


    {/* ========== Menu Bar ===========  */}
    <div className='navigation' ref={menuRef} onClick={toggleMenu}>
      <ul className='menu flex items-center gap-[2.7rem]'>
        {
          navLinks.map((link, index) => <li key={index}>
            <NavLink to={link.path} className={navClass=> navClass.isActive ?
             'text-primaryColor text-[16px] leading-7 font-[600]'
             :'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor '}>
              {link.display}
             </NavLink>
          </li>)
        }
      </ul>
    </div>

          {/* ========== Nav right ===========  */}

          <div className='flex items-center gap-4'>

          {token && user ? ( <div>
              <Link to={`${role ==='doctor' ? '/doctor/profile/me' : '/users/profile/me'}`}>
              <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                <img 
                src={user?.photo} 
                className='w-full rounded-full' 
                alt=''/>
              </figure>

              </Link>
            </div>
           ) : ( 
           <Link to="/login">
            <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>
              {loading ? <HashLoader size={25} color='#fff'/> : 'Login'}
            </button>
            </Link>)
          }
          
            <span className='md:hidden' onClick={toggleMenu}>
              <BiMenu className='w-6 h-6 cursor-pointer'/>
            </span>
          </div>

      </div>
    </div>
  </header>

  )  
}

export default Header



