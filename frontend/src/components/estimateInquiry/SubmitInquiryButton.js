import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetButton, selectButtonDisplay, selectEmailStatus } from "../../slices/submitInquirySlice";

export const SubmitInquiryButton = () => {
    const buttonData = useSelector(selectButtonDisplay);
    const {loadingImgDisplay, textDisplay, successTextDisplay, failureTextDisplay} = buttonData
    const {emailStatus} = useSelector(selectEmailStatus)
    const dispatch = useDispatch()
    useEffect(() => {
        let timer
        if (emailStatus === 'fulfilled' || emailStatus === 'failed') {
            timer = setTimeout(() => {
                dispatch(resetButton())
            }, 3000)
        }

        return () => {
            if (timer) {
                clearTimeout(timer)
            }
        }
    })

    return (
        <button type="submit">
            <p className ='normal-button' style={{display: `${textDisplay}`}}>Send Inquiry</p>
            <div className="loading-gif-container" style={{display: `${loadingImgDisplay}`}}><img className = 'loading-gif' src={require('../../media/loading.gif')}/></div>
            <p className = 'success-button' style={{display: `${successTextDisplay}`}}>Inquiry Sent!</p>
            <p className = 'failure-button' style={{display: `${failureTextDisplay}`}}>Failed to send. Please try again.</p>
        </button>
    )
}    
