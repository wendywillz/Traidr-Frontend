import { ProfileNavigationList, ProfileNavigationContainer } from "./ProfileNavigation.styled"

// import { useState } from "react"


const ProfileNavigation = () => {
   // const [activeStatus, setActiveStatus] = useState(false)
   // let x=""
  return (
    <ProfileNavigationContainer>
    <ProfileNavigationList>
        <li className={`profile-navigation-list-item active`}>Profile Settings <br/><br/> <hr className={`profile-section-underline active-line`}/> </li>
        <li className={`profile-navigation-list-item`}>Password <br/> <br/><hr className={`profile-section-underline`}/></li>
        <li className={`profile-navigation-list-item`}>Notification<br/><br/> <hr className={`profile-section-underline`}/></li>
        <li className={`profile-navigation-list-item`}>Verification<br/><br/> <hr className={`profile-section-underline`}/></li>

    </ProfileNavigationList>
    <hr className="profile-navigation-line"/>
    </ProfileNavigationContainer>
  )
}

export default ProfileNavigation