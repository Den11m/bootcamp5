import React, {Fragment, Component} from 'react';
import Post from './components/post';
import PostList from './components/postsList';
import Timer from './components/timer';
import RenderIf from "./common/renderIf";

class App extends Component{

    state = {
        showTimer: false
    };

    switchTimer = () => {
        this.setState((prevState) => {
            return {
                showTimer: !prevState.showTimer
            }
        })
    };

    passedTimeReverse = (start, end) => {
        let time = parseInt(start) - parseInt(end);
        console.log(time);
    };

    passedTime = (start, end) => {
        let time = parseInt(end) - parseInt(start);
        console.log(time);
    };




    render(){
        return (
            <Fragment>
                <Timer time="5" onTimeOut={this.switchTimer} onPassedTime={this.passedTimeReverse}/>
                <button onClick={this.switchTimer}>Переключить таймер</button>
                <RenderIf condition={this.state.showTimer}>
                    <Timer time="6000" step="2" autoStart/>
                </RenderIf>
                <Timer time='0' reverse={false} onPassedTime={this.passedTime} autoStart/>
            </Fragment>
        );
    }
}
export default App;