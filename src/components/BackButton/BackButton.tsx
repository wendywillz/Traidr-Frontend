

import { BackButtonWholeContainer } from './BackButton.Styled'
import { Link } from 'react-router-dom'
import { BsChevronLeft } from 'react-icons/bs'

interface BackButtonProps{
    linkTo: string;
}
const BackButton = ({linkTo}: BackButtonProps) => {
  return (
 
    <BackButtonWholeContainer>
        <Link to={linkTo}><BsChevronLeft size={30} color='var(--orange-color)' className='back-button'/></Link>
    </BackButtonWholeContainer>
    
  )
}

export default BackButton