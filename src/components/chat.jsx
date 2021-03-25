import React, { Component } from 'react';
import ChatHead from "./chatHead";
import "../css/Chat.css";
import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Chat() {
    return (
        <div>

        <div className="chat">
            <h2>Contacts</h2>
                <div className="chat__icons">
                    <VideoCallIcon/>
                    <SearchIcon/>
                    <MoreHorizIcon/>
                </div>
        </div>
                <div className="chat__heads">
                    <ChatHead title="Milos Milovanovic" src="https://smallimg.pngkey.com/png/small/222-2226227_ugandan-knuckles-png-vector-royalty-free-download-ugandan.png"/>
                    <ChatHead title="Vukašin Trnavčević" src="https://scontent.fbeg4-1.fna.fbcdn.net/v/t1.0-9/88240554_2952639998132304_382403147638767616_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=WnH7WTf_YMIAX-VYCnt&_nc_ht=scontent.fbeg4-1.fna&oh=6b9896766af1261a5dad84bcfb6e2d19&oe=607D29DC"/>
                    <ChatHead title="Ђорђе Кекић" src="https://scontent.fbeg4-1.fna.fbcdn.net/v/t1.0-9/99425147_3535561876461245_5802843310473084928_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=oeuhF8aM8r4AX8qA_3z&_nc_ht=scontent.fbeg4-1.fna&oh=9e549ff15c1d28cf4a4c025a735cb2ed&oe=607C58D6"/>
                    <ChatHead title="Младен Ђонлица Тешић" src="https://scontent.fbeg4-1.fna.fbcdn.net/v/t1.0-9/88213091_10217240934475485_7579838565509496832_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=DsHATtFQbsEAX8MVBVY&_nc_ht=scontent.fbeg4-1.fna&oh=56f0d3b9aaf544685258a19762e60bf3&oe=607B6AD9"/>
                    <ChatHead title="Vitomir Has" src="https://scontent.fbeg4-1.fna.fbcdn.net/v/t1.0-9/49635240_10218291592831359_435735281266589696_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Za_u5uTpJBQAX9ITLE-&_nc_ht=scontent.fbeg4-1.fna&oh=d7ea080e88801665d32efa936eeea370&oe=607E56B3"/>
                    <ChatHead title="Nemanja Jovanović" src="https://scontent.fbeg4-1.fna.fbcdn.net/v/t31.0-8/23509324_10212379667665118_8119116195472203193_o.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=m-D2ClCDIwwAX_4N4w3&_nc_ht=scontent.fbeg4-1.fna&oh=e1e19a9eaf340f8e60483a7f0d3dd9fe&oe=6080D953"/>
                    <ChatHead title="Pavle Bastovanovic" src="https://scontent.fbeg4-1.fna.fbcdn.net/v/t1.0-9/13241205_10209135990505230_4970268705173274575_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=NteU1arabhQAX_QOZSg&_nc_ht=scontent.fbeg4-1.fna&oh=604ba5b9d7a0689a8f3237dd619b8ef9&oe=6081F67E"/>
                    <ChatHead title="Čedomir Kedić" src="https://scontent.fbeg4-1.fna.fbcdn.net/v/t1.0-9/120375048_2827038770952501_3575754533495533041_o.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Jgy_R8syv8kAX8mJ44M&_nc_ht=scontent.fbeg4-1.fna&oh=273982f740abdec36aecd838344970f5&oe=608175C3"/>
                </div>
        </div>
    )
}

export default Chat;