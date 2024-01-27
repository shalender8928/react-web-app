import React, {useState, useEffect, useRef} from 'react';
import ServicesListSingleService from './PageComponents/ServicesListSingleService';

const OurServices = () => {

	const [data,setData] = useState([]);
	const loggged = useRef(true);

	const getData = () => {
		fetch('./jsonFiles/services.json',{
			headers:{
				'Content-Type' : 'application/json',
				'Accept' : 'application/json'
			}
		})
		.then((res)=>{
			return res.json();
		})
		.then((resp)=>{
			setData(resp);
		})
	}
	useEffect(()=>{
		if (loggged.current) {
			loggged.current = false;
			getData();
		}
	},[]);

	

	if(data)
	{
		const serviceTitle = (data.title) ? data.title : null; 
		const serviceDesc = (data.desc) ? data.desc : null; 
		const serviceData = (data.services) ? data.services : null;
		const serviceItems = (serviceData) ? serviceData.map((service,indx)=> 	
			<ServicesListSingleService 
				key={indx}
	      		iconClass={service.iconClass}
	      		title={service.title}
	      		desc = {service.desc}
	      	/>
		) : null;
	

		return (
			<section id="services" className="services-area services-eight">
			    <div className="section-title-five">
			      <div className="container">
			        <div className="row">
			          <div className="col-12">
			            <div className="content">
			              <h6>Services</h6>
			              <h2 className="fw-bold">{serviceTitle}</h2>
			              <p>{serviceDesc}</p>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>

			    <div className="container">
			      <div className="row">
			      	{serviceItems}
			      </div>
			    </div>
			  </section>
		);
	}
	return null;
}

export default OurServices;