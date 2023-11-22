
import CheckAuth from "./CheckAuth"

export default function Dashboard ({children}) {
    return(
        <main className="p-8">
        <h1 className="text-2xl font-bold">Dashboard Layout</h1>
        <CheckAuth/>
        {children}
        </>
    )
}