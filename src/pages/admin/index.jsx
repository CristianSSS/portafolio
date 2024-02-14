import Button from "../../components/Button";

export default function Admin(){
    return(
       <div className="container h-screen flex justify-center items-center">

            <form action="" className="shadow-lg w-80 p-10">

                <div className="flex flex-col gap-2 mt-5">
                    <label htmlFor="">User</label>
                    <input className="border rounded" type="text" />
                </div>

                <div className="flex flex-col gap-2 mt-5">
                    <label htmlFor="">Password</label>
                    <input className="border rounded" type="password" />
                </div>

              

                <Button classNameAdd="mx-auto w-100">Ingresar</Button>

            </form>
       </div>
    )
}