import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdOutlineChevronRight } from "react-icons/md";
import '../Breadcrumbs/Breadcrumb.css'

const BreadCrumb = () => {

    const location = useLocation();
    const breadcrumb = location.pathname.split('/').filter((path) => path !== '');
    console.log(breadcrumb);
    let crumblink = '';

    console.log(breadcrumb);
     // Render the component only if the breadcrumb length is greater than 1
  if (breadcrumb.length <= 0) {
    return null;
  }
  return (
    <div className='breadcrumbs-box' style={{backgroundImage:'url(https://raw.githubusercontent.com/Code-With-Pradeep/myproject/main/Percentage/Image/crubs.png)'}}>
      <div className="container">
        <h1>{breadcrumb[0]}</h1>
      </div>
      
      <div className="bread-tabs">
      <Link to={'/'} className='home-tab'>Home</Link>
      {
        breadcrumb.map((crumbs)=>{
          crumblink += `/${crumbs}`
          return(

            <div className="breadcrumbs" key={crumbs}>
              <div className="bread-icon">
              <MdOutlineChevronRight />
              </div>
              <Link to={crumblink}>{crumbs}</Link>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default BreadCrumb
