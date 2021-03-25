import React, { Component } from 'react';
import Story from "./story";
import "../css/StoryReel.css";

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story title="Milos Milovanovic" profileSrc="https://smallimg.pngkey.com/png/small/222-2226227_ugandan-knuckles-png-vector-royalty-free-download-ugandan.png" 
            image="https://i.redd.it/rzsvdqj2mnj01.png" />
            <Story title="Vukašin Trnavčević" profileSrc="https://scontent.fbeg4-1.fna.fbcdn.net/v/t1.0-9/88240554_2952639998132304_382403147638767616_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=WnH7WTf_YMIAX-VYCnt&_nc_ht=scontent.fbeg4-1.fna&oh=6b9896766af1261a5dad84bcfb6e2d19&oe=607D29DC"
            image="https://images.goodsmile.info/cgm/images/product/20200714/9775/71951/large/fc043987452ef368ad5a8dc5b683c909.jpg"/>
            <Story title="Ђорђе Кекић" profileSrc="https://scontent.fbeg4-1.fna.fbcdn.net/v/t1.0-9/99425147_3535561876461245_5802843310473084928_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=oeuhF8aM8r4AX8qA_3z&_nc_ht=scontent.fbeg4-1.fna&oh=9e549ff15c1d28cf4a4c025a735cb2ed&oe=607C58D6"
            image="https://softobiz.com/wp-content/uploads/2019/12/how-important-uiux-V2-2.jpg"/>
            <Story title="Младен Ђонлица Тешић" profileSrc="https://scontent.fbeg4-1.fna.fbcdn.net/v/t1.0-9/88213091_10217240934475485_7579838565509496832_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=DsHATtFQbsEAX8MVBVY&_nc_ht=scontent.fbeg4-1.fna&oh=56f0d3b9aaf544685258a19762e60bf3&oe=607B6AD9"
            image="https://www.gamemodd.com/uploads/posts/2017-07/1501528941_reset-your-score-rs-command.jpg"/>
            <Story title="Vitomir Has" profileSrc="https://scontent.fbeg4-1.fna.fbcdn.net/v/t1.0-9/49635240_10218291592831359_435735281266589696_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Za_u5uTpJBQAX9ITLE-&_nc_ht=scontent.fbeg4-1.fna&oh=d7ea080e88801665d32efa936eeea370&oe=607E56B3"
            image="https://www.petmd.com/sites/default/files/shutterstock_605469404.jpg"/>
        </div>
    )
}

export default StoryReel;