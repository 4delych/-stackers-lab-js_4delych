import React, { useState } from "react";
import {AlbumContainer} from "./styled";

const Album = ({ album }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <AlbumContainer>
            <img src={album.cover} alt={album.title} />
            <div>
                <h2 onClick={() => setIsOpen(!isOpen)}>{album.title}</h2>
                {isOpen && (
                    <ol>
                        {album.songs.map((song, index) => (
                            <li>{song}</li>
                        ))}
                    </ol>
                )}
            </div>

        </AlbumContainer>
    );
};

export default Album;