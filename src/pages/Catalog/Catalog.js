import Footer from "../../components/Footer"
import "./Catalog.css"
import OutletCatalog from "./OutletCatalog"

function Catalog({setImg}) {

    

    return (

        <>
        <div className="catalog" id="catalog">
            <div className="catalogDiv">
                <div className="hr"></div>
                <OutletCatalog setImg={setImg}/>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Catalog