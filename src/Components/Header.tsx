import {Icon} from '@iconify/react';
import weatherAppIcon from '@iconify/icons-mdi/sun-wireless-outline';

const Header = () => {
    return (
        <>
            <header className="header-wrapper">
                <h1>
                    <Icon icon={weatherAppIcon}/> Weather App Track Event
                </h1>
            </header>
        </>
    )
}

export default Header
