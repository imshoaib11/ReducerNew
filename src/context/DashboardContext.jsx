import React from 'react'
export const DashboardContext = React.createContext()

function DashboardContextComponent({children}) {

    let data = [
        {
            title: "Earnings Monthly",
            value: "$40,000",
            color: "primary",
            isProgress: false
        },
        {
            title: "Earnings Annual",
            value: "$215,000",
            color: "success",
            isProgress: false,
            icon: "dollar-sign"
        },
        {
            title: "Earnings Monthly",
            value: "90",
            color: "info",
            isProgress: true,
            icon: "clipboard-list"
        },
        {
            title: "Earnings Monthly",
            value: "18",
            color: "warning",
            isProgress: false,
            icon: "comments"
        }
    ]
  return <DashboardContext.Provider value={{data}}>
    {children}
  </DashboardContext.Provider>
   
}

export default DashboardContextComponent