import React from 'react';

import { TwitterTimelineEmbed } from 'react-twitter-embed';

const TwitterTimeLine = () => {

  return (
        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="NisargP52841694" 
        options={{height: 250}}
        />
  );
}

export default TwitterTimeLine;