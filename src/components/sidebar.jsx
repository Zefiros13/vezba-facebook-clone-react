import React, { Component } from 'react';
import SidebarRow from "./sidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
import "../css/Sidebar.css";

function Sidebar() {
        return ( 
            <div className="sidebar">
                <SidebarRow src="https://scontent.fbeg1-1.fna.fbcdn.net/v/t1.0-9/11866310_1163006293728660_6962940529323370142_n.jpg?_nc_cat=107&ccb=3&_nc_sid=174925&_nc_ohc=v9imRJqcb-4AX9F0hEP&_nc_ht=scontent.fbeg1-1.fna&oh=c93477c16d8acd995dfe6446192f5ccc&oe=605D2945" title="Filip Beric"/>
                <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
                <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
                <SidebarRow Icon={PeopleIcon} title="Friends"/>
                <SidebarRow Icon={ChatIcon} title="Messenger"/>
                <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
                <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
                <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
            </div>
         );
    }

 
export default Sidebar;