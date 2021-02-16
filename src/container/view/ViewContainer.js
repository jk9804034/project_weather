// System Import
import React, { Fragment, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// Component Import
import ViewContent from "../../page/view/ViewContent";
import Spinner from "../../components/spinner/Spinner";
// Reducer Import
import {
    viewDataLoad,
    viewDataReset
} from "../../store/modules/view";

function ViewContainer(){
    const params = useParams();
    const dispatch = useDispatch();
    const {
        styleMenu
    } = useSelector(( state ) => state.header);
    const {
        cityName,
        post,
        data
    } = useSelector(( state ) => state.view);

    // 초기 한번 실행
    useEffect(() => {
        if( params.name ){
            dispatch( viewDataLoad(params.name) );
        }

        return () => {
            dispatch( viewDataReset() );
        } 
    }, []);

    return (
        <Fragment>
            {
                data && 
                    <ViewContent
                        psData={data}
                        psCityName={cityName}
                        psStyleMenu={styleMenu}
                    />
            }

            {/* 로딩 Spinner */}
            <Spinner
                psLoading={post.loading}
            />
        </Fragment>
    )
}

export default ViewContainer;
