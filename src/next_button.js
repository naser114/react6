import React from "react";
import Imageo from './l.PNG';
import Imaget from './ll.PNG';
import Imageth from './Capture y.PNG';
export default class next_button extends React.Component {
    state = {
        src: Imageth,
        color: "blue",
        name:"smith",
        desc:"very kind"

    }

    render() {
        return (<div>
           <center><button onClick={() => { this.setState({ src:Imageo , name: "sara", desc: "cool hgjhgkkhjhd" }); }}>
            Sara
            </button>
            <button onClick={() => { this.setState({ src: Imaget, name: "harold", desc: "beauty nice" }); }}>
            Harold
            </button>
           <button onClick={() => { this.setState({ src: Imageth , name: "smith", desc: "Daniel" }); }}>
            Daniel
      </button></center>
           <center> <h1>{this.state.name}</h1>
            <img src={this.state.src}  alt='' /></center>
        </div>
        );

    }

}

