import React from 'react';
import ReactDOM from 'react-dom';


// class CanvasComponent extends React.Component{
//
//   componentDidMount() {
//     var context = this.refs.canvas.getContext('2d');
//     this.paint(context);
//   }
//
//   componentDidUpdate() {
//     var context = this.refs.canvas.getContext('2d');
//     context.clearRect(0, 0, 200, 200);
//     this.paint(context);
//   }
//
//   paint(context) {
//     context.save();
//     context.translate(100, 100);
//     context.rotate(this.props.rotation, 100, 100);
//     context.fillStyle = '#F00';
//     context.fillRect(-50, -50, 100, 100);
//     context.restore();
//   }
//
//   render() {
//     return <canvas width={200} height={200} />;
//   }
//
// }

// var App = React.createClass({
//
//   getInitialState: function() {
//     return { rotation: 0 };
//   },
//
//   componentDidMount: function() {
//     requestAnimationFrame(this.tick);
//   },
//
//   tick: function() {
//     this.setState({ rotation: this.state.rotation + .01 });
//     requestAnimationFrame(this.tick);
//   },
//
//   render: function() {
//     return <div><CanvasComponent rotation={this.state.rotation} /></div>
//   }
//
// });

class CanvasComponent extends React.Component {
    componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillRect(0,0, 200, 200);
    }
    render() {
        return (
            <canvas ref="canvas" width={300} height={300}/>
        );
    }
}

// ReactDOM.render(<CanvasComponent/>, document.getElementById('container'));

const other = document.getElementById('other');
ReactDOM.render(<CanvasComponent />, other);
