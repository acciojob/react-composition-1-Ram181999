import React from 'react'



const Tabs = ({tabsprop}) => {
    // console.log(tabsprop);
    const [content, Setcontent] = React.useState(tabsprop[0].content);
  return (
    <div>
        <ul>
            {tabsprop.map((item)=>(
<li onClick={()=>Setcontent(item.content)}>{item.title}</li>
  )) }
        </ul>
        <p>{content}</p>
    </div>
  )
}

export default Tabs