import './SeasonDisplay.css'
import React from 'react';


///BUT we have to do the below code first!!!! TWO OF TWO COMMENTS
const seasonConfig = {
    summer: {
        text: 'Lets hit the beach!',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr its cold!',
        iconName: 'snowflake'
    }
};


const getSeason = (lat, month) =>{
    if (month > 2 && month < 9) {
      return lat > 0 ? 'summer' : 'winter';
        // is lat greater than 0? if so return summer, otherwise return winter
    } else {
        return lat > 0 ? 'winter' : 'summer'
    
    }
}

const SeasonDisplay = (props) => {
     const season= getSeason(props.lat, new Date().getMonth());
     const  { text, iconName } = seasonConfig[season];
// console.log(season)
////Instead of using two identical ternary operators, we can refactor to the above code....ONE OF TWO COMMENTS////

// const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach'
// const icon = season === 'winter' ? 'snowflake' : 'sun'
    return  (
        <div className={`season-display ${season}`}>
            <i className= {`icon-left massive ${iconName} icon `} />
            <h1>{text}</h1>
            <i className= {`icon-right massive ${iconName} icon `} />
        </div>
    );
};

export default SeasonDisplay;