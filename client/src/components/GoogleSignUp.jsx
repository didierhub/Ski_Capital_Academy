import React from 'react'
import GoogleButton from 'react-google-button'

function GoogleSignUp({handlegoogleSignUp}) {
  return (
    <div className='flex justify-center'>
      
    <GoogleButton
onClick={handlegoogleSignUp}
 />
</div>
  )
}

export default GoogleSignUp


