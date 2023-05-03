import React, { useEffect, useState } from "react";

// Api calls 

import { getAllAnimes } from "../../api/calls/GetAllAnimes";
import { IAnimeDisplayMapper } from "../../api/mappers/home/IAnimeDisplayMapper";
import { AnimeDTO } from "../../api/dto/AnimeDTO";

//
export function useHome () {
    const [animes, setAnimes] = useState<IAnimeDisplayMapper[]>([]);

    function setInitialAnimes (DTO: AnimeDTO):  IAnimeDisplayMapper[] | undefined {
        try {
            return DTO.data.map((anime) => {
                return {
                    id: anime.mal_id,
                    name: anime.title_english,
                    photo: anime.images.jpg.image_url
                }
            })  
        } catch (err) {
            console.log('[ UI ]', err)
        }
    }

    async function getInitialAnimes () {
        const response = await getAllAnimes()
        const data = setInitialAnimes(response)
        
        if(data){
            setAnimes(data)
        }
    }
    useEffect(() => {
        getInitialAnimes()
    }, [])

    return {
        animes
    }
}