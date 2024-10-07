import { useContext, useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { authContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Tabs = ({ tab, setTab }) => {
    const { dispatch } = useContext(authContext);
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/login');
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const buttonClass = (currentTab) =>
        `${tab === currentTab
            ? 'bg-indigo-100 text-white'
            : 'bg-transparent text-headingColor'} 
            w-full bg-primaryColor py-[15px] px-[35px] rounded-md font-[600] mt-0`;

    const SidebarButton = ({ label, targetTab }) => (
        <button onClick={() => setTab(targetTab)} className={buttonClass(targetTab)}>
            {label}
        </button>
    );

    return (
        <div>
            <span className='lg:hidden'>
                <BiMenu className='w-6 h-6 cursor-pointer' onClick={toggleSidebar} />
            </span>
            {isSidebarOpen && (
                <div className='lg:hidden flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md'>
                    <SidebarButton label="Overview" targetTab="overview" />
                    <SidebarButton label="Appointment" targetTab="appointment" />
                    <SidebarButton label="Profile" targetTab="settings" />
                    <div className='mt-[100px] w-full'>
                        <button
                            onClick={handleLogout}
                            className='w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white'>
                            Logout
                        </button>
                        <button
                            className='w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white'>
                            Delete account
                        </button>
                    </div>
                </div>
            )}
            <div className='hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md'>
                {/* Rest of the code remains unchanged */}
            </div>
        </div>
    );
};

export default Tabs;
