import Show from './Show'

const ShowsList = ({ showData = [] }) => {
  return (
    <div className='shows-container'>
      
      {
      showData.map(singleShowData => {
      if(singleShowData.show.image) {
        return <Show key = { singleShowData.show.id } show = {singleShowData.show} />
      }
    })}
      
      
    </div>
    )
}

export default ShowsList