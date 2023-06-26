const DivBlock = (props) => {

	if(typeof props.desc === 'object') 
  	{
	    const cld = [...props.desc]; 
		return (
			<div className={props.outerClass}>
		        <div className={props.itemIdentity}>
		          <div className={props.itemIcon}>
		            <i className={props.iconCode}></i>
		          </div>
		          <div className={props.innerClass}>
		            <h4>{props.title}</h4>
		            {cld.map((dsc,index)=> <div key={index+props.title}><p>{dsc} </p></div>)}
		          </div>
		        </div>
		    </div>
		)
	}
	else
	{
		return (
			<div className={props.outerClass}>
		        <div className={props.itemIdentity}>
		          <div className={props.itemIcon}>
		            <i className={props.iconCode}></i>
		          </div>
		          <div className={props.innerClass}>
		            <h4>{props.title}</h4>
		            <p>{props.desc}</p>
		          </div>
		        </div>
		    </div>
		)
	}
}

export default DivBlock;