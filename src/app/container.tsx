import React,{ReactNode}  from 'react'

const Container = ({children, classNames}:{children : ReactNode, classNames?:string})=>{
    return (
        <div className={`max-auto w-full max-w-7xl px-4 ${classNames}`}>{children}</div>
    )
}

export default Container