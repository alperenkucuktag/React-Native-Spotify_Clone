import {createContext, useEffect, useState} from "react";
  


export const AlbumContext = createContext();

export const AlbumProvider = ({children}) => {
 
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const getData = async () => {
        const options = {
            method: 'GET',
            url: 'https://spotify23.p.rapidapi.com/search/',
            params: {
                q: 'Türkiyede Popüler',
              type: 'albums',
              offset: '0',
              limit: '10',
              numberOfTopResults: '5'
            },
            headers: {
              'x-rapidapi-key': '337139bc0dmshfcb02f960da296ap12210bjsn34c33ef0ee43',
              'x-rapidapi-host': 'spotify23.p.rapidapi.com'
            }
          };

          try{
            const response = await axios.request(options);
            const albumItems = response.data?.albums?.items?.map(item => ({
                uri: item.data.uri,
                name: item.data.name,
                year: item.data.date.year,
                artist: item.data.artists.items[0].profile.name,
                coverArt: item.data.coverArt.sources[0].url
            }) )

            setAlbums(albumItems);
            console.log(albumItems);


          }
          catch(error){
            console.log(error);
            setError(error.message);
          }
            finally{
                setLoading(false);
            }   
    }


    useEffect(() => {
       
      getData();
    
    },[])


    return (
        <AlbumContext.Provider value={{albums, loading, error, }}>
            {children}
        </AlbumContext.Provider>
    )
}