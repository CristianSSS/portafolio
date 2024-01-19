export default function FormacionCard({children, data}){
    return(
        <div style={{color:"#fff"}}>
            <div className="flex w-full justify-between">
                <h3>{data.name}</h3>
                <span>{data.type}</span>
            </div>
            <div className="flex w-full justify-between">
                <h4>{data.title}</h4>
                <span>{data.time}</span>
            </div>
            
            <p className="py-2">{children}</p>
        </div>
    )
}