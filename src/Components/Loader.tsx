import BarLoaderAnimation from '../Utils/Img/barLoaderAnimation.svg';
const Loader = () => {
    return (
        <>
            <div className="loader-container">
                <img  src={BarLoaderAnimation} alt="Loading..."/>
                
                <h1>Loading...</h1>
            </div>
        </>
    )
}

export default Loader
