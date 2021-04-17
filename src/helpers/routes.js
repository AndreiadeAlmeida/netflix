import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export function IsUserRedirect({ user, loggedInPath, children, ...rest}) {
    return (
        <Route
            {...rest}
            render={() => {
              if(!user){
                return children; // return signin page
                }
              if (user) {
                console.log(loggedInPath);
                return (
                  <Redirect
                    to={{ 
                      pathname: loggedInPath // redirect to the logged in path
                    }}
                  />
                );
              }          
              return null;
            }}
        />
    );
}


// only people who are signup can access this pages
export function ProtectedRoute({user, children, ...rest}) {
    return (
        <Route 
            {...rest}
            render={({location}) => {
                if(user) {
                    return children // if I have a rotective route and there's a user show the browse page
                }

                if (!user) {
                  return(
                    <Redirect 
                        to={{
                            pathname: 'signin',
                            state: { from: location },
                        }}
                    />
                  )
                }

                return null;
            }}
        />
    )
}
