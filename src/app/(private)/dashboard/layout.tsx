import React, {ReactNode} from 'react'

const DashboardLayout = ({children}:{children:ReactNode})=>{
    return (
        <div className="dashboard-layout">
            <header>Dashboard Header</header>
            <main>{children}</main>
            <footer>Dashboard Footer</footer>
        </div>
    )
}

export default DashboardLayout