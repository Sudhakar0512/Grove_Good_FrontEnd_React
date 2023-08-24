import React from 'react'
import {useParams} from 'react-router-dom'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

const roompage = () => {
    const {roomId} =useParams();

    const myMeeting = async (element) => {

        // generate Kit Token
        const appID = 16863747;
        const serverSecret = "71ebe432e37e1cbb90b95a24233dcd99";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,  Date.now().toString() ,"Grove_Grood_Producer");
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        // start the call
        zp.joinRoom({
               container: element,
               sharedLinks: [
                 {
                   name: 'Copy link',
                   url: `https://grove-good-backend.onrender.com/room/${roomId}`
                    // window.location.protocol + '//' + 
                    // window.location.host + window.location.pathname +
                    //  '?roomID=' +
                    //  roomId,
                 },
               ],
               scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall,
               },
               showScreenSharingButton:true,
          });
    }
  return (
    <div>
        <br /><br /><br />
        <div ref={myMeeting}/>
    </div>
  )
}

export default roompage