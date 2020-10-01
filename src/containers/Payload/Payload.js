import React, { Component ,Fragment} from 'react'
import { connect } from 'react-redux';

import {columns} from './payloadConfig';
import Loading from '../../components/Loading/Loading';
import BaseTable from '../../components/BaseTable/BaseTable';
import * as payloadActions from '../../store/actions/index';
import CustomSnackBar from '../../components/UI/CustomSnackBar/CustomSnackBar';

export class Payload extends Component {
    componentDidMount(){
        this.props.onGetPayload().then((response)=>{
        })
    }
    render() {
        return (
            <Fragment>
             <CustomSnackBar open={this.props.error} timer={3000} snackType="error">
                {this.props.error}
            </CustomSnackBar>
            <Loading open={this.props.loading}/>
            <BaseTable columns={columns} rows={this.props.payloads} showDetailBtn={true}></BaseTable>
            </Fragment>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        payloads:state.payload.data,
        loading:state.payload.loading,
        error:state.payload.error
    }
    }
    const mapDispatchToProps=(dispatch)=>{
        return{
            onGetPayload:()=>dispatch(payloadActions.payload())
        }
    }
    export default connect(mapStateToProps,mapDispatchToProps)(Payload);
