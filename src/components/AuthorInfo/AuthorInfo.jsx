import ProfileIcon from '../../assets/icons/profile.png'
import DateCard from '../DateCard/DateCard'


import React from 'react'

const AuthorInfo = ({ content }) => {

    const photo = content.author.photo ? content.author.photo : ProfileIcon

  return (
    <div>
      <img src={photo} alt="The user's avatar" />
      <section>
        <h4>{content.author.name}</h4>
        <DateCard createdAt={content.createdAt} />
      </section>
    </div>
  )
}

export default AuthorInfo