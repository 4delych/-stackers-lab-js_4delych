import albumList from "../albumsList";
import Album from "./Album";
import {AlbumsTitle, HeaderContainer} from "./styled";

const Header = () => {
    return (
        <HeaderContainer>
            <AlbumsTitle>Albums</AlbumsTitle>
            {albumList.map(album => (
                <Album album={album} />
            ))}
        </HeaderContainer>
    );
};

export default Header;