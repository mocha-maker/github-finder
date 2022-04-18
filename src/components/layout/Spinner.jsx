import spinner from './assets/spinner.gif'

function Spinner() {
  return (
    <div>
      <img 
        width={64} 
        className='text-center mx-auto' 
        src={spinner} 
        alt="Loading..."/>
    </div>
  )
}

export default Spinner