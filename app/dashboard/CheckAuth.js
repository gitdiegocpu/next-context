"use client"

import { useEffect, useContext } from "react"
import { useRouter, usePathname } from "next/router"
import { AuthContext } from "../context/AuthContext"



export default function CheckAuth () {
    const {user} = useContext(AuthContext)

    useEffect(() => { 
        if(!user && pathname.startWith ('/dashboard')){
            const user = sessionStorafe.getItem('user')
            if(_user) {
            // redirect to login page
            router.push('/login')
        }
        if(user && pathname.startWith('/login')) {
            // redirect to dashboard page
            router.push('/dashboard')
        }
        }, [user, pathname])
    }


    return null 
}