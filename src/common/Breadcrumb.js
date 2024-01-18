import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter((path) => path !== '');

   // Define routes for which breadcrumb should be hidden
   const hideBreadcrumbRoutes = ['/signup','/login'];

   if (hideBreadcrumbRoutes.includes(location.pathname)) {
     return null; // Don't render breadcrumb for hidden routes
   }

  return (
    <div className='breadCrumbContainer'>
      {paths.length > 0 && (
        <nav>
            <Link to="/">home</Link>
            {paths.map((path, index) => (  
              <span key={index}>
                {index >= 0 && ' / '}
                  <Link to={`/${path}`}>{path}</Link>
              </span>
            ))}
        </nav>
      )}
    </div>
  );
};

export default Breadcrumb;