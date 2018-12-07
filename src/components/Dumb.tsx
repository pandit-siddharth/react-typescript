import * as React from 'react';
import { NameContext } from './Hello';
import { Chiku } from './Chiku';

interface DumbProps { verb: string, divStyle: Object };

export function Dumb(props: DumbProps) {
    console.log('DUMB renders');
    return (
        <div>
            <NameContext.Consumer>
                {(context) => {
                    return (
                        <div>
                            I am a {props.verb} component painted in {context.color}
                            <div>
                                <Chiku name="chikoo" />
                            </div>
                        </div>
                    )
                }}
            </NameContext.Consumer>
        </div>
    );
}

// export class Dumb extends React.Component<DumbProps> {

//     public constructor(props: DumbProps) {
//         super(props as any);
//         // this.updateValue = this.updateValue.bind(this);
//     }
//     // static getDerivedStateFromProps(nextProps: any, prevState: any): null {
//     //     // alert("getDerivedStateFromProps from Child");
//     //     // console.log(nextProps);
//     //     // console.log(prevState);
//     //     return null;
//     // }
//     // componentWillMount() {
//     //     alert('DUMB componentWillMount');
//     // }

//     // componentWillReceiveProps(nextProps: any) {
//     //     alert('DUMB componentWillReceiveProps : ' + nextProps);
//     // }
//     // getSnapshotBeforeUpdate(): null {
//     //     alert('dumb getSnapshotBeforeUpdate');
//     //     return null;
//     // }

//     // componentWillUpdate() {
//     //     alert('DUMB componentWillUpdate');
//     // }

//     // componentDidUpdate() {
//     //     alert('dumb componentDidUpdate');
//     // }

//     render() {
//         console.log('Dumb renders');
//         return (
//             <div>
//                 <NameContext.Consumer>
//                     {(context) => {
//                         return (
//                             <div>
//                                 I am a {this.props.verb} component painted in {context.color}
//                             </div>
//                         )
//                     }}
//                 </NameContext.Consumer>
//             </div>
//         );
//     }
// }
