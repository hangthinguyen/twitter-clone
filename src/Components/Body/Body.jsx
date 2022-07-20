import RightSidebar from '../RightSidebar/RightSidebar';
import Feed from '../Feed/Feed';
import VerticalNavMenu from '../VerticalNavMenu/VerticalNavMenu';
import './Body.css';

export default function Body() {
    return (
        <div>
            <VerticalNavMenu/>
            <Feed/>
            <RightSidebar/>
        </div>
    )
}