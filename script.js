 const videoElement = document.getElementById('video');
 const button = document.getElementById('button');

 //promp to select media stream, pass to video element, then play

 async function selectMediaStream () {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }

  }
  catch (error) {
    console.log('something is wrong here', error); 
  }
 }

 button.addEventListener('click', async () => {
  //disable button
  button.disable = true;
  await videoElement.requestPictureInPicture();
  //resete button
  button.disable = false;
 })

   

//on load
 selectMediaStream();