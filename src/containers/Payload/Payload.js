import React, { Component } from 'react'
import { connect } from 'react-redux';

import {columns} from './payloadConfig';
import BaseTable from '../../components/BaseTable/BaseTable';
import * as payloadActions from '../../store/actions/index';
export class Payload extends Component {
    componentDidMount(){
        this.props.onGetPayload().then((response)=>{
        })
    }
    render() {
        return (
            <BaseTable columns={columns} rows={this.props.payloads} showDetailBtn={true}></BaseTable>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        payloads:state.payload.data
    }
    }
    const mapDispatchToProps=(dispatch)=>{
        return{
            onGetPayload:()=>dispatch(payloadActions.payload())
        }
    }
    export default connect(mapStateToProps,mapDispatchToProps)(Payload);
