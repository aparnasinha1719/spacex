import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';

import {columns} from './historyConfig';
import Loading from '../../components/Loading/Loading';
import BaseTable from '../../components/BaseTable/BaseTable';
import * as historyActions from '../../store/actions/index';
export class History extends Component {
    componentDidMount(){
        this.props.onGetHistory().then(()=>{
        })
    }
    render() {
        return (
            <Fragment>
            <Loading open={this.props.loading}/>
            <BaseTable columns={columns} rows={this.props.histories}></BaseTable>
            </Fragment>
        )
    }
}
const mapStateToProps=(state)=>{
return{
    histories:state.history.data,
    loading:state.history.loading
}
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onGetHistory:()=>dispatch(historyActions.history())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(History);
