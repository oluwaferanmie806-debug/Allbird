export default function Navbar(){
    return(
        <nav>
            <div className="bg-black text-white fixed w-full">
            <h1 className="ml-110">Extra 25% off sale items. Shop men | shop women</h1>
            </div>
            <div className="bg-white flex text-black fixed top-20 h-15 rounded-2xl w-310 ml-5">
                <img src={'https://1000logos.net/wp-content/uploads/2022/05/Allbirds-Logo-2048x1153.jpg'} className="h-15 ml-10 w-25"></img>
                <p>Men</p>
                <p>Women</p>
                <p>Sales</p>
                <p>About</p>
                <p>Rerun</p>
                <button>
                <img src={'https://img.icons8.com/?size=60&id=59878&format=png'} className="h-5 w-5"></img>
                </button>
                <button>
                <img src={'https://img.icons8.com/?size=160&id=111473&format=png'} className="h-5 w-5"></img>
                </button>
                <button>
                <img src={'https://img.icons8.com/?size=100&id=646&format=png'} className="h-5 w-5"></img>
                </button>
                <button>
                <img src={'https://img.icons8.com/?size=100&id=94&format=png'} className="h-5 w-5"></img>
                </button>
            </div>
        </nav>
    )
}