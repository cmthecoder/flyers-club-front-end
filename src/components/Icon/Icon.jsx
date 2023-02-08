import Add from '../../assets/icons/add.png'
import FAA from '../../assets/icons/faa.png'
import Edit from '../../assets/icons/edit.png'
import News from '../../assets/icons/news.svg'
import Like from '../../assets/icons/like.png'
import Event from '../../assets/icons/event.png'
import Liked from '../../assets/icons/liked.png'
import Trash from '../../assets/icons/trash.png'
import Advice from '../../assets/icons/advice.png'
import Create from '../../assets/icons/create.svg'
import Milestone from '../../assets/icons/milestone.png'
import Comments from '../../assets/icons/comments.png'
import Calendar from '../../assets/icons/calendar.svg'
import Adventure from '../../assets/icons/adventure.png'

const Icon = ({ category }) => {
  const icons = {
    Add: Add,
    FAA: FAA,
    News: News,
    Like: Like,
    Edit: Edit,
    Liked: Liked,
    Trash: Trash,
    Event: Event,
    Advice: Advice,
    Create: Create,
    Calendar: Calendar,
    Comments: Comments,
    Milestone: Milestone,
    Adventure: Adventure,
  }

  return <img className="icon" src={icons[category]} alt={`A ${category} icon.`} />
}

export default Icon