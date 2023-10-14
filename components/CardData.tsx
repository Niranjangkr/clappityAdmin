import React, {useState} from 'react'

const CardData = () => {
const [ filled, setFilled ] = useState(0);
const [ isRunning, setIsRunning ] = useState(true);

  return (
    <div className='flex flex-col justify-center items-center '>
      <p className='font-medium mb-4'> Free Plan <span className='font-light'>- 30 Mins</span></p>
        <div className="relative w-[100%] h-[10px] bg-[#374151] hidden md:flex">
            <div className={`h-["100%"] ${filled}% duration-75`}></div>
        </div>
      <button className='w-full bg-[#215ABE] rounded-lg p-2 text-white mt-3'>
        Upgrade
      </button>
    </div>
  )
}

export default CardData


// const ProgressBar = () => {
//     const [ filled, setFilled ] = useState(0);
//     const [ isRunning, setIsRunning ] = useState(true);
//   return (
//     <div>
//         <div className="relative hidden w-[305px] h-[5px] rounded-full bg-blue-800">
//             <div className={`h-["100%"] ${filled}% duration-75`}></div>sdf
//         </div>
//     </div>
//   )
// }

// export default ProgressBar