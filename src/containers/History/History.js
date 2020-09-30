import React, { Component } from 'react'
import { connect } from 'react-redux';

import {columns} from './historyConfig';
import BaseTable from '../../components/BaseTable/BaseTable';
import * as historyActions from '../../store/actions/index';
export class History extends Component {
    componentDidMount(){
        this.props.onGetHistory().then(()=>{
        })
    }
    render() {
        return (
            <BaseTable columns={columns} rows={this.props.histories}></BaseTable>
        )
    }
}
const mapStateToProps=(state)=>{
return{
    histories:state.history.data
}
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onGetHistory:()=>dispatch(historyActions.history())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(History);
