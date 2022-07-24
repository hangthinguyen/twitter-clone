import RightBody from '../RightBody/RightBody';
import VerticalNavMenu from '../VerticalNavMenu/VerticalNavMenu';
import './Body.css';

export default function Body() {
    return (
        <div className='body'>
            <VerticalNavMenu/>
            <RightBody/>
        </div>
    )
}