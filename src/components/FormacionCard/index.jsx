export default function FormacionCard({children, data, className}){
    return(
        <div className={className} style={{color:"#fff"}}>
            <div className="flex w-full justify-between">
                <h3 className="font-bold text-xl">{data.name}</h3>
                <span>{data.type}</span>
            </div>
            <div className="flex w-full justify-between">
                <h4 className="text-sky">{data.title}</h4>
                <span>{data.time}</span>
            </div>
            
            <p className="py-2">{children}</p>
        </div>
    )
}