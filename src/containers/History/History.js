import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';

import {columns} from './historyConfig';
import Loading from '../../components/Loading/Loading';
import BaseTable from '../../components/BaseTable/BaseTable';
import * as historyActions from '../../store/actions/index';
import CustomSnackBar from '../../components/UI/CustomSnackBar/CustomSnackBar';
export class History extends Component {
    componentDidMount(){
        this.props.onGetHistory().then(()=>{
        })
    }
   
    render() {
        return (
            <Fragment>
            <CustomSnackBar open={this.props.error} timer={3000} snackType="error">
                {this.props.error}
            </CustomSnackBar>
            <Loading open={this.props.loading}/>
            <BaseTable columns={columns} rows={this.props.histories}></BaseTable>
            </Fragment>
        )
    }
}
const mapStateToProps=(state)=>{
return{
    histories:state.history.data,
    loading:state.history.loading,
    error:state.history.error
}
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onGetHistory:()=>dispatch(historyActions.history())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(History);
