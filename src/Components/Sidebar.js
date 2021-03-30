import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import  {SidebarData, SideberData} from './SidebarData';
import SubMenu from './SubMenu';

const Nav = styled.div`
`;

const NavIcon = styled(Link)`
margin-left: 2rem;
font-size: 2rem;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const SidebarNav = styled.nav`
background: black;
width: 250px;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
${'' /* top: 10rem; */}
left: ${({ sidebar }) => ( sidebar ? '0' :'-100%')};
transition: 350ms;
z-index: 10;
margin-left: 7rem;
`;

const SidebarWrap = styled.div`
width: 100%;
`;

const Sidebar = () =>{
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
          <Nav>
              <NavIcon to="#">
                <FaIcons.FaBars onClick={showSidebar}/>
              </NavIcon>
          </Nav>  
          <SidebarNav sidebar={sidebar}>
              <SidebarWrap>
              <NavIcon to="#">
                <AiIcons.AiOutlineClose  onClick={showSidebar}/>
              </NavIcon>
              {SideberData.map((item,index) => {
                  return<SubMenu item={item} key={index} />;
              })}
              </SidebarWrap>
          </SidebarNav>
        </>
    );
};

export default Sidebar
