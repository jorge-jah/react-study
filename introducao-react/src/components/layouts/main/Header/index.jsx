import logo from "../../../../assets/images/logo.png";

export function Header() {
    return (
       <header className="flex justify-between px-10 items-center bg-gray-200 py-4">
            <img className="w-32" src={logo} />
            <div className="flex gap-3 items-center">
            <box-icon name='user-circle' ></box-icon>
                <p>Olá, Jorge</p>
                
            </div>
       </header>    
    );    
}