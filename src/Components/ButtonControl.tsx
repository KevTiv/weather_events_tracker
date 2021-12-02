import {Icon} from '@iconify/react';
import locationFireIcon from '@iconify/icons-ic/outline-local-fire-department';
import locationVolcanoIcon from '@iconify/icons-emojione-monotone/snow-capped-mountain';
import locationCloudIcon from '@iconify/icons-wi/storm-showers';

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
                <div className="button-control-container">
                    <div>
                        <button onClick={onClickFireEvents}>
                            <Icon icon={locationFireIcon} className="button-marker text-red-600"/>
                            <span>Fire events</span>
                        </button>
                    </div>
                    <div>
                        <button onClick={onClickVolcanosEvents}>
                            <Icon icon={locationVolcanoIcon} className="button-marker text-brown-400"/>
                            <span>Volcano events</span>
                        </button>
                    </div>
                    <div>
                        <button onClick={onClickStormsEvents}>
                            <Icon icon={locationCloudIcon} className="button-marker text-blue-600"/>
                            <span>Storm events</span>
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ButtonControl;
