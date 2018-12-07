import * as React from 'react';
import { Dumb } from './Dumb';
import { any } from 'prop-types';
// import * as PropTypes from 'prop-types'

interface HelloProps { compiler: string; framework: string; }
interface HelloState { value: string, divStyle: Object, classVar: string }

export const NameContext = React.createContext({ color: 'dark' });

export class Hello extends React.Component<HelloProps, HelloState> {

    // public static PropTypes = {
    //     compiler: PropTypes.string,
    //     framework: PropTypes.string
    // }

    public static defaultProps = {
        compiler: 'default',
        framework: 'default'
    }

    private myRef: any;

    public constructor(props: HelloProps) {
        super(props as any);
        // this.updateValue = this.updateValue.bind(this);
        this.myRef = React.createRef();
        this.state = {
            value: "input",
            classVar: "oldClass",
            divStyle: {}
        }
    }

    // public shouldComponentUpdate(nextProps: any, nextState: any) {
    //     console.log(this.state);
    //     console.log(nextState);
    //     return true;
    // }

    // componentWillMount() {
    //     alert('componentWillMount');
    //     // console.log(this.state.value);
    // }


    // componentWillReceiveProps(nextProps: any) {
    //     if (nextProps != this.props) {

    //     }
    //     alert('componentWillReceiveProps');
    // }

    componentDidUpdate() {
        // alert('componentDidUpdate');
        // this.setState({
        //     value: 'a'
        // });
        // console.log(this.state.value);
    }
    // getSnapshotBeforeUpdate() {
    //     alert('getSnapshotBeforeUpdate');
    //     // console.log(this.state.value);
    // }
    public updateValue = (e: any) => {
        // console.error(this.myRef.current.value);
        this.setState({
            value: this.myRef.current.value,
            divStyle: {
                margin: e.target.value + 'px',
                border: '5px solid pink'
            }
        });
        // console.log(this.state.value);
        return this.state.value;
    }

    render() {
        let verb = "Hello verb";
        console.log('Hello renders');
        return (
            <div>
                <input id="input-box" ref={this.myRef} onChange={this.updateValue}></input>
                <h1 >Hello {this.state.value} from {this.props.compiler} and {this.props.framework}!</h1>
                <br></br>
                <NameContext.Provider value={{ color: this.state.value }} >
                    <Dumb verb={this.state.value} divStyle={this.state.divStyle} />
                </NameContext.Provider >
            </div >
        );
    }
}

// export const NameContextConsumer = NameContext.Consumer;