import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <div className="app__navigation">
         {['home', 'about', 'work', 'skills', 'testimonial','contect'].map((item,index) => (
                  <a href={`#${item}`}  key={item+index} className="app__navigation-dot"  style={active ===item ?{backgroundcolor:'#313BAC'}:{}} />
                ))}
    </div>
  )
}

export default NavigationDots