import ProfileIcon from '../../assets/icons/profile.png'
import DateCard from '../DateCard/DateCard'


import React from 'react'

const AuthorInfo = ({ content }) => {

    const photo = content.author.photo ? content.author.photo : ProfileIcon

  return (
    <div className='m-0 flex items-center justify-start'>
      <img className='w-8 mr-3 rounded-full' src={photo} alt="The user's avatar" />
      <section className='flex flex-col'>
        <h4 className='opacity-75'>{content.author.name}</h4>
        <DateCard createdAt={content.createdAt} />
      </section>
    </div>
  )
}

export default AuthorInfo