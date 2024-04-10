
import { ForwardButtonWholeContainer } from './ForwardButton.Styled'; 
import { Link } from 'react-router-dom'
import { BsChevronRight } from 'react-icons/bs'

interface BackButtonProps{
    linkTo: string;
}
const ForwardButton = ({linkTo}: BackButtonProps) => {
  return (
 
    <ForwardButtonWholeContainer>
        <Link to={linkTo}><BsChevronRight size={30} color='var(--orange-color)' className='back-button'/></Link>
    </ForwardButtonWholeContainer>
    
  )
}

export default ForwardButton