import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDIsplay';
import Spinner from './Spinner';

// const App = () => {
  
    
//     return <div>Latitude: </div>

// }

/////FUNCTIONAL COMPONENT ABOVE, CLASS BASED COMPONENT BELOW

class App extends React.Component {
    // constructor(props) {
    //     super(props);

    //     ////THIS IS THE ONLY TIME we do direct assignment
    //     /// to this.state
    //     this.state = { lat: null, errorMessage: '' };
        
        
    // }

    ////this is the same thing as the above!!!! bewlow is refactored
    state = { lat: null, errorMessage: ''}

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage : err.message})
            );

          }


          // RENDER MULTI LINE LOGIC INTO A HELPER METHOD
          renderContent(){
            if(this.state.errorMessage && !this.state.lat){
              return <div>Error: {this.state.errorMessage}</div>;
            }
            if(!this.state.errorMessage && this.state.lat){
              return <SeasonDisplay lat={this.state.lat}/>
            }
            // if(!this.state.errorMessage && !this.state.lat){
              return <Spinner message="Please accept loaction request" />;
              // }
          }
          ////the above is how to initialize state
          // componentDidMount(){
            //   console.log('My component was rendered to the screen')
    // }
    // componentDidUpdate(){
    //   console.log('My component was just updated -  it rerendered!')
    // }
    
    ////REQUIRED FOR REACT. MUST BE DEFINED
    render() {
      
      return(
        <div className='border red'>
            {this.renderContent()}
 </div>     
   )
      
      // if(this.state.errorMessage && !this.state.lat){
      //   return <div>Error: {this.state.errorMessage}</div>;
      // }
      
      // if(!this.state.errorMessage && this.state.lat){
      //   return <SeasonDisplay lat={this.state.lat}/>
      // }
      // // if(!this.state.errorMessage && !this.state.lat){
      //   return <Spinner message="Please accept loaction request" />;
      //   // }
        
        
      //   ///The above line (curly braces) is how to reference
      //   ///the state inside of JSX
        
      }
      
    }
      
      
      ReactDOM.render(
        <App />,
        document.querySelector('#root')
        )