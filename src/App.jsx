import React from 'react'
import AdComponent from './Home'
import useScript from './useScript'


const App = () => {
  useScript("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2102496211345907")
  
  return (
    <div>
      <AdComponent/>
    </div>
  )
}

export default App