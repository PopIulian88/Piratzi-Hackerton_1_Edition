import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {homeStyles} from "../style/homeStyles";
import {AppRegistry, Text, View, TouchableHighlight} from 'react-native';
import {Component} from "react";
import Stopwatch from "react-native-stopwatch-timer/lib/stopwatch";
import Timer from "react-native-stopwatch-timer/lib/timer";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {AntDesign, Foundation, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";

class TimerApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timerStart: false,
            stopwatchStart: false,
            totalDuration: 1800000,
            timerReset: false,
            stopwatchReset: false,
        };
        this.toggleTimer = this.toggleTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);

        // this.toggleStopwatch = this.toggleStopwatch.bind(this);
        // this.resetStopwatch = this.resetStopwatch.bind(this);
    }

    toggleTimer() {
        this.setState({timerStart: !this.state.timerStart, timerReset: false});
    }

    resetTimer() {
        this.setState({timerStart: false, timerReset: true});
    }

    // toggleStopwatch() {
    //     this.setState({stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false});
    // }
    //
    // resetStopwatch() {
    //     this.setState({stopwatchStart: false, stopwatchReset: true});
    // }

    getFormattedTime(time) {
        this.currentTime = time;
    };

    render() {
        return (
            <View style={homeStyles.container}>
                {/*<Stopwatch laps msecs start={this.state.stopwatchStart}*/}
                {/*           reset={this.state.stopwatchReset}*/}
                {/*           options={options}*/}
                {/*           getTime={this.getFormattedTime} />*/}
                {/*<TouchableHighlight onPress={this.toggleStopwatch}>*/}
                {/*    <Text style={{fontSize: 30}}>{!this.state.stopwatchStart ? "Start" : "Stop"}</Text>*/}
                {/*</TouchableHighlight>*/}
                {/*<TouchableHighlight onPress={this.resetStopwatch}>*/}
                {/*    <Text style={{fontSize: 30}}>Reset</Text>*/}
                {/*</TouchableHighlight>*/}

                <View style={homeStyles.timerContainer}>
                    <View style={homeStyles.circleTimerContainer}>
                        <Timer totalDuration={this.state.totalDuration} msecs start={this.state.timerStart}
                               reset={this.state.timerReset}
                               options={options}
                               handleFinish={handleTimerComplete}
                               getTime={this.getFormattedTime}/>
                    </View>
                </View>

                <View style={homeStyles.buttonsContainer}>
                    {/*<TouchableHighlight onPress={this.toggleTimer}>*/}
                    {/*    <Text style={{fontSize: 30}}>{!this.state.timerStart ? "Start" : "Stop"}</Text>*/}
                    {/*</TouchableHighlight>*/}
                    {
                        !this.state.timerStart ?
                            <AntDesign
                                onPress={this.toggleTimer}
                                name="play"
                                size={100}
                                color="white"
                                style={{alignSelf: "center"}}
                            /> : <MaterialIcons
                                onPress={this.toggleTimer}
                                name="motion-photos-pause"
                                size={100}
                                color="white"
                                style={{alignSelf: "center"}}
                            />
                    }

                    <MaterialCommunityIcons
                        onPress={this.resetTimer}
                        name="lock-reset"
                        size={100}
                        color="white"
                        style={{alignSelf: "center"}}
                    />
                </View>
            </View>
        );
    }
}

const handleTimerComplete = () => alert("custom completion function");

const options = {
    container: {
        backgroundColor: "#6496DF",
        justifyContent: "center",
        alignItems: 'center',
        padding: 5,
        borderRadius: 100,
        height: 200,
        width: 200,
    },
    text: {
        fontSize: 40,
        color: '#FFF',
        marginLeft: 7,
    }
};

AppRegistry.registerComponent('TimerApp', () => TimerApp);


export default function Home() {
    return (
        <TimerApp/>
    )
}