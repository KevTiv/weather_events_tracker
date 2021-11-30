import LoadSpinner from '../Utils/Img/LoadSpinner.gif'

const Loader = () => {
    return (
        <>
            <div className="loader-container">
                <img  src={LoadSpinner} alt="Loading..."/>
                <h1 >Fetching Data...</h1>
            </div>
        </>
    )
}

export default Loader
