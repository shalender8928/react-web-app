import DivBlock from '.././UI/DivBlock';

const ServicesListSingleService = (props) => {
  // console.log(children)
  return (
    <DivBlock 
      outerClass="col-lg-4 col-md-6"
      itemIdentity="single-services"
      itemIcon="service-icon"
      iconCode={`lni ${props.iconClass}`}
      innerClass="service-content"
      title={props.title}
      desc={props.desc}
    />
  )
}

export default ServicesListSingleService;