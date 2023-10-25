import React from 'react'
import Image from 'react-bootstrap/Image';
import image from '../assets/robot.png'
import TabButton from './TabButton';
import { useState } from 'react'

const About = ({ children, up }) => {
  const [curTab, setCurTab] = useState("skills")

  const tabs = [
    {
      id: "skills",
      content: "my skills",
    },
    {
      id: "education",
      content: "my education",
    }
  ]

  const handleSelect = (tab) => {
    setCurTab(tab)
  }

  return (
    <div className="text-white">
      <div className="grid grid-cols-2 grid-rows-4 gap-6 p-20 pt-32">
        <Image src={image} width={500} height={500} thumbnail />
        <div className="flex flex-col h-full">
          <h2 className="text-4xl">About Me</h2>
          <p className="pt-4 text-base lg:text-lg">
            dwaijdowajdoiwajdoiawjodiwajoidjwaoidj
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton active={curTab === 'skills'} selectTab={handleSelect} name='Skills' />
            <TabButton active={curTab === 'education'} selectTab={handleSelect} name='Education' />
          </div>
          <div className="mt-8">
            {tabs.find((t) => t.id === curTab).content}
          </div>
        </div>
        <div className="flex justify-center col-span-2">
          {children}
        </div>
      </div>
    </div>
  )
}

export default About