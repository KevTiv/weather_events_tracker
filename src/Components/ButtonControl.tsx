
type buttonControlProps = {
    onClickFireEvents: (event: React.MouseEvent) =>void,
    onClickVolcanosEvents: (event: React.MouseEvent)=>void,
    onClickStormsEvents: (event: React.MouseEvent)=>void
}

const ButtonControl = ({onClickFireEvents, onClickVolcanosEvents, onClickStormsEvents}: buttonControlProps) => {
    
    
    return (
        <>
            <form className="button-control-wrapper">
                <h2>Choose events </h2>
                <div>
                    <button onClick={onClickFireEvents}>
                        <span>Fire events</span>
                    </button>
                </div>
                <div>
                    <button onClick={onClickVolcanosEvents}>
                        <span>Volcano events</span>
                    </button>
                </div>
                <div>
                    <button onClick={onClickStormsEvents}>
                        <span>Storm events</span>
                    </button>
                </div>
            </form>
        </>
    )
}

export default ButtonControl;
